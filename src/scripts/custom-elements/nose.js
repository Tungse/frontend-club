class SmbNose extends HTMLElement {
  constructor() {
    super();
    setInterval(() => {
      this.className = 'purple';
      setTimeout(() => {
        this.className = '';
        }, 3000);
    }, 2000);
  }
}

window.customElements.define('smb-nose', SmbNose);
