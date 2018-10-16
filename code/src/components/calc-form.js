import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class CalcForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0
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
      <form>

        <div>
          <label>25%</label>
          <input
          type="radio"
          value="25"
          checked={this.state.vatRate === 25}
          onChange={this.handleRadioChange} />
        </div>

        <div>
          <label>12%</label>
          <input
          type="radio"
          value="12"
          checked={this.state.vatRate === 12}
          onChange={this.handleRadioChange} />
        </div>

        <div>
          <label>6%</label>
          <input
          type="radio"
          value="6"
          checked={this.state.vatRate === 6}
          onChange={this.handleRadioChange} />
        </div>

        <div>
          <label>Including VAT</label>
          <input
          type="number"
          onChange={this.handleIncVatChange}
          value={this.state.incVat} />
        </div>

        <div>
          <label>Excluding VAT</label>
          <input
          type="number"
          onChange={this.handleExVatChange}
          value={this.state.exVat} />
        </div>

        <div>
          <label>VAT</label>
          <input
          type="number"
          value={this.state.incVat - this.state.exVat} />
        </div>

      </form>
    )
  }

}

export default CalcForm
