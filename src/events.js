/**
 * Contains functions used as EventListeners
 */

export function activateEvents() {
    const dropdownIcon = document.getElementById("dropdown_menu");
    dropdownIcon.addEventListener("click", toggleMenu);

    closeDropdownMenu();
}

function toggleMenu() {
    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
    document.getElementById("entries_menu").classList.toggle("hidden");
}

function closeDropdownMenu() {
    // Close the dropdown if the user clicks outside of it

    window.onclick = function(event) {
        if (!event.target.matches(".dropdown-icon")) {
            const menu = document.getElementById("entries_menu");
    
            if (!menu.classList.contains("hidden")) menu.classList.add("hidden");
        }
    }
}
