/**
 * Contains functions used as EventListeners
 */

export function activateEvents() {
    const dropdownIcon = document.getElementById("dropdown_menu");
    dropdownIcon.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    document.getElementById("entries_menu").classList.toggle("hidden");
}
