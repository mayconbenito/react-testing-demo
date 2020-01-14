import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("expect image to hava src and alt tags", () => {
  const { getByTestId } = render(<App />);
  const img = getByTestId("headerImg");

  expect(img).toHaveAttribute("src");
  expect(img).toHaveAttribute("alt");
});

test("expect App to have a link to https://reactjs.org", () => {
  const { getByTestId } = render(<App />);
  const link = getByTestId("link");

  expect(link).toHaveAttribute("href", "https://reactjs.org");
});
