function remove(id: string): void {
    let badge: Element = document.querySelector(`#${id}`)
    
    if (badge)
        badge.classList.remove('d-badge')
}

export default remove