function magicGetResponse() {
    model.data.magic.userQuestion = model.input.magic.question;
    let responses = model.data.magic.responses;
    let randomResponseNumber = Math.floor(Math.random() * responses.length);
    model.data.magic.response = responses[randomResponseNumber];
    updateView();
}