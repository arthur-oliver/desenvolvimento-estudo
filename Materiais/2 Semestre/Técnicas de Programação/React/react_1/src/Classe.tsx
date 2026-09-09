import { Component } from "react";

type propriedade = {
    mensagem: string
}

class Classe extends Component<propriedade> {

    constructor(props: propriedade){
        super(props);
    }

    render(){
        return(
            <>
                <div>Kung fu é o melhor esporte</div>
                <div>Mensagem: {this.props.mensagem}</div>
            </>
        )
    }
}
export default Classe