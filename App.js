import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Constants} from 'expo'
import {BackgroundColor, Black, TabColor, White} from "./Utils/Colors";
import DeckList from './Components/DeckList';
import {TabNavigator, StackNavigator} from 'react-navigation';
import AddDeck from './Components/AddDeck';
import Deck from "./Components/Deck";
import AddCard from './Components/AddCard'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/index';
import Quiz from './Components/Quiz';

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
    },
    quiz:{
        screen: Quiz
    }
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
});

const Store = createStore(reducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <View style={styles.container}>
                    <AppStatus backgroundColor={Black} barStyle='light-content'/>
                    <Quiz/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
