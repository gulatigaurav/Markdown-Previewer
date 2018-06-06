import React, { Component } from "react";
import Auxil from "../../hoc/Auxil";
import marked from "marked";

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "# Hello World!",
      transformedText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getMarkdownText = () => {
    let rawMarkup = marked(this.state.value, { sanitize: true });
    // this.setState({transformedText: rawMarkup});
    return { __html: rawMarkup };
  };

  handleChange(event) {
    // event.preventDefault();
    this.setState({
      value: event.target.value
    });
    console.log("Value: ", this.state.value);
  }

  render() {
    return (
      <Auxil>
        <div className="container">
          <div className="text-center">
            <h1>MARKDOWN PREVIEWER</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form>
                <label>
                  <br />
                  <h3> Enter Text: </h3>
                  <div className="form-group" style={{ padding: "35px 0" }}>
                    <textarea
                      id="editor"
                      value={this.state.value}
                      onChange={this.handleChange}
                      cols={100}
                      rows={30}
                      className="form-control"
                    />
                  </div>
                </label>
              </form>
            </div>

            <div className="col-md-6">
              <h3 style={{ padding: "25px 0" }}>Output Text: </h3>
              <br />
              <div
                dangerouslySetInnerHTML={this.getMarkdownText()}
                id="preview"
              />
            </div>
          </div>
        </div>
      </Auxil>
    );
  }
}

export default Markdown;
