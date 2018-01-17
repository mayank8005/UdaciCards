import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Constants} from 'expo'
import {BackgroundColor, Black, TabColor, White} from "./Utils/Colors";
import DeckList from './Components/DeckList';
import {TabNavigator, StackNavigator} from 'react-navigation';
import AddDeck from './Components/AddDeck';
import Deck from "./Components/Deck";
import AddCard from './Components/AddCard'

function AppStatus({backgroundColor, ...props}) {
    return(
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar backgroundColor={backgroundColor} translucent {...props}/>
        </View>
    );
}

const Tab = TabNavigator({
    DeckList: {
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

const MainNav = StackNavigator({
    home: {
        screen: Tab
    },
    deck:{
        screen: Deck,
    },
    addCard:{
        screen: AddCard
    }
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppStatus backgroundColor={Black} barStyle='light-content'/>
                <MainNav/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
