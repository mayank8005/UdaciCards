import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DeckListItem from './DeckListItem';
import {BackgroundColor} from "../Utils/Colors";

class DeckList extends React.Component{

    onDeckClick = (id)=>{
        this.props.navigation.navigate('deck');
    };

    render(){
        return(
            <View style={Style.container}>
              <TouchableOpacity onPress={this.onDeckClick}>
                  <DeckListItem deckName='hello' noOfCards={4}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onDeckClick}>
                  <DeckListItem deckName='KBC' noOfCards={9}/>
              </TouchableOpacity>
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
        backgroundColor: BackgroundColor
    },
});

export default DeckList;