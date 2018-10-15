import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class Radio extends React.Component {

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
          <label htmlFor="25%">25%</label>
          <input
          id="25%"
          type="radio"
          value="25"
          checked={this.state.vatRate === 25}
          onChange={this.handleRadioChange} />
        </div>

        <div>
          <label htmlFor="12%">12%</label>
          <input
          id="12%"
          type="radio"
          value="12"
          checked={this.state.vatRate === 12}
          onChange={this.handleRadioChange} />
        </div>

        <div>
          <label htmlFor="6%">6%</label>
          <input
          id="6%"
          type="radio"
          value="6"
          checked={this.state.vatRate === 6}
          onChange={this.handleRadioChange} />
        </div>

        <div>
          <label htmlFor="incVAT">Including VAT</label>
          <input
          type="number"
          name="incVat"
          onChange={this.handleIncVatChange}
          value={this.state.incVat} />
        </div>

        <div>
          <label htmlFor="exVAT">Excluding VAT</label>
          <input
          type="number"
          name="exVat"
          onChange={this.handleExVatChange}
          value={this.state.exVat} />
        </div>

        <div>
          <label htmlFor="totalVAT">VAT</label>
          <input
          type="number"
          name="totalVat"
          value={this.state.incVat - this.state.exVat} />
        </div>

      </form>
    )
  }

}

export default Radio
