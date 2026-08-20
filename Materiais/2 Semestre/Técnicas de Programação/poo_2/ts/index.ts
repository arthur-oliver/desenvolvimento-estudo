import Endereco from "./endereco";

let end0 = new Endereco(`Av. Andromeda`)
let end1 = new Endereco(`Av. Andromeda`)
let end2 = new Endereco(`Av. Andromeda`)

end0.setRua('') //utilizando set (modifica o nome da rua em 'nome rua')

console.log(end0.getRua()) //utilizando get (verificação)