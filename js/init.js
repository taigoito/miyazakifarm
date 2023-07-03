/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// Back To Top
//import BackToTop from './backToTop.js';
new BackToTop();

// Drawer Menu
//import DrawerMenu from './drawerMenu.js';
new DrawerMenu({darkMode: true});

// Embed
//import Embed from './embed.js';
new Embed();

// Evil Icons
//import EvilIcons from './evilIcons.js';
new EvilIcons();

// Fader
//import Fader from './fader.js';
new Fader();

// Preloader
//import Preloader from './js/preloader.js';
//new Preloader();

// Responsive Color
//import ResponsiveColor from './js/responsiveColor.js';
//new ResponsiveColor();

// Slider
//import Slider from './js/slider.js';
//new Slider();

// スクロールを監視し、ヘッダー色を変更
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.innerHeight < window.scrollY) {
    header.classList.remove('--transparent');
  } else {
    header.classList.add('--transparent');
  }
});
