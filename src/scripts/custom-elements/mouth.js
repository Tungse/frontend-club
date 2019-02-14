class SmbMouth extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<div class='swoop'><h2>Tungs FrontendClub</h2></div>";
  }
}
window.customElements.define("smb-mouth", SmbMouth);

var element = getElementsByTagName(smb-mouth);
setTimeout(function(){ element.classList.add("moovit"); }, 3000);
