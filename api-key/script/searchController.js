function setSearchText(searchText) {
    model.input.search.searchText = searchText;
}

function setSearchRace(searchRace) {
    model.input.search.filter.race = searchRace;
}

function searchCards() {
    
    updateView();
}