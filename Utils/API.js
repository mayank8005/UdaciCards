import {AsyncStorage} from 'react-native';

// our Async key
const KEY = 'RANDOM_KEY';

//will fetch all decks stored
export function fetchDecks() {
    return AsyncStorage.getItem(KEY).then(data => JSON.parse(data));
}

//add deck to local storage
export const addDeckToStorage = newDeck =>
    AsyncStorage.mergeItem(KEY, JSON.stringify({[newDeck.id]:newDeck}))
        .then(data => newDeck);

//add card to local storage
export const addCardToStorage = deck =>
    AsyncStorage.mergeItem(KEY, JSON.stringify({[deck.id]:deck}))
        .then(data => deck);