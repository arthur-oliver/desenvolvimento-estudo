import { Component } from "react";

type estado = {
    data: Date
}

class Componente extends Component<{},estado>{
    constructor(props:any){
        super(props)
        this.state = {
            data: new Date()
        }
    }

    componentDidMount(): void {
        setInterval( () => {
            this.setState({
                data: new Date()
            })
        })
    }

    render(){
        return(
            <>
            <div> Data de agora: {this.state.data.toLocaleDateString()}</div>
            <div> Hora de agora: {this.state.data.toLocaleTimeString()}</div>
            </>
        )
    }
}
export default Componente