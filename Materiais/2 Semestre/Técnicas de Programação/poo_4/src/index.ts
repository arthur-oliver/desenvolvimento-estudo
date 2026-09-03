//Conteúdo: parametrização e sobrecarga de construtor
import Estrutura from "./estrutura";
import Comida from "./comida";
import Empresa from "./empresa";

let estrutura = new Estrutura<any>() //any representa qualquer objeto e envia para 'T' em 'Estrutura' - exemplo: Comida

let cm = new Comida()
cm.nome = `lasanha`
cm.sabor = 9

let cm1 = new Comida()
cm1.nome = `parmegiana`
cm1.sabor = 10

estrutura.lista.push(cm)
estrutura.lista.push(cm1)

estrutura.lista.forEach( elemento => {
    console.log(`Nome: ${elemento.nome} nível: ${elemento.sabor}`)
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let estrutura1 = new Estrutura<Empresa>()

let empresa = new Empresa() // as sugestões mostram os construtores disponíveis para Empresa (por ser criada com sobrecarga de construtor)

//Para funcionar  - Terminal CMD:
// tsc
// node dist/index.js

//Se não funcionar:
//Apaga pasta 'dist' e arquivo 'tsconfig.json'
//Para funcionar  - Terminal CMD:
// tem que ter tsc instalado ----> npm install -g typescript (já tem nesse computador)
// tsc --init
// tsc
// node dist/index.js