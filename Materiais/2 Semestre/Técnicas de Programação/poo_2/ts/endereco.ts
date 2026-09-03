export default class Endereco {
    private rua: string //ENCAPSULAMENTO: "private" encapsula o atributo (não pode ser acessado ou modificado) - 
    constructor(rua:string){
        this.rua = rua
    }
    
    //Modificadores de acesso: "public" permite o acesso ao atributo privado (pode ser acessado ou modificado)

    public getRua(): string{ //"pegar" (permite o acesso ao atributo privado)
        return this.rua
    }

    public setRua(rua:string){ //"enviar" (permite o acesso ao atributo privado)
        this.rua = rua
    }
}