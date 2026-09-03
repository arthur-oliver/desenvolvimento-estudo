export default interface Parcelavel { //interface é como uma base (classe abstract) porém adiciona um comportamento específico ao objeto
    fazerPagamentoParcelado(valor: number, parcelas: number): string
}