import React from 'react';
import Banner from './../elements/banners/Banner';
import bannerTopLogo from '../../assets/images/top-banner2.jpg';
import NavBar from "../navigation-bar/NavBar";

class Header extends React.Component{
  render() {
    return(
      <header className={'header'}>
        <div className={'container'}>
          <Banner
            position={'top'}
            image={bannerTopLogo}
          />
          <NavBar/>
        </div>
      </header>
    );
  }
}

export default Header;
