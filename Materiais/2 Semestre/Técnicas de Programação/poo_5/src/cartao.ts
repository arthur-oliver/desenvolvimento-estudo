import Pagamento from "./pagamento";
import Parcelavel from "./parcelavel";

export default class Cartao extends Pagamento implements Parcelavel{
    fazerPagamentoParcelado(valor: number, parcelas: number): string {
        return `Efetuando pagamento parcelado no cartão no valor ${valor} em ${parcelas} parcelas`
    }
    fazerPagamento(valor: number): string {
        return `Efetuando pagamento no valor: ${valor}`
    }
}