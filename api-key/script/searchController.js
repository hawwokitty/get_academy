function setSearchText(searchText) {
    model.input.search.searchText = searchText;
}

function setSearchRace(searchRace) {
    model.input.search.filter.race = searchRace;
}

function searchCards() {
    updateView();
}

// function imageError(minionId) {
//     model.data.api.minionsWithoutImg.push(minionId);
//   }