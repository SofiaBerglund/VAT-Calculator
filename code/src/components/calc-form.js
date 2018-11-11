import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class CalcForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: NaN,
      exVat: NaN
    }
  }

  handleRadioChange = event => {
    const vat = parseInt(event.target.value, 10)
    this.setState({
      vatRate: vat,
      incVat: exVatToIncVat(vat, this.state.exVat)
    })
  }

  handleIncVatChange = event => {
    const inc = parseInt(event.target.value, 10)
    this.setState({
      incVat: inc,
      exVat: incVatToExtVat(this.state.vatRate, inc)
    })
  }

  handleExVatChange = event => {
    const ex = parseInt(event.target.value, 10)
    this.setState({
      exVat: ex,
      incVat: exVatToIncVat(this.state.vatRate, ex)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>VAT Calculator</h1>
        <form>
          <div className="radio-buttons">
            <div className="radio-row">
              <label>25%</label>
              <input
                type="radio"
                value="25"
                checked={this.state.vatRate === 25}
                onChange={this.handleRadioChange}
              />
            </div>

            <div className="radio-row">
              <label>12%</label>
              <input
                type="radio"
                value="12"
                checked={this.state.vatRate === 12}
                onChange={this.handleRadioChange}
              />
            </div>

            <div className="radio-row">
              <label>6%</label>
              <input
                type="radio"
                value="6"
                checked={this.state.vatRate === 6}
                onChange={this.handleRadioChange}
              />
            </div>
          </div>

          <div className="input-fields">
            <div className="input-row">
              <label>Including VAT</label>
              <input
                type="number"
                placeholder=" amount incl VAT"
                onChange={this.handleIncVatChange}
                value={this.state.incVat}
              />
            </div>

            <div className="input-row">
              <label>Excluding VAT</label>
              <input
                type="number"
                placeholder=" amount excl VAT"
                onChange={this.handleExVatChange}
                value={this.state.exVat}
              />
            </div>

            <div className="input-row">
              <label>Total VAT</label>
              <input
                type="number"
                value={this.state.incVat - this.state.exVat}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CalcForm
