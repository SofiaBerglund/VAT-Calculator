import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExtVat(25, 1000)}</p>
        <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p>
      </div>
    )
  }

}

export default App
