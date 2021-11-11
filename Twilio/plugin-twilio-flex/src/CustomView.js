import React from 'react';
import Iframe from 'react-iframe';

export default class CustomView extends React.Component{
    render(){
        return(
            <>
             
            <Iframe url="https://www.solitr.com"
                width="700"
                height="90%"
                allowFullScreen />
            </>

        )
    }
}