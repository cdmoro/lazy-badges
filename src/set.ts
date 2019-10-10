function set(id: string, value: number): void {
    let badge: Element = document.querySelector('#' + id)

    if (badge) {
        badge.classList.add('d-badge')
        badge.setAttribute('data-d-badge', value.toString())
    }
}

export default set