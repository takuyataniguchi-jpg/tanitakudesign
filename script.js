// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // # のみの場合、何もしない

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Storyセクションのフェードイン
const storySection = document.querySelector('#story');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            storySection.classList.add('fade-in');
            observer.unobserve(storySection);
        }
    });
}, { threshold: 0.1 });
observer.observe(storySection);

// モーダル関連
const modal = document.getElementById('reservation-modal');
const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButton = document.querySelector('.close-button');

openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
