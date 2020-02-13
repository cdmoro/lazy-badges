/**
 * Remove all lazy badges
 */

export const removeAll = (): void => {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-lb-badge]')

    elements.forEach(el => {
        el.classList.remove('lb-badge')
    })
}