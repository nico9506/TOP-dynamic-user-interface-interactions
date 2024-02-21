import { generateNavbar } from "./page-elements";
import { NAVBAR_ITEMS } from "./parameters";
import "./style.css";


(function generateWebPage() {
    /**
     * Load the components to create and show the HTML elements
     */

    const body = document.body;

    body.appendChild(generateNavbar(NAVBAR_ITEMS));
})();