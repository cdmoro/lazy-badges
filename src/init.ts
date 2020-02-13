/**
 * Init the lazy badges
 */

export const init = (): void => {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-lb-badge]')

    elements.forEach(item => {
        item.classList.add('lb-badge')
    })
}