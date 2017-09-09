import React, { Component } from 'react';
import {
  AppRegistry,
  BackHandler,
  TouchableHighlight,
  Text
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import routes from './routes';

class App extends Component {

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleHardwareBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleHardwareBackPress);
  }

  render() {
    return (
      <Navigator
        ref={this._setNavigator}
        initialRoute={routes['home']}
        renderScene={this._renderScene} />
    );
  }

  _navigator = null;

  _handleHardwareBackPress = () => {
    let navigator = this._navigator;

    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    return false;
  };

  _setNavigator = component => {
    this._navigator = component;
  };

  _renderScene(route, navigator) {
    let target = routes[route.id];
    return (<target.component navigator={navigator} />)
  }
}

AppRegistry.registerComponent('example', () => App);
