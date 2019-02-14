// if ("customElements" in window) {
  class SmbNose extends HTMLElement {
    constructor() {
      super();
      let i = 333333;
      setInterval(() => {
        // i++;
        // this.style.backgroundColor = '#' + i;
        this.className = 'purple';
        setTimeout(() => {
          this.className = '';
         }, 3000);
     }, 2000);
    }
  }
// }

window.customElements.define('smb-nose', SmbNose);
