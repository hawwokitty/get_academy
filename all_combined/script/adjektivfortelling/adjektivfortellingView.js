function adjektivfortellingView() {
  html = "";
  let adj = /*HTML*/ `<select name="adj" id="adj" onchange="adjSetValue(this.value, 'adjective1')">
  <option type="checkbox">${model.input.adj.adjective1 ?? ""}</option>
  <option value="lovely">lovely</option>
  <option value="strange">strange</option>
  <option value="cute">cute</option>
  <option value="odorless">odorless</option>
</select>`;
  let adj2 = /*HTML*/ `<select name="adj" id="adj" onchange="adjSetValue(this.value, 'adjective2')">
  <option type="checkbox">${model.input.adj.adjective2 ?? ""}</option>
  <option value="happy">happy</option>
  <option value="upset">upset</option>
  <option value="confused">confused</option>
  <option value="splendiferous">splendiferous</option>
</select>`;
  let noun = /*HTML*/ `<select name="noun" id="noun" onchange="adjSetValue(this.value, 'noun')">
  <option type="checkbox">${model.input.adj.noun ?? ""}</option>
  <option value="cat">cat</option>
  <option value="frog">frog</option>
  <option value="homeless man">homeless woman</option>
  <option value="avocado">avocado</option>
</select>`;
  let input = /*HTML*/ `
  <input type='text' value="${model.input.adj.name ?? ''}" onchange="adjSetValue(this.value, 'name')">
  `;
  let verb = /*HTML*/ `<select name="verb" id="verb" onchange="adjSetValue(this.value, 'verb1')">
  <option type="checkbox">${model.input.adj.verb1 ?? ""}</option>
  <option value="dance">dance</option>
  <option value="play minecraft">play minecraft</option>
  <option value="commit tax fraud">commit tax fraud</option>
  <option value="play catch">play catch</option>
</select>`;
  let verb2 = /*HTML*/ `<select name="verb" id="verb" onchange="adjSetValue(this.value, 'verb2')">
  <option type="checkbox">${model.input.adj.verb2 ?? ""}</option>
  <option value="kiss">kiss</option>
  <option value="frog">frog</option>
  <option value="stolen money">stolen money</option>
  <option value="slap">slap</option>
</select>`;
  let YesOrNo = /*HTML*/ `<select name="YesOrNo" id="YesOrNo" onchange="adjSetValue(this.value, 'YesOrNo')">
  <option type="checkbox">${model.input.adj.YesOrNo ?? ""}</option>
  <option value="yes">yes</option>
  <option value="no">no</option>
</select>`;
  html = /*HTML*/ `
  <div class="adjStory">
    There once was a ${adj} ${noun}, and her name was ${input}. She loved to ${verb} together with her best friend ${model.app.main.user}.
    One day ${model.input.adj.name ?? "___"} asked ${model.app.main.user} if she could give ${model.app.main.user} a little ${verb2}, and ${model.app.main.user} said: ${YesOrNo}! 
    This made ${model.input.adj.name ?? "___"} very ${adj2}. 
    </div>
    <button onclick='submitStory(this)'>Submit</button>
    ${adjShowReply() ?? ""}
`;
return html;
}

function adjShowReply() {
    let name = model.input.adj.name;
    let html = "";
    if (model.input.adj.showReply) {
        if (model.input.adj.adjective2 === "happy") {
            html = /*HTML*/ `
            <div>Yay! you made ${name} sooooooo happy!</div>
            `;
        } else if (model.input.adj.adjective2 === "upset") {
            html = /*HTML*/ `
            <div>You should probably apologize to ${name}...</div>
            `;
        } else if (model.input.adj.adjective2 === "confused") {
            html = /*HTML*/ `
            <div>${name} deserves better :/</div>
            `;
        } else if (model.input.adj.adjective2 === "splendiferous") {
            html = /*HTML*/ `
            <div>${name} doesn't actually know what splendiferous means, it just sounded fancy!</div>
            `;
        }
        return html;
    }
}

function submitStory(button) {
    model.input.adj.showReply = true;
    button.disabled = true;
    updateView();
}