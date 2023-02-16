import galleryItemTPL from '../templates/gallery-item';
import menu from './menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = galleryItemTPL(menu);

galleryRef.insertAdjacentHTML('beforeend', markup);

const theme = document.querySelector('#theme-switch-toggle');

theme.addEventListener('change', (e) => {
    if(theme.checked){
        document.querySelector('body').classList.add('dark-theme');
        localStorage.setItem('theme', 'true')
    }else{
        document.querySelector('body').classList.remove('dark-theme');
        localStorage.setItem('theme', 'false')
    }
});

if(localStorage.getItem('theme') == 'true'){
    document.querySelector('body').classList.add('dark-theme');
    theme.checked = true;
}else if(localStorage.getItem('theme') == 'false'){
    document.querySelector('body').classList.remove('dark-theme');
}