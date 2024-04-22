function searchView() {
    app.innerHTML = /*HTML*/ `
    <div>Search: 
    <input type='text' onchange="setSearchText(this.value)" value="${model.input.search.searchText}" placeholder="enter card youre looking for here">
    
    </div>
    <button onclick='searchCards()'>Find cards</button>
    `;
}

function setSearchText(searchText) {
    model.input.search.searchText = searchText;
}