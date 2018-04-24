import moment from "moment";
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate
} from "../../actions/filters";

test("Should generate set text filter object with text value", () => {
  const action = setTextFilter("rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "rent"
  });
});

test("Should generate set text filter object with default value", () => {
  const action = setTextFilter("");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("Should generate action object for sort by Date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("Should generate action object for sort by Amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
