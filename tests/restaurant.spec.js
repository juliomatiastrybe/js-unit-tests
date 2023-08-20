const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    //verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu
    expect(Object.keys(createMenu())).toContain('fetchMenu');
  });
});
