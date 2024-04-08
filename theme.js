function swithTheme(){
    let body = document.querySelector('body');

    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
        document.querySelector('.icon-theme img').setAttribute('src', '/images/icon-sun.svg')

    }else if(body.classList.contains('dark')){
        body.classList.remove('dark');
        body.classList.add('light');
        document.querySelector('.icon-theme img').setAttribute('src', '/images/icon-moon.svg')
    }
   
}

document.querySelector('.icon-theme').addEventListener('click', swithTheme);