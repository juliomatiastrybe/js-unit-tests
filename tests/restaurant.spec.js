const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    const menu = createMenu({ food: {}, drinks: {} });
    //verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu
    expect(Object.keys(menu)).toContain('fetchMenu');

    //verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função
    expect(typeof menu.fetchMenu).toEqual('function');

    // verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.
    const keysMenu = Object.keys(menu.fetchMenu());
    expect(keysMenu).toEqual(['food', 'drinks']);
    expect(keysMenu).not.toEqual(['food', 'drinks', 'reserv']);

    //verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    const passedMenu = { food: {}, drinks: {} };
    const recoverMenu = menu.fetchMenu();
    expect(passedMenu).toEqual(recoverMenu);
    
  });
});
