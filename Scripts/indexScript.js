(function (){
    "use strict"
    let secondForSlide=5000;
        const imagesSlider = [
            'IMG_9143.JPG',
            'IMG_9152.jpg',
            'IMG_7498.JPG'
        ];
        let currentImage = 0;
        document.getElementById('next').onclick = nextSlide;

        function nextSlide() {
            currentImage++;
            if (currentImage >= imagesSlider.length) {
                currentImage = 0;
            }
            document.getElementById('slide-image').src = imagesSlider[currentImage];

        }

        document.getElementById('prev').onclick = prevSlide;

        setInterval(nextSlide, secondForSlide);

        function prevSlide() {
            currentImage--;
            if (currentImage < 0) {
                currentImage = imagesSlider.length - 1;
            }
            document.getElementById('slide-image').src = imagesSlider[currentImage];
        }
        
        function updateElementsPosition() {
            let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const divElement = document.getElementById("what-we-do-content-reverse-div");
            const imgElement = document.getElementById("what-we-do-content-reverse-img-element");
            if (screenWidth < 769 && divElement && imgElement) {
                imgElement.parentNode.insertBefore(imgElement, divElement);
            } else if (divElement && imgElement) {
                imgElement.parentNode.appendChild(imgElement);
            }
            console.log(screenWidth);

        }

        updateElementsPosition();

        window.addEventListener("resize", function () {
            updateElementsPosition();
        });

        function openWhatsAppChat() {
            const message = encodeURIComponent("Merhaba, bilgi almak istiyorum."); 
            window.open("https://wa.me/905365569124?text=" + message, "_blank");
        }
        document.getElementById('whatsapp-img').onclick = openWhatsAppChat;
        
})();
        