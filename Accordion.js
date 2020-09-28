import React from 'react';

class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = {
    currentContet: "",
    activeIndex: null,
    display: false,
  };
  handleButtonClick(index) {
    // console.log("button clicked!", {index});
    this.setState({ currentContet: this.props.sections[index].content,
                    activeIndex: index });
    if(this.state.activeIndex === index) {
        this.setState ({ display: !this.state.display});
    }
    else {
        this.setState({ display: true });
    }
  }
  renderContent(index) {
  return <p>{this.props.sections[index].content}</p>;
  }
  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {(this.state.activeIndex === index) && this.state.display && this.renderContent(index)}
      </li>
    )); 
  }
  render() {
    return (
      <div>
        <ul>{this.renderButtons()}</ul>
      </div>
    );
  }
}

export default Accordion;