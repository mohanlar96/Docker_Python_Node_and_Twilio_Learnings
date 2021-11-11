import axios from 'axios';
import {FlexPlugin} from 'flex-plugin';
import React from 'react';

const PLUGIN_NAME= 'ActionsPlugin';

export default class ActionsPlugin extends FlexPlugin{
    constructor(){
        super(PLUGIN_NAME);

    }

    init(flex,manager){
        
        // flex.Actions.addListener("afterAcceptTask", (payload) => {

        //     alert("Triggered after accpeting task . ");

        // });
        flex.Actions.addListener("beforeAcceptTask",(payload,abortFunction)=>{
            
            if(!window.confirm("Are you sure you want to accept the task? ")){
                abortFunction();
            }

        });
        flex.Actions.registerAction("MyAction", (payload) => {
            return axios.get("https://quotes.rest/god.json?category=inspire")
            .then(response=>{
                alert("Here's an inspirational "+ response.data.contents.quotes[0].quote);
            })
            .catch(error =>{
                console.log(error);
                throw error;
            })

        });
        flex.Actions.addListener("afterCompleteTask",(payload)=>{
            return flex.Actions.invokeAction("MyAction");
        });

    }
}