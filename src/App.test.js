import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navigation bar", () => {
  render(<App />);
  expect(screen.getByText(/South Spice Cloud Kitchen/i)).toBeInTheDocument();
}); 