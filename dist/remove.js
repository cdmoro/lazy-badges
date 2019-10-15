/**
 * Remove a lazy badge
 * @param id {string}
 */
function remove(id) {
    let badge = document.querySelector(`#${id}`);
    if (badge)
        badge.classList.remove('lb-badge');
}
export default remove;
