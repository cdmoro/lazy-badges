/**
 * Remove a lazy badge
 * @param id {string}
 */

export const remove = (id: string): void => {
    const el: Element = document.getElementById(id)
    
    if (el) {
        el.classList.remove('lb-badge')
    }
}