import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DeckListItem from './DeckListItem';
import {BackgroundColor} from "../Utils/Colors";
import {connect} from 'react-redux'
import {fetchDecks} from '../Utils/API'
import {loadDecksCreator, setCurrentDeck} from '../actions/index';
import {setUpdateFunction} from '../helper/FlatListUpdater'

class DeckList extends React.Component{

    state={
      decks: []
    };

    onDeckClick = (id)=>(()=> {
        this.props.setDeck(id);
        this.props.navigation.navigate('deck');
    });

    renderDeck = (deck)=>{
      return(
          <TouchableOpacity onPress={this.onDeckClick(deck.item.id)}>
            <DeckListItem deckName={deck.item.title} noOfCards={deck.item.cards.length} key={deck.item.id}/>
          </TouchableOpacity>
      );
    };

    //this is the function we are passing to set update function of FLAT LIST UPDATER file
    //every file can access that function to update our function state
    FlatListUpdaterFunction = (decks)=>{
        this.setState({decks});
    };

    componentWillMount(){
        setUpdateFunction(this.FlatListUpdaterFunction);
        fetchDecks().then(decks=>{
            if(!decks)
                return;
            const decksArr = Object.values(decks);
            this.props.load(decksArr);
        });
    }

    render(){
        const {decks} = this.props;
        return(
            <View style={Style.container}>
              <FlatList
                data={decks}
                renderItem={this.renderDeck}
                extraData={this.state.decks}
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

function mapDispatchToProps(dispatch, props){
    return{
        setDeck: (deckId)=>{dispatch(setCurrentDeck(deckId))},
        load: (decksArr)=>{dispatch(loadDecksCreator(decksArr))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);