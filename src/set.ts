/**
 * Set a new value on a new or existing badge
 * @param id {string}
 * @param value {number}
 */

function set(id: string, value: number): void {
    let badge: Element = document.querySelector(`#${id}`)

    if (badge) {
        badge.classList.add('lb-badge')
        badge.setAttribute('data-lb-badge', value.toString())
    }
}

export default set