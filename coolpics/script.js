
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const links = nav.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1000) {
            nav.classList.remove('show');
        }
    });
});

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', (e) => {
    const img = e.target;
    if (img.tagName === 'IMG') {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');

        modalImage.src = src;
        modalImage.alt = alt;

        modal.showModal();
    }
});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.open) {
        modal.close();
    }
});
