import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    /* this.contador = 10; */
    this.state = { contador: 0 };
  }
  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <div>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            Diminuir
          </button>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            Aumentar
          </button>
        </div>
      </div>
    );
  }
}
