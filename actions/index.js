//actions
export const  LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECKS';
export const ADD_CARD = 'ADD_CARD';

//action creators
export const loadDecksCreator = ()=>{return{type:LOAD_DECKS}};
export const addDeckCreator = (deck)=>{return{type: ADD_DECK, deck}};
export const addCardCreator = (deckId, card)=>{return{type: ADD_CARD, card, deckId}};

