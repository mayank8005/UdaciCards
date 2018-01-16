import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import DeckListItem from './DeckListItem';

class DeckList extends React.Component{

    render(){
        return(
            <View style={Style.container}>
                <DeckListItem deckName='hello' noOfCards={4}/>
                <DeckListItem deckName='KBC' noOfCards={9}/>
            </View>

        );
    }
}

const Style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 16,
    },
});

export default DeckList;