class smbEyes extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", function() {
      this.style.height = 0;
    });
  }
}

window.customElements.define("smb-eyes", smbEyes);


class smbBrain extends HTMLElement {
  constructor() {
    super();
  }
}

window.customElements.define("smb-brain", smbBrain);
