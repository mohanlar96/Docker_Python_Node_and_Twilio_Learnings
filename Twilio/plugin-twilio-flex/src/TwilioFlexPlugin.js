import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import TodoListTaskInfoComponent from './TodoListTaskInfoComponent';
import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';
import CustomThemeOverride from './CustomThemeOverride';

const PLUGIN_NAME = 'TwilioFlexPlugin';

export default class TwilioFlexPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    manager.updateConfig({
      colorTheme:{
        baseName:'FlexLight',
        overrides:CustomThemeOverride
      }
    })
    
    flex.MainHeader.defaultProps.logoUrl="https://www.soarenmanagement.com/wp-content/uploads/2019/02/Soaren-Management.png";



    this.registerReducers(manager);
    
    const options = { sortOrder: -1 };
    
    flex.TaskInfoPanel.Content.add(
      <TodoListTaskInfoComponent key="todo-list" />,
      options
    );

    flex.AgentDesktopView
      .Panel1
      .Content
      .add(<CustomTaskListContainer key="This is my component" />, options);

      
      
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
