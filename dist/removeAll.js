function removeAll() {
    let badges = document.querySelectorAll('[data-d-badge]');
    let i;
    for (i = 0; i < badges.length; i++)
        badges[i].classList.remove('d-badge');
}
export default removeAll;
