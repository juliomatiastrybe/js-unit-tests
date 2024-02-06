/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
    const menuObject = {
        fetchMenu: () => menu,
        consumption: [],
        order: (menuOrder) => {
            const arrayMenu = Object.values(menuObject.fetchMenu());
            const keysArray = Object.keys(arrayMenu[0]).concat(Object.keys(arrayMenu[1]));
            if (keysArray.includes(menuOrder)) {
                menuObject.consumption.push(menuOrder);
            } else {
                return 'Item indisponível';
            }
        },
        pay: () => {
            let totalPay = 0;
            const requests = menuObject.consumption;
            const arrayMenu = Object.values(menuObject.fetchMenu());
            const entriesMenu = Object.entries(arrayMenu[0]).concat(Object.entries(arrayMenu[1]));
            for (let index = 0; index < entriesMenu.length; index += 1) {
                const itemName = entriesMenu[index][0];
                const itemPrice = entriesMenu[index][1];

                const itemCount = requests.filter((item) => item === itemName).length;
                totalPay += itemPrice * itemCount;
            }
            return totalPay * 1.10;
        },

    };
    return menuObject;
};

module.exports = createMenu;