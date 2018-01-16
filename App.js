import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { Black, LightWhite } from "./Utils/Colors";

function AppStatus({backgroundColor, ...props}) {
    return(
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar backgroundColor={backgroundColor} translucent {...props}/>
        </View>
    );
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AppStatus backgroundColor={Black} barStyle='light-content'/>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightWhite
  },
});
