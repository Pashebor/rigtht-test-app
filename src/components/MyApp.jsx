import React from 'react';
import Header  from './layout/Header';
import Main  from './layout/Main';
import RightSideBar from './sidebars/RightSideBar'

class MyApp extends React.Component{
    render() {
        return(
          <React.Fragment>
            <Header/>
            <div className={'content-area container'}>
              <Main/>
              <RightSideBar/>
            </div>
          </React.Fragment>
        )
    }
}

export  default  MyApp;