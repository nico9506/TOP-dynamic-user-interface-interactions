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
import { GITHUB_PARAMETERS } from "./parameters";
import githubIcon from "./assets/github.svg";
import cityView from "./assets/IMG_20230126_150543.jpg";
import shrineOfRemembrance from "./assets/IMG_20230211_000741.jpg";
import StPatrick from "./assets/IMG_20230413_165943.jpg";

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

    const dropdownIcon = document.createElement("button");
    dropdownIcon.id = "dropdown_menu";

    const icon = new Image();
    icon.src = burgerIcon;
    icon.classList.add("dropdown-icon");
    dropdownIcon.appendChild(icon);

    menuContainer.appendChild(dropdownIcon);

    const entriesContainer = document.createElement("div");
    entriesContainer.id = "entries_menu";
    entriesContainer.classList.add("entries-menu");
    entriesContainer.classList.add("hidden");

    if (NAVBAR_ITEMS.ITEMS.menus) {
        for (let i = 0; i < Object.keys(NAVBAR_ITEMS.ITEMS.menus).length; i++) {
            entriesContainer.appendChild(
                generateMenuEntries(
                    NAVBAR_ITEMS.ITEMS.menus[
                        Object.keys(NAVBAR_ITEMS.ITEMS.menus)[i]
                    ]
                )
            );
        }
    }

    menuContainer.appendChild(entriesContainer);

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

    /**
     * Sub menus to finish later... when the cows come home...
     */
    // if (itemObject.submenus) {
    //     const subContainer = document.createElement("div");

    //     subContainer.classList.add("hidden");

    //     for (let i = 0; i < Object.keys(itemObject.submenus).length; i++) {
    //         subContainer.appendChild(
    //             generateMenuEntries(
    //                 itemObject.submenus[Object.keys(itemObject.submenus)[i]]
    //             )
    //         );
    //     }
    //     container.addEventListener("click", () => {
    //         subContainer.classList.toggle("hidden");
    //     });

    //     container.appendChild(subContainer);
    // }

    return container;
}

export function generateMainPanel() {
    const container = document.createElement("main");
    // container.classList.add('main-container');

    container.appendChild(generateSlideshow());
    container.appendChild(generateDots(3));

    return container;
}

function generateSlideshow() {
    /**
     * @returns {Element} slideshow to display images
     */

    const container = document.createElement("div");
    container.classList.add("slideshow-container");

    container.appendChild(generateSlide("1/3", cityView, "Melbourne CBD"));
    container.appendChild(
        generateSlide("2/3", shrineOfRemembrance, "Shrine of Remembrance")
    );
    container.appendChild(
        generateSlide("3/3", StPatrick, "St Patrick's Cathedral")
    );

    return container;
}

function generateDots(n) {
    /**
     * Returns n dots to mark the current slide
     */
    const container = document.createElement("div");
    
    for (let i = 0; i < n; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        container.appendChild(dot);
    }

    return container;
}

function generateSlide(number_text, img_source, caption) {
    /**
     * @param {String} number_text - img number x out of n. eg 2/5
     * @param {String} img_source
     * @param {String} caption - Img title - caption
     * @returns {Element} HTML element to use as Slide
     */

    const slide = document.createElement("div");
    slide.classList.add("mySlides", "fade");

    const numbertext = document.createElement("div");
    numbertext.classList.add("numbertext");
    numbertext.textContent = number_text;
    slide.appendChild(numbertext);

    const picture = document.createElement("img");
    picture.src = img_source;
    slide.appendChild(picture);

    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = caption;
    slide.appendChild(text);

    return slide;
}

export function generateFooter() {
    /**
     * Creates the footer element and returns the HTML element
     * @returns {Element} footer element
     */

    const footer = document.createElement("footer");

    // DIV to keep together the GitHub logo and the username
    const githubLink = document.createElement("a");
    githubLink.classList.add("github-contact-info");
    githubLink.href = GITHUB_PARAMETERS.GITHUB_REPO_URL;

    const logo = new Image();
    logo.src = githubIcon;
    logo.classList.add("footer-logo");
    githubLink.appendChild(logo);

    const githubUser = document.createElement("h1");
    githubUser.classList.add("github-user");
    githubUser.id = "githubUser";
    githubUser.textContent = GITHUB_PARAMETERS.GITHUB_USER;
    githubLink.appendChild(githubUser);

    footer.appendChild(githubLink);

    return footer;
}
