import { activateEvents } from "./events";
import { generateFooter, generateMainPanel, generateNavbar } from "./page-elements";
import { NAVBAR_ITEMS } from "./parameters";
import "./style.css";


(function generateWebPage() {
    /**
     * Load the components to create and show the HTML elements
     */

    const body = document.body;

    body.appendChild(generateNavbar(NAVBAR_ITEMS));

    body.appendChild(generateMainPanel());

    body.appendChild(generateFooter());
})();

activateEvents();