import React from "react"
import ReactDOM from "react-dom"
import './index.css';
import Button from "./Button"

function multi( a, b){
  return a * b
}

function sum( a, b){
  alert(a + b)
}


function primeiroJSX(){
  return(
    <div className="teste">
      Carlos Alberto - Introdução ao ReactJS
      <h1>Multiplicação 10 * 10: {multi(10, 10)} </h1>
      <Button onClick={() => sum(2,2)} name="Soma 2 + 2"/>
    </div>
  )
}

const buttonA = <button>Histórico dos clientes</button>

const buttonB = <button>Cadastrar cliente</button>

const hasCustomer = true

const listCustomer = [
  {
    id: 1,
    name: 'Carlos Alberto',
    skills: ['Java', 'C++', 'C#', 'Javascript']
  },
  {
    id: 2,
    name: 'Vera Lúcia',
    skills: ['Delphi', 'Go', 'VB', 'Ruby']
  },
  {
    id: 3,
    name: 'Américo',
    skills: ['Flutter', 'C++', 'C#', 'Javascript']
  }
]

const showEvent = (e) => {
    console.log("Evento Clicado")
    console.log(e);
}

const ButtonEvent = <button onClick={showEvent}>Mostrar Evento</button>


const App = () => {

    const handleChange = (e) => {
      const { value } = e.target
      console.log(value)
    }

    const renderShowHistory = (
      <div>
          Clique no botão abaixo para visualizar o histórico do clientes
          <br />
          {buttonA}
      </div>   
    )
    
    const renderAddCustomer = (
       <div>
          Clique abaixo para cadastrar o cliente
          <br />
          {buttonB}
       </div>
    )

    const showCustomer = () => {

      if (!hasCustomer) return null
      return(
        <div>
          <h1>Nome do cliente: Carlos Alberto</h1>
        </div>
      )

    }

    const renderCustomers = (customer, index) => {
      return (
        <div key={`customer-${customer.id}`}>
          <li>{customer.name}</li>
          {customer.skills.map(renderSkills)}
        </div>       

      )
    }

    const renderSkills = (skill, index) =>{
      return(
        <div style={ {paddingLeft: '30px' }} key={`skill-${index}`}>
          <li>{skill}</li>
        </div>
      )     
    }

    return (
        <div className="App">
            { primeiroJSX() }

            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D.</p>
            <br />
            <input onChange={handleChange} />
            {ButtonEvent}
            <br />
            <br />
            <br />
            {hasCustomer ? renderShowHistory : renderAddCustomer}  
            <div>
             { showCustomer() }
            </div>
            <br />  
            <div>
              <ul>
                {listCustomer.map(renderCustomers)}                
               </ul>
            </div>  
        </div>        
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
