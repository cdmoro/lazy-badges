/**
 * Remove all lazy badges
 */

function removeAll(): void {
    let badges: NodeListOf<Element> = document.querySelectorAll('[data-lb-badge]')
    let i: number;

    for (i = 0; i < badges.length; i++)
        badges[i].classList.remove('lb-badge')
}

export default removeAll