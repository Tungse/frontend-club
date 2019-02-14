class SmbMouth extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<div class='swoop'><h2>Tungs FrontendClub</h2></div>";
  }
}
window.customElements.define("smb-mouth", SmbMouth);
setTimeout(function(){ document.getElementsByTagName('smb-mouth').classList.add("moovit"); }, 3000);
