/**
 * Remove all lazy badges
 */
function removeAll() {
    let badges = document.querySelectorAll('[data-lb-badge]');
    let i;
    for (i = 0; i < badges.length; i++)
        badges[i].classList.remove('lb-badge');
}
export default removeAll;
