import { render, screen } from "@testing-library/react";
import Home from ".";


// test("Testing Header func", () => {
//   render(<Home title="Hello World" />);
//   const home_comp = screen.getByText(/Hello World/i);
//   expect(home_comp).toBeInTheDocument();
// });

test("Testing Header func", () => {
  render(<Home  />);
 const home_comp = screen.getByRole("button", { name: "Add" });
  expect(home_comp).toBeInTheDocument();
});

test("Testing header query", () => {
  render(<home  />);
  const home_comp = screen.queryByText(/retr/i);
  expect(home_comp).toBeInTheDocument();
});
