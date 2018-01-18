import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DeckListItem from './DeckListItem';
import {BackgroundColor} from "../Utils/Colors";
import {connect} from 'react-redux'
import {fetchDecks} from '../Utils/API'
import {loadDecksCreator} from '../actions/index';

class DeckList extends React.Component{

    onDeckClick = (id)=>(()=> {
        this.props.navigation.navigate('deck', {deckId: id});
    });

    renderDeck = (deck)=>{
      return(
          <TouchableOpacity onPress={this.onDeckClick(deck.item.id)}>
            <DeckListItem deckName={deck.item.title} noOfCards={deck.item.cards.length} key={deck.item.id}/>
          </TouchableOpacity>
      );
    };

    componentWillMount(){
        fetchDecks().then(decks=>{
            if(!decks)
                return;
            const decksArr = Object.values(decks);
            this.props.dispatch(loadDecksCreator(decksArr));
        });
    }

    render(){
        const {decks} = this.props;
        return(
            <View style={Style.container}>
              <FlatList
                data={decks}
                renderItem={this.renderDeck}
                keyExtractor={(item, index) => index}
              />
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

function mapStateToProps(store){
    return{
        decks: store.decks
    }
}

export default connect(mapStateToProps)(DeckList);