(function(){
    "use strict";
    window.addEventListener('scroll', function () {
        const header = document.getElementById('main-header');
        const links = header.getElementsByTagName('a');
        if (window.scrollY > 0) {
            header.style.backgroundColor = 'rgba(248, 248, 248, 1)';
            header.style.borderBottom = '2px solid #000000';
            for (let i = 0; i < links.length; i++) {
                links[i].style.color = '#000000';
            }
        } else {
            header.style.backgroundColor = 'rgba(248, 248, 248, 0)';
            header.style.borderBottom = '0px solid #000000';
            for (let i = 0; i < links.length; i++) {
                links[i].style.color = 'white';
            }
        }
    });
})();