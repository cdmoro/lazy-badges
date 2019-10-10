/**
 * Remove all lazy badges
 */

function removeAll(): void {
    let badges: NodeListOf<Element> = document.querySelectorAll('[data-d-badge]')
    let i: number;

    for (i = 0; i < badges.length; i++)
        badges[i].classList.remove('d-badge')
}

export default removeAll