import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import {BackgroundColor, Black, TabColor, White} from "./Utils/Colors";
import DeckList from './Components/DeckList';
import { TabNavigator } from 'react-navigation';
import  AddDeck from './Components/AddDeck';

function AppStatus({backgroundColor, ...props}) {
    return(
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar backgroundColor={backgroundColor} translucent {...props}/>
        </View>
    );
}

const Tab = TabNavigator({
    Deck: {
        screen: DeckList
    },
    AddDeck:{
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add deck'
        },
    }
},{
    tabBarOptions: {
        style: {
            backgroundColor: TabColor
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        indicatorStyle: {
            backgroundColor: White
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppStatus backgroundColor={Black} barStyle='light-content'/>
                <Tab/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackgroundColor,
    }
});
