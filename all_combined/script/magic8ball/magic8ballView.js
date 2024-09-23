function magic8ballView() {
    html = "";
    html = /*HTML*/ `
    <input type='text' onchange="model.input.magic.question = this.value">
    <button onclick="magicGetResponse()">Shake 8ball</button>
    <div class="magicResponse">${model.data.magic.response ?? ''}</div>
      `;
    return html;
  }

 