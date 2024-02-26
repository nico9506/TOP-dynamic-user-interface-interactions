/**
 * Contains functions used as EventListeners
 */

import { slideIndex } from "./parameters";

export function activateEvents() {
    const dropdownIcon = document.getElementById("dropdown_menu");
    dropdownIcon.addEventListener("click", toggleMenu);

    closeDropdownMenu();

    showSlides();
}

function toggleMenu() {
    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
    document.getElementById("entries_menu").classList.toggle("hidden");
}

function closeDropdownMenu() {
    // Close the dropdown if the user clicks outside of it

    window.onclick = function (event) {
        if (!event.target.matches(".dropdown-icon")) {
            const menu = document.getElementById("entries_menu");

            if (!menu.classList.contains("hidden"))
                menu.classList.add("hidden");
        }
    };
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
