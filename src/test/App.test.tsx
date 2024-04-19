import { render, screen } from "@testing-library/react";
import App from "../App.tsx";

it("test App", () => {
  render(<App />);
  const message = screen.getByText(/hello world/);
  expect(message).toBeInTheDocument();
});
