function set(id, value) {
    let badge = document.querySelector('#' + id);
    if (badge) {
        badge.classList.add('d-badge');
        badge.setAttribute('data-d-badge', value.toString());
    }
}
export default set;
