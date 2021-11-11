import {FlexPlugin} from 'flex-plugin';
import React from 'react';
import {View} from '@twilio/flex-ui';
import CustomView from './CustomView';
import CustomSidebarButton from './CustomSidebarButton';


const PLUGIN_NAME= 'AddCustomViewPlugin';

export default class AddCustomViewPlugin extends FlexPlugin{

    constructor(){
        super(PLUGIN_NAME);
    }

    init(flex,manager){
        flex.SideNav.Content.add(
            <CustomSidebarButton key="custom-view-button" />
        );

        flex.ViewCollection.Content.add(
            <View name="custom-view" key="custom-view">
                <CustomView />
            </View>
        );



    }

}