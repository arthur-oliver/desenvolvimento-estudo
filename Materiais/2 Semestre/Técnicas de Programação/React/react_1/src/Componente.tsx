function Componente(props: any) { //props = propriedade (é umm json) - pode criar dentro dela todo tipo de parâmetro
    return (
        <>
            <div>Kung fu de Taiwan</div>
            <div>Shaolin do Sul é o melhor estilo</div>
            <div>Valor da props: {props.valor}</div>
        </>
    )
}
export default Componente;