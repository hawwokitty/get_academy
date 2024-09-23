function getResponse() {
    if (model.data.email.emailPattern.test(model.input.email.address)) {
      model.data.email.response = "Thats an email yep";
    } else {
      model.data.email.response = "Thats NOT an email!! try again!";
    }
    updateView();
  }