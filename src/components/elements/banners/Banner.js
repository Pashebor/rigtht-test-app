import React from 'react';

const Banner = ({ position, image, titleText, date}) => {
  switch (position) {
    case 'top':
      return (
        <section className={'banner'}>
          <img src={`${image}`} alt={`${image}`}/>
        </section>
      );
      break;
    case 'sidebar':
      return (
        <section className={'banner'}>
          <img src={`${image}`} alt={`${image}`}/>
        </section>
      );
      break;
    case 'title':
      return (
        <section className={'banner banner--title'} style={{backgroundImage: `url(${image})`}}>
          <div className={'banner__title'}>
            <h3>{ titleText }</h3>
            <time>{ date }</time>
          </div>
        </section>
      );
      break;
  } 
};

export default Banner;