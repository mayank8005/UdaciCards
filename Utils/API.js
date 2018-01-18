import {AsyncStorage} from 'react-native';

// our Async key
const KEY = 'RANDOM_KEY';

export function fetchDecks() {
    return AsyncStorage.getItem(KEY).then(data => JSON.parse(data));
}

export const addDeckToStorage = newDeck =>
    AsyncStorage.mergeItem(KEY, JSON.stringify({[newDeck.id]:newDeck}))
        .then(data => newDeck);

export const addCardToStorage = deck =>
    AsyncStorage.mergeItem(KEY, JSON.stringify({[deck.id]:deck}))
        .then(data => deck);