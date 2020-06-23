import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders ", () => {
  const { getByText } = render(<App />);
  const linkBooking = getByText(/create a new booking/i);
  const linkSeating = getByText(/change booking status/i);
  expect(linkBooking).toBeInTheDocument();
  expect(linkSeating).toBeInTheDocument();
});
