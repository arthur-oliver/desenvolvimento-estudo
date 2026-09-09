import Pagamento from "./pagamento";

export default class Boleto extends Pagamento{
    fazerPagamento(valor: number): string {
        return `Efetuando pagamento no valor: ${valor}`
    }
}