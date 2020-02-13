/**
 * Init the lazy badges
 */
export const init = () => {
    const elements = document.querySelectorAll('[data-lb-badge]');
    elements.forEach(item => {
        item.classList.add('lb-badge');
    });
};
