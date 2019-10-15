/**
 * Init the lazy badges
 */

function init(): void {
    let badges: NodeListOf<Element> = document.querySelectorAll('[data-lb-badge]')
    let i: number

    for (i = 0; i < badges.length; i++)
        badges[i].classList.add('lb-badge')
}

export default init