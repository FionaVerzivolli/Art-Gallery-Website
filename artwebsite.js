function hidePreloader() {
    var preloader = document.getElementById('preloader');
    preloader.style.opacity = 0;

    setTimeout(function () {
        preloader.style.display = 'none';
        var textContent = document.querySelectorAll('.hide-content');

        textContent.forEach(function (element) {
            element.classList.remove('hide-content');
            element.classList.add('show-content');
        });
    }, 50); 
}

setTimeout(hidePreloader, 2500);
