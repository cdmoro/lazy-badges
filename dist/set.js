/**
 * Set a new value on a new or existing badge
 * @param id {string}
 * @param value {number}
 */
export const set = (id, value) => {
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('lb-badge');
        el.dataset.lbBadge = value.toString();
    }
};
