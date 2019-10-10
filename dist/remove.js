function remove(id) {
    let badge = document.querySelector(`#${id}`);
    if (badge)
        badge.classList.remove('d-badge');
}
export default remove;
