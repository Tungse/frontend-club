if ('customElements' in window) {
  class Ears extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: open});
      const documentMousemove = (e) => {
        const x = e.clientX / 20 - this.offsetWidth / 2;
        const y = e.clientY / 20 - this.offsetHeight / 2;
        this.style.setProperty('transform', `translate(${x}px, ${y}px)`);
      };

      window.addEventListener('mousemove', documentMousemove);
    }
  }

  window.customElements.define('smb-ears', Ears);
}