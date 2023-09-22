const receitasDaVo = {
    muguza: true,
    cuscuz: true,
    pizza: false,
    galinhaVeia: true,
    parmegianna: false,
    sopa: true,
    sorvete: false,
};

describe('Receitas da minha avó' , ()=>{
    test('É receita de vó' , ()=>{
        expect(receitasDaVo.muguza).toBeTruthy();
    });

    test('Não é receita de vó' , ()=>{
        expect(receitasDaVo.cuscuz).toBeTruthy();
    })
    
    test('Não é receita de vó' , ()=>{
        expect(receitasDaVo.pizza).toBeFalsy();
    })

    test('Não é receita de vó' , ()=>{
        expect(receitasDaVo.sorvete).toBeFalsy();
    })

    test('Não é receita de vó' , ()=>{
        expect(receitasDaVo.galinhaVeia).toBeTruthy();
    })

    test('Não é receita de vó' , ()=>{
        expect(receitasDaVo.sopa).toBeTruthy();
    })

    test('Não é receita de vó' , ()=>{
        expect(receitasDaVo.parmegianna).toBeFalsy();
    })
});