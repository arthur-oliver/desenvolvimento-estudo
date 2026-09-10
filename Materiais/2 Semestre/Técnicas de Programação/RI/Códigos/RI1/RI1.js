let comparacao = []; //array

const hulk = {
    nome: 'Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: 'Mãos',
    armaSecundaria: 'Pés',
    velocidade: 20, //0 a 100
    forca: 100, //0 a 100
    resistencia: 90, //0 a 100
    descricao : function(){
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal do personagem: ' + this.armaPrincipal + '\n' +
            'Arma secundaria do personagem: ' + this.armaSecundaria + '\n' +
            'Nível de força do personagem: ' + this.forca + '\n' +
            'Nível de força do velocidade: ' + this.velocidade + '\n' +
            'Nível de força do resistência: ' + this.resistencia + '\n'
    }
}
const homemAranha = {
    nome: 'Peter Parker',
    codinome: 'Homem-Aranha',
    armaPrincipal: 'Teias',
    armaSecundaria: 'Nanotecnologia',
    velocidade: 60, //0 a 100
    forca: 35, //0 a 100
    resistencia: 60, //0 a 100
    descricao : function(){
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal do personagem: ' + this.armaPrincipal + '\n' +
            'Arma secundaria do personagem: ' + this.armaSecundaria + '\n' +
            'Nível de força do personagem: ' + this.forca + '\n' +
            'Nível de força do velocidade: ' + this.velocidade + '\n' +
            'Nível de força do resistência: ' + this.resistencia + '\n'
    }
}
const capitaoAmerica = {
    nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo',
    armaSecundaria: 'Pistola',
    velocidade: 75, //0 a 100
    forca: 45, //0 a 100
    resistencia: 75, //0 a 100
    descricao : function(){
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal do personagem: ' + this.armaPrincipal + '\n' +
            'Arma secundaria do personagem: ' + this.armaSecundaria + '\n' +
            'Nível de força do personagem: ' + this.forca + '\n' +
            'Nível de força do velocidade: ' + this.velocidade + '\n' +
            'Nível de força do resistência: ' + this.resistencia + '\n'
    }
}
const homemDeFerro = {
    nome: 'Tony Stark',
    codinome: 'Homem de Ferro',
    armaPrincipal: 'Armadura',
    armaSecundaria: 'Dinheiro',
    velocidade: 20, //0 a 100
    forca: 60, //0 a 100
    resistencia: 100, //0 a 100
    descricao : function(){
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal do personagem: ' + this.armaPrincipal + '\n' +
            'Arma secundaria do personagem: ' + this.armaSecundaria + '\n' +
            'Nível de força do personagem: ' + this.forca + '\n' +
            'Nível de força do velocidade: ' + this.velocidade + '\n' +
            'Nível de força do resistência: ' + this.resistencia + '\n'
    }
}
const thor = {
    nome: 'Thor Odinson',
    codinome: 'Thor',
    armaPrincipal: 'Mjolnir',
    armaSecundaria: 'Raios',
    velocidade: 80, //0 a 100
    forca: 95, //0 a 100
    resistencia: 95, //0 a 100
    descricao : function(){
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal do personagem: ' + this.armaPrincipal + '\n' +
            'Arma secundaria do personagem: ' + this.armaSecundaria + '\n' +
            'Nível de força do personagem: ' + this.forca + '\n' +
            'Nível de força do velocidade: ' + this.velocidade + '\n' +
            'Nível de força do resistência: ' + this.resistencia + '\n'
    }
}
const viuvaNegra = {
    nome: 'Natasha Romanoff',
    codinome: 'Viúva Negra',
    armaPrincipal: 'Pistolas',
    armaSecundaria: 'Bastões',
    velocidade: 70, //0 a 100
    forca: 30, //0 a 100
    resistencia: 40, //0 a 100
    descricao : function(){
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal do personagem: ' + this.armaPrincipal + '\n' +
            'Arma secundaria do personagem: ' + this.armaSecundaria + '\n' +
            'Nível de força do personagem: ' + this.forca + '\n' +
            'Nível de força do velocidade: ' + this.velocidade + '\n' +
            'Nível de força do resistência: ' + this.resistencia + '\n'
    }
}
const gaviaoArqueiro = {
    nome: 'Clint Barton',
    codinome: 'Gavião Arqueiro',
    armaPrincipal: 'Arco e flecha',
    armaSecundaria: 'Flechas especiais',
    velocidade: 65, //0 a 100
    forca: 35, //0 a 100
    resistencia: 45, //0 a 100
    descricao : function(){
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal do personagem: ' + this.armaPrincipal + '\n' +
            'Arma secundaria do personagem: ' + this.armaSecundaria + '\n' +
            'Nível de força do personagem: ' + this.forca + '\n' +
            'Nível de força do velocidade: ' + this.velocidade + '\n' +
            'Nível de força do resistência: ' + this.resistencia + '\n'
    }
}
const thanos = {
    nome: 'Thanos',
    codinome: 'Thanos',
    armaPrincipal: 'Manopla',
    armaSecundaria: 'Espada',
    velocidade: 15, //0 a 100
    forca: 90, //0 a 100
    resistencia: 99, //0 a 100
    descricao : function(){
        return 'Nome do personagem: ' + this.nome + '\n' +
            'Codinome do personagem: ' + this.codinome + '\n' +
            'Arma principal do personagem: ' + this.armaPrincipal + '\n' +
            'Arma secundaria do personagem: ' + this.armaSecundaria + '\n' +
            'Nível de força do personagem: ' + this.forca + '\n' +
            'Nível de força do velocidade: ' + this.velocidade + '\n' +
            'Nível de força do resistência: ' + this.resistencia + '\n'
    }
}

comparacao.push(
    hulk,
    capitaoAmerica,
    homemDeFerro,
    thor,
    viuvaNegra,
    gaviaoArqueiro,
    thanos
);

// Comparação
for (let x = 0; x < comparacao.length; x++) {

    for (let y = x + 1; y < comparacao.length; y++) {

        let personagem1 = comparacao[x];
        let personagem2 = comparacao[y];

        console.log('\n- - - - - - - - - - - - - - -')
        console.log(personagem1.codinome + " vs " + personagem2.codinome);

        if (personagem1.forca > personagem2.forca) {
            console.log("Força: " + personagem1.codinome + " vence");
        } 
        else if (personagem2.forca > personagem1.forca) {
            console.log("Força: " + personagem2.codinome + " vence");
        } 
        else {
            console.log("Força: são iguais");
        }

        if (personagem1.velocidade > personagem2.velocidade) {
            console.log("Velocidade: " + personagem1.codinome + " vence");
        } 
        else if (personagem2.velocidade > personagem1.velocidade) {
            console.log("Velocidade: " + personagem2.codinome + " vence");
        } 
        else {
            console.log("Velocidade: são iguais");
        }

        if (personagem1.resistencia > personagem2.resistencia) {
            console.log("Resistência: " + personagem1.codinome + " vence");
        } 
        else if (personagem2.resistencia > personagem1.resistencia) {
            console.log("Resistência: " + personagem2.codinome + " vence");
        } 
        else {
            console.log("Resistência: são iguais");
        }
    }
}