import React from 'react';
import {SideLink, Actions} from '@twilio/flex-ui';

const CustomSidebarButton = ({activeView})=>{
    function navigate(){
        Actions.invokeAction('NavigateToView',{viewName:'custom-view'});
    }

    return (
        <SideLink 
               showLabel={true}
               icon="Data"
               iconActive="DataBold"
               isActive={activeView === 'custom-view'}
               onClick={navigate}
            >
               Custom View 

            </SideLink>
    )
}
export default CustomSidebarButton;