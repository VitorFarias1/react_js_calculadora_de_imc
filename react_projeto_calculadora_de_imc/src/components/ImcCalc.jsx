import Button from "./Button"
import "./ImcCalc.css"

const ImcCalc = () => {
  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input type="text" id="height" name="height" placeholder="Ex: 1,70" />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input type="text" id="weight" name="weight" placeholder="Ex: 70,5" />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" />
          <Button id="clear-btn" text="Limpar" />
        </div>
      </form>
    </div>
  )
}

export default ImcCalc