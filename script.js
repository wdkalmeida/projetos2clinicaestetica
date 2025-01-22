const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current');
    targetSlide.classList.add('current');
};

prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});

nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});

        // Smooth scrolling effect
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Scroll-to-top button functionality
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }