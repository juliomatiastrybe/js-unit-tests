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
                // console.log(menuObject);
            } else {
                return 'Item indisponível';
            }
        },
    };
    return menuObject;
};
// console.log(typeof Object.values(createMenu()));
// console.log(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu()));
// const menu = createMenu({ food: {}, drinks: {} });
// const menu = createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 },
//     drinks: { agua: 3.90, cerveja: 6.90 } });
// console.log(menu);
// const keyMenu = Object.keys(menu.fetchMenu());
// console.log(keyMenu);
// console.log(createMenu({ food: {}, drinks: {} }).fetchMenu());
// const recoverMenu = menu.fetchMenu();
// const foods = Object.values(recoverMenu);
// console.log(foods);
// console.log(Object.keys(foods[1]));
// menu.order('coxinha');
// console.log(menu);
// menu.order('xablau');
// console.log(menu.order('xablau'));
// console.log(menu);
module.exports = createMenu;
