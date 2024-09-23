function emailView() {
  html = "";
  html = /*HTML*/ `
    <input type="text" onchange="model.input.email.address = this.value">
    <button onclick="getResponse()">check if its an email</button>
    <div class="email-response">${model.data.email.response ?? ""}</div>
    `;
  return html;
}


