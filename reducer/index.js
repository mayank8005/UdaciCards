//importing actions
import {LOAD_DECKS, ADD_CARD, ADD_DECK} from '../actions/index'

//Reducer
export default function Reducer(state={decks:[]}, action){

    switch (action.type){
        case LOAD_DECKS:
            return{
                ...state,
                decks: action.decks
            };
        case ADD_DECK:
            return{
                ...state,
                decks: [...state.decks, action.deck]
            };
        case ADD_CARD:
            return{
                ...state,
                decks: state.decks.map((deck)=>{
                  if(deck.id===action.deckId){
                      deck.cards=[...deck.cards, action.card]
                  }
                  return deck;
                })
            };
        default:
            return state;
    }
}
