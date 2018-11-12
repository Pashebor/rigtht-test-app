import React from 'react';
import DefaultButton from './elements/buttons/DefaultButton';

class MyApp extends React.Component{
    render() {
        return(
            <main>
                <h1 className={'title icon icon-heart'}>Hello Juli!</h1>
                <DefaultButton message={'I\'m here now !'} />
            </main>
        )
    }
}

export  default  MyApp;