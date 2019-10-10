function init() {
    let badges = document.querySelectorAll('[data-d-badge]');
    let i;
    for (i = 0; i < badges.length; i++)
        badges[i].classList.add('d-badge');
}
export default init;
