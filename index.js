
import {AppRegistry} from 'react-native';

import switchNavigator from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => switchNavigator);
