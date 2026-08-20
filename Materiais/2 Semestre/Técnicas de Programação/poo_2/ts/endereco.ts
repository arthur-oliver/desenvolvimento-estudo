export default class Endereco {
    private rua: string //"private" incapsula o atributo (não pode ser acessado ou modificado)
    constructor(rua:string){
        this.rua = rua
    }
    public getRua(): string{ //"pegar" (permite o acesso ao atributo privado)
        return this.rua
    }

    public setRua(rua:string){ //"enviar" (permite o acesso ao atributo privado)
        this.rua = rua
    }
}