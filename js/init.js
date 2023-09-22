/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// Back To Top
import BackToTop from './_backToTop.js';
new BackToTop();

// Drawer Menu
import DrawerMenu from './_drawerMenu.js';
new DrawerMenu({darkMode: true});

// Evil Icons
import EvilIcons from './_evilIcons.js';
new EvilIcons();

// Fader
import Fader from './_fader.js';
new Fader();

// スクロールを監視し、ヘッダー色を変更
const header = document.querySelector('.--transparent');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.innerHeight < window.scrollY) {
      header.classList.remove('--transparent');
    } else {
      header.classList.add('--transparent');
    }
  });
}
