/**
 * Init the lazy badges
 */
function init() {
    let badges = document.querySelectorAll('[data-lb-badge]');
    let i;
    for (i = 0; i < badges.length; i++)
        badges[i].classList.add('lb-badge');
}
export default init;
