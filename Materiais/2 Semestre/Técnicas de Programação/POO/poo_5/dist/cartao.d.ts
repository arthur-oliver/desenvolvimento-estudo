import Pagamento from "./pagamento";
import Parcelavel from "./parcelavel";
export default class Cartao extends Pagamento implements Parcelavel {
    fazerPagamentoParcelado(valor: number, parcelas: number): string;
    fazerPagamento(valor: number): string;
}
//# sourceMappingURL=cartao.d.ts.map