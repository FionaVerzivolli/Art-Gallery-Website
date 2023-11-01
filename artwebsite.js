function hidePreloader() {
    var preloader = document.getElementById('preloader');
    var content = document.querySelectorAll('.hide-content');

    setTimeout(function () {
        preloader.style.opacity = 0; 
        preloader.style.zIndex = -1;
        preloader.style.transition = 'opacity 1s ease-out'; 
        content.forEach(function (element) {
            element.classList.remove('hide-content');
            element.classList.add('show-content');
        });
    }, 2000); 
}

hidePreloader();
setTimeout(hidePreloader, 3000);



