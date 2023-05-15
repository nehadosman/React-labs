import { Component } from "react";
class ElementsClass extends Component {
  getData = (e) => {
    this.setState({ name: e.target.value });
  };

  resetForm = (e) => {
    this.setState({ name: "" });
  };
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div className="first">
        <div className="text-btn">
          <input type="text" value={this.state.name} onChange={this.getData} />
          <input type="button" value="Reset" onClick={this.resetForm} />
        </div>

        <p className="txt">{this.state.name}</p>
      </div>
    );
  }
}

export default ElementsClass;
