/**
 * Collection of constants and parameters, such as:
 *  -Menu names
 *  -Titles
 *  -Static text content
 */

export let slideIndex = 0;

export const GITHUB_PARAMETERS = {
    GITHUB_USER: "nico9506",
    GITHUB_REPO_URL:
        "https://github.com/nico9506/TOP-dynamic-user-interface-interactions",
};

//List of menu items to be displayed in the navbar
export const NAVBAR_ITEMS = {
    /**
     * Use objects to create submenus (not finished in generateMenuEntries(itemObject) from page-elements.js)
     *
     * 'mainEntry' is always shown, while 'menus' is mean to be
     * hide in the mobile view
     *
     * menu IDs must be unique and use underscore '_' instead of space ' '.
     */

    ITEMS: {
        mainEntry: {
            name: "home",
            id: "home",
        },
        menus: {
            entryWithSubmenus: {
                name: "products",
                submenus: {
                    subentry1: {
                        name: "Product 1",
                        id: "product_1",
                    },
                    anotherSubMenu: {
                        name: "Dropdown submenu",
                        submenus: {
                            sub_subentry1: {
                                name: "Sub Sub item",
                                id: "sub_subentry1",
                            },
                        },
                        id: "dropdown_submenu",
                    },
                    another_subentry: {
                        name: "Product N",
                        id: "product_n",
                    },
                },
                id: "products",
            },
            otherEntry: {
                name: "about us",
                id: "about_us",
            },
        },
    },
};
