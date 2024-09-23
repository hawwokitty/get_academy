function adjSetValue(value, property) {
    model.input.adj[property] = value;
    model.input.adj.showReply = false;
    updateView();
}