import { useState } from "react"

function Reativo() {
    
    const [nome, setNome]  = useState('Ana')
    const [contador, setContador]  = useState(0)

    return (
      <div className="">
        <div>
            <button className="btn btn-success btn-sm" onClick={() => { 
                setNome("Bia")
                setContador(contador+1)
            }}>Altera nome</button>
            <span className="badge bg-primary mx-1">
              NOME:
            </span> 
            {nome} {contador}
        </div>
      </div>
    );
  }
  
  export default Reativo;