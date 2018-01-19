//use of this function:-
/*
For Flat List to update its component state should be updated
as we are using back button to directly navigate to that page its
component(decklist) is not updating its state to pipe its set state
function we are setting update function from deckList component when it
get mounted so that we can access update function as we needed
*/

let updateFunction = undefined;

//will set FlatList updater function
export function setUpdateFunction(fun){
    updateFunction = fun;
}

//will update Flat list components state
export function update(decks){
    updateFunction(decks);
}