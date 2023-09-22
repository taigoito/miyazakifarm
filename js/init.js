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

// Preloader
import Preloader from './_preloader.js';
new Preloader();

// ヘッダーとロゴ色の管理
const header = document.querySelector('.--transparent');
if (header) {

  // ロゴを変更
  const logo = document.querySelector('.gNav__siteBrand img');
  if (window.innerWidth >= 1200) {
    logo.setAttribute('src', './assets/logo_miyazakifarm_white.svg');
  }

  // ヘッダーホバー時、ロゴを変更
  header.addEventListener('mouseover', () => {
    logo.setAttribute('src', './assets/logo_miyazakifarm.svg');
  });
  header.addEventListener('mouseout', () => {
    if (window.innerWidth >= 1200 && !(window.innerHeight < window.scrollY)) {
      logo.setAttribute('src', './assets/logo_miyazakifarm_white.svg');
    }
  });

  // スクロールを監視し、ヘッダー色を変更
  window.addEventListener('scroll', () => {
    if (window.innerHeight < window.scrollY) {
      header.classList.remove('--transparent');
      logo.setAttribute('src', './assets/logo_miyazakifarm.svg');
    } else {
      header.classList.add('--transparent');
      if (window.innerWidth >= 1200) {
        logo.setAttribute('src', './assets/logo_miyazakifarm_white.svg');
      }
    }
  });
}
