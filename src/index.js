import './styles.css';
import { HomeContent } from './home.js';
import { MenuContent } from './menu.js';
import { AboutContent } from './about.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const homeBtn = document.getElementById('nav-home');
const menuBtn = document.getElementById('nav-menu');
const aboutBtn = document.getElementById('nav-about');

const content = document.getElementById('content');
HomeContent();

homeBtn.addEventListener('click', () => {
  content.innerHTML = '';
  HomeContent();
});

menuBtn.addEventListener('click', () => {
  content.innerHTML = '';
  MenuContent();
});

aboutBtn.addEventListener('click', () => {
  content.innerHTML = '';
  AboutContent();
});