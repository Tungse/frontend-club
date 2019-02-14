class SmbNose extends HTMLElement {
  constructor() {
    super();
    let i = 333333;
    setInterval(() => {
      this.className = 'purple';
      setTimeout(() => {
        this.className = '';
        }, 3000);
    }, 2000);
  }
}

window.customElements.define('smb-nose', SmbNose);
