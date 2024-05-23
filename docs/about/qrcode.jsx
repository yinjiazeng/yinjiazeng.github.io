import React from 'react';

function Qrcode({ list = [] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {list.map(({ url, title }) => (
        <div key={title} style={{ textAlign: 'center', marginRight: 20, marginTop: 4 }}>
          <img src={url} style={{ width: 120, height: 120 }} />
          <div> { title } </div>
        </div>
      ))}
    </div>
  )
}

export function Fit() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/fit_mp.png').default,
    },
  ]} />
}

export function Kbt() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/kbt_mp.png').default,
    },
    {
      title: 'APP',
      url: require('./.img/kbt_app.png').default,
    },
    {
      title: 'H5',
      url: require('./.img/kbt_h5.png').default,
    }
  ]} />
}

export function KbtBu() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/kbt_bu_mp.png').default,
    },
  ]} />
}

export function Card() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/card_mp.png').default,
    },
    {
      title: 'H5',
      url: require('./.img/card_h5.png').default,
    }
  ]} />
}

export function Rights() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/rights_mp.png').default,
    },
  ]} />
}

export function Doctor() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/doctor_mp.png').default,
    },
    {
      title: 'APP',
      url: require('./.img/doctor_app.png').default,
    },
  ]} />
}

export function Ujb() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/ujb_mp.png').default,
    },
    {
      title: 'APP',
      url: require('./.img/ujb_app.png').default,
    },
    {
      title: 'H5',
      url: require('./.img/ujb_h5.png').default,
    }
  ]} />
}

export function Smart() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/smart_mp.png').default,
    },
  ]} />
}

export function Insur() {
  return <Qrcode list={[
    {
      title: '小程序',
      url: require('./.img/insur_mp.png').default,
    },
  ]} />
}