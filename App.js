import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import {BackgroundColor, Black} from "./Utils/Colors";
import DeckList from './Components/DeckList'

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
                <DeckList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackgroundColor,
    },
});
