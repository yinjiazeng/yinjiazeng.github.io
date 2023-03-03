---
title: 实现Promise需要几行代码
---

今天尝试一下手写一个`Promise`，我们不实现错误状态，只实现成功状态，也就是`new Promise(fn).then(fn)`，看看需要几行代码能实现该功能。

## 构造函数

可以看出`Promise`是一个构造函数，通过`new`实例化，接收一个回调函数作为参数。

```js
function Promise(callback) {}
```

`Promise`有2个属性`state`和`result`分别记录状态和结果。

```js
function Promise(callback) {
  this.status = 'pending';
  this.result = undefined;
}
```

构造函数实例化时接收一个回调函数，该回调函数会被立即调用，调用时需传入函数`resolve`，用于更新`state`和`result`。

```js
function Promise(callback) {
  this.status = 'pending';
  this.result = undefined;
  const resolve = (e) => {
    this.status = 'fulfilled';
    this.result = e;  
  }
  callback(resolve);
}
```

## then

实例对象包含一个`then`方法，接收一个回调函数`onFulfilled`，该回调函数会在`resolve`执行时被调用，并将`result`作为参数传入。

```js
Promise.prototype.then = function(onFulfilled) {
  onFulfilled(this.result);
}
```

好了，现在我们来测试一下代码。

```js
new Promise((resolve) => {
  resolve(1);
}).then((e) => {
  console.log(e);
});
```

代码成功打印出了`1`，貌似没有问题，可如果`resolve`是延迟执行呢？

```js
new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 100);
}).then((e) => {
  console.log(e);
});
```

打印出来的却是`undefined`，所以需要改造一下代码，将`onFulfilled`放入回调中，`resolve`调用后再执行这个回调。

```js
function Promise(callback) {
  this.status = 'pending';
  this.result = undefined;
  this._onFulfilled = () => {};
  const resolve = (e) => {
    this.status = 'fulfilled';
    this.result = e;
    this._onFulfilled();
  }
  callback(resolve);
}
Promise.prototype.then = function(onFulfilled) {
  this._onFulfilled = () => {
    onFulfilled(this.result);
  }
}
```

再执行刚才代码打印出了`1`，不过如果将`setTimeout`去掉，又发现了一个问题，`onFulfilled`不执行了，这是因为`resolve`是立即执行的，`_onFulfilled`还没有创建，所以需要在`resolve`中加一个延迟。

```js
function Promise(callback) {
  this.status = 'pending';
  this.result = undefined;
  this._onFulfilled = () => {};
  const resolve = (e) => {
    queueMicrotask(() => {
      this.status = 'fulfilled';
      this.result = e;
      this._onFulfilled();
    });
  }
  callback(resolve);
}
```

因为`Promise`属于`微任务`，相比较`setTimeout`，使用`queueMicrotask`会更好，OK，这样不管延迟还是不延迟，都可以打印出`1`。

### 链式调用

我们知道`Promise`都是支持链式调用的，类似这样`then(fn).then(fn)...`，并且后面`onFulfilled`接收的参数是前面的返回值，只要在`then`中返回一个`Promise`实例就可以实现。

```js
Promise.prototype.then = function(onFulfilled) {
  return new Promise((resolve) => {
    this._onFulfilled = () => {
      resolve(onFulfilled(this.result));
    }
  });
}
```

这样基本的`Promise`功能就已经实现了，一共20行代码。

```js
function Promise(callback) {
  this.status = 'pending';
  this.result = undefined;
  this._onFulfilled = () => {};
  const resolve = (e) => {
    queueMicrotask(() => {
      this.status = 'fulfilled';
      this.result = e;
      this._onFulfilled();
    });
  }
  callback(resolve);
}
Promise.prototype.then = function(onFulfilled) {
  return new Promise((resolve) => {
    this._onFulfilled = () => {
      resolve(onFulfilled(this.result));
    }
  });
}
```

## 总结

这里只是简单实现了`Promise`的基本功能，其中`resolve`内部需要使用微任务进行延迟执行，`then`方法需要返回一个`Promise`实例。`Promise`本身还有好多特性，比如`catch`、`finally`、`Promise.all`等，后续会实现一个完整版的。