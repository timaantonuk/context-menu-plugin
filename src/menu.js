import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  open() {
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      // console.log('clicked')
      // console.log('event.clientX', event.clientX)
      // console.log('event.clientY', event.clientY)
      let x = event.clientX;
      let y = event.clientY;

      this.el.style.top = `${y}px`;
      this.el.style.left = `${x}px`;
      this.el.classList.add('open');
    });
  }

  close() {
    this.el.className = 'menu';
  }

  add(module) {
    this.el.insertAdjacentHTML("beforeend", module.toHTML());
  }
}
