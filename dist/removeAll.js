/**
 * Remove all lazy badges
 */
export const removeAll = () => {
    const elements = document.querySelectorAll('[data-lb-badge]');
    elements.forEach(el => {
        el.classList.remove('lb-badge');
    });
};
