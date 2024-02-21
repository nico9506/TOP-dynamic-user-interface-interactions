/**
 * Collection of HTML elements as:
 *  - Navbar
 *  - Side-panel
 *  - Footer
 *  - Slides
 *  - Drop-down menus
 */

import logo from "./assets/main-logo.png";
import burgerIcon from "./assets/main-dropdown.svg";

export function generateNavbar(NAVBAR_ITEMS) {
    /**
     * Creates a navbar element with a logo and menu items.
     *
     * The main entry is the first key of NAVBAR_ITEMS, which is grouped next to the logo sharing the same link
     * The others mean to be hide in the mobile view
     *
     * @param {Object} NAVBAR_ITEMS - Object (key, value) containing the menu entries (strings and/or arrays for submenus) and icons/logo paths.
     * Located in 'parameters.js'
     * @returns {Element} The navbar object with the logo and menu entries
     */

    const navbar = document.createElement("nav");

    //Contains the logo and the first array item
    const mainItemContainer = document.createElement("div");
    mainItemContainer.classList.add("main-item-navbar");
    mainItemContainer.id = NAVBAR_ITEMS.ITEMS.mainEntry.id;

    const mainLogo = new Image();
    mainLogo.src = logo;
    mainLogo.classList.add("main-logo");
    mainItemContainer.appendChild(mainLogo);

    const mainEntry = document.createElement("span");
    mainEntry.classList.add("main-logo-text");
    mainEntry.textContent = NAVBAR_ITEMS.ITEMS.mainEntry.name;
    mainItemContainer.appendChild(mainEntry);

    navbar.appendChild(mainItemContainer);

    //Contains the other menu items, hidden by default (mobile view)
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.classList.add("hidden");

    const dropdownIcon = document.createElement('button');
    dropdownIcon.id = 'dropdown_menu';
    
    const icon = new Image();
    icon.src = burgerIcon;
    icon.classList.add('dropdown-icon');
    dropdownIcon.appendChild(icon);

    menuContainer.appendChild(dropdownIcon);

    if (NAVBAR_ITEMS.ITEMS.menus) {
        for (let i = 0; i < Object.keys(NAVBAR_ITEMS.ITEMS.menus).length; i++) {
            menuContainer.appendChild(
                generateMenuEntries(
                    NAVBAR_ITEMS.ITEMS.menus[
                        Object.keys(NAVBAR_ITEMS.ITEMS.menus)[i]
                    ]
                )
            );
        }
    }



    navbar.appendChild(menuContainer);

    return navbar;
}

function generateMenuEntries(itemObject) {
    /**
     * @param {Object} itemObject - menu entries
     * @returns {Element} HTML container (div) with the menu and sub menu entries 
     */

    const container = document.createElement("div");

    container.textContent = itemObject.name;
    container.id = itemObject.id;

    if (itemObject.submenus) {
        const subContainer = document.createElement("div");

        subContainer.classList.add("hide");

        for (let i = 0; i < Object.keys(itemObject.submenus).length; i++) {
            subContainer.appendChild(
                generateMenuEntries(
                    itemObject.submenus[Object.keys(itemObject.submenus)[i]]
                )
            );
        }

        container.appendChild(subContainer);
    }

    return container;
}
