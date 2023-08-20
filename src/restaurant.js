/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => {
    const MenuObject = {
        fetchMenu: () => menu,
    };
    return MenuObject;
};
// console.log(typeof Object.values(createMenu()));
// console.log(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu()));
const menu = createMenu({ food: {}, drinks: {} });
// const keyMenu = Object.keys(menu.fetchMenu());
// console.log(keyMenu);
// console.log(createMenu({ food: {}, drinks: {} }).fetchMenu());
const recoverMenu = menu.fetchMenu();
console.log(recoverMenu);
module.exports = createMenu;
