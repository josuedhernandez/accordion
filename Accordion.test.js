import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from "./Accordion";

describe(`Tabs Component`, () => {
  // array of objects each with a name and content
  const sections = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Section 2",
      content:
        "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
    },
    {
      title: "Section 3",
      content:
        "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
    },
  ];

  it("renderes without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders empty given no clicks", () => {
    const wrapper = shallow(<Accordion sections={sections}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders contet after button clicked", () => {
    const wrapper = shallow(<Accordion sections={sections}/>);
    wrapper.find("button").at(1).simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders contet after last button clicked", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find("button").at(2).simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
