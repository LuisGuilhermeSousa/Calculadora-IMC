import { useState } from 'react'
import './app.css'

function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')

  function calculoIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6){
      setMensagem("Você está abaixo do peso! Seu IMC é : " + imc.toFixed(2))
    }
    else if(imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideial! Seu IMC é : " + imc.toFixed(2))
    }
    else if(imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso! Seu IMC é : " + imc.toFixed(2))
    }
    else if(imc > 34.9) {
      setMensagem("Cuidado, obesidade! Seu IMC é : " + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-input">

        <h2>Peso:</h2>
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={ (e) => setPeso(e.target.value)}
        />

        <h2>Altura:</h2>
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calculoIMC}>
          Calcular
        </button>

      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}

export default App;