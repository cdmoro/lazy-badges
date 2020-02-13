/**
 * Remove a lazy badge
 * @param id {string}
 */
export const remove = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('lb-badge');
    }
};
