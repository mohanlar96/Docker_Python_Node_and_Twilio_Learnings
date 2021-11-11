import * as FlexPlugin from 'flex-plugin';
import TwilioFlexPlugin from './TwilioFlexPlugin';
import ActionsPlugin from './ActionPlugin';
import AddCustomViewPlugin from './AddCusomViewPlugin';

FlexPlugin.loadPlugin(TwilioFlexPlugin);
console.log(" loading from index.js ");
FlexPlugin.loadPlugin(ActionsPlugin);
FlexPlugin.loadPlugin(AddCustomViewPlugin);
