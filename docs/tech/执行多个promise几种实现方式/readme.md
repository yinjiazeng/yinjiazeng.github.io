---
title: 执行多个promise几种实现方式
---

### 串行

这种方式需要等所有promise执行完毕才会继续执行后续代码，如果后续执行需要依赖前面执行结果才会采用这种模式。

```js
(async () => {
  try {
    const a = await Promise.resolve(1);
    console.log(a);
    const b = await Promise.resolve(2);
    console.log(b);
    const c = await Promise.resolve(3);
    console.log(c);
    console.log('done');
  } catch(e) {
    console.log('reject', e);
  }
})();
// 依次打印
// => 1
// => 2
// => 3
// => done
```

当中间某一个promise执行失败，后续代码将不能继续执行。

```js
(async () => {
  try {
    const a = await Promise.resolve(1);
    console.log(a);
    const b = await Promise.reject(2);
    console.log(b);
    const c = await Promise.resolve(3);
    console.log(c);
    console.log('done');
  } catch(e) {
    console.log('reject', e);
  }
})();
// 依次打印
// => 1
// => reject 2
```

### 并行Promise.all

多个promise互不依赖，当最慢的返回结果后，按顺序返回promise结果数组，继续执行后续代码。

```js
(async () => {
  try {
    const res = await Promise.all([
      new Promise((res) => {
        setTimeout(() => {
          console.log('a');
          res(1);
        }, 200);
      }),
      new Promise((res) => {
        setTimeout(() => {
          console.log('b');
          res(2);
        }, 100);
      })
    ]);
    console.log(res);
    console.log('done');
  } catch(e) {
    console.log('reject', e);
  }
})();
// 依次打印
// => b
// => a
// => [1, 2]
// => done
```

当某一个promise执行失败，后续代码将不能继续执行，但不影响未执行结束promise的结果。

```js
(async () => {
  try {
    const res = await Promise.all([
      new Promise((res) => {
        setTimeout(() => {
          console.log('a');
          res(1);
        }, 200);
      }),
      new Promise((res, rej) => {
        setTimeout(() => {
          console.log('b');
          rej(2);
        }, 100);
      })
    ]);
    console.log(res);
    console.log('done');
  } catch(e) {
    console.log('reject', e);
  }
})();
// 依次打印
// => b
// => reject 2
// => a
```

### 并行Promise.race

多个promise互不依赖，如果最快promise执行成功，返回该promise结果，哪怕后续promise执行失败也不影响，继续执行后续代码。

```js
(async () => {
  try {
    const res = await Promise.race([
      new Promise((res, rej) => {
        setTimeout(() => {
          console.log('a');
          rej(1);
        }, 200);
      }),
      new Promise((res) => {
        setTimeout(() => {
          console.log('b');
          res(2);
        }, 100);
      })
    ]);
    console.log(res);
    console.log('done');
  } catch(e) {
    console.log('reject', e);
  }
})();
// 依次打印
// => b
// => 2
// => done
// => a
```

如果最快的promise执行失败，后续代码将不能继续执行。

```js
(async () => {
  try {
    const res = await Promise.race([
      new Promise((res) => {
        setTimeout(() => {
          console.log('a');
          res(1);
        }, 200);
      }),
      new Promise((res, rej) => {
        setTimeout(() => {
          console.log('b');
          rej(2);
        }, 100);
      })
    ]);
    console.log(res);
    console.log('done');
  } catch(e) {
    console.log('reject', e);
  }
})();
// 依次打印
// => b
// => reject 2
// => a
```

### 并行Promise.allSettled

多个promise互不依赖，不管promise执行结果如何，都不会执行失败，等全部promise执行结束后，按顺序返回promise结果数组，继续执行后续代码。

```js
(async () => {
  try {
    const res = await Promise.allSettled([
      new Promise((res) => {
        setTimeout(() => {
          console.log('a');
          res(1);
        }, 200);
      }),
      new Promise((res, rej) => {
        setTimeout(() => {
          console.log('b');
          rej(2);
        }, 100);
      })
    ]);
    console.log(res);
    console.log('done');
  } catch(e) {
    console.log('reject', e);
  }
})();
// 依次打印
// => b
// => a
// => [{"status":"fulfilled","value":1}, {"status":"rejected","reason":2}]
// => done
```

### 并行for/await

和Promise.all类似，不同的是Promise.all必须等全部执行完后才能获取到结果，而for/await可以立即得到promise的返回结果，当然这取决于数组第一个promise的执行速度。

```js
(async () => {
  const arr = [
    new Promise((res, rej) => {
      setTimeout(() => {
        console.log('a');
        res(1);
      }, 100);
    }),
    new Promise((res, rej) => {
      setTimeout(() => {
        console.log('b');
        res(2);
      }, 200);
    })
  ];
  for await (let i of arr) {
    console.log(i);
  }
  console.log('done');
})();
// 依次打印
// => a
// => 1
// => b
// => 2
// => done
```

如果第一个数组promise执行是最慢的，和Promise.all在速度上没有区别。

```js
(async () => {
  const arr = [
    new Promise((res, rej) => {
      setTimeout(() => {
        console.log('a');
        res(1);
      }, 200);
    }),
    new Promise((res, rej) => {
      setTimeout(() => {
        console.log('b');
        res(2);
      }, 100);
    })
  ];
  for await (let i of arr) {
    console.log(i);
  }
  console.log('done');
})();
// 依次打印
// => b
// => a
// => 1
// => 2
// => done
```