import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("render textbox element", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(
      NumberOfEventsWrapper.find("#numberOfEvents__input").prop("value")
    ).toBe(numberOfEvents);
  });

  test("change state when input changes", () => {
    const eventObject = { target: { value: 20 } };
    NumberOfEventsWrapper.find("#numberOfEvents__input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(20);
  });

  test("show number of events input label", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
  });
});


// describe("NumberOfEvent component", () => {
//   let NumberOfEventsWrapper;
//   beforeAll(() => {
//     NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
//   });

//   test("render NumberOfEvent input form", () => {
//     expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
//     expect(NumberOfEventsWrapper.find(".numberInput")).toHaveLength(1);
//   });

//   test("render text input correctly", () => {
//     const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
//     expect(
//       NumberOfEventsWrapper.find("#numberOfEvents__input").prop("value")
//     ).toBe(numberOfEvents);
//   });

//   test("enter and submitting number change numberOfEvents state", () => {
//     const eventObject = { target: { value: 32 } };
//     NumberOfEventsWrapper.find(".numberInput")
//       .at(0)
//       .simulate("change", eventObject);
//     expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
//   });

//   test("show number of events input label", () => {
//     expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
//   });
// });
