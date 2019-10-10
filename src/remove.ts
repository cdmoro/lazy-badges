/**
 * Remove a lazy badge
 * @param id {string}
 */

function remove(id: string): void {
    let badge: Element = document.querySelector(`#${id}`)
    
    if (badge)
        badge.classList.remove('d-badge')
}

export default remove