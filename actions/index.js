//actions
export const  LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const SET_CURRENT_DECK = 'SET_CURRENT_DECK';

//action creators
export const loadDecksCreator = (decks)=>{return{type:LOAD_DECKS, decks}};
export const addDeckCreator = (deck)=>{return{type: ADD_DECK, deck}};
export const addCardCreator = (deckId, card)=>{return{type: ADD_CARD, card, deckId}};
export const setCurrentDeck = (deckId)=>({type: SET_CURRENT_DECK, deckId});
