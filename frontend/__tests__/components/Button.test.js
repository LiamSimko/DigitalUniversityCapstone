import { Button } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider>
        <Button>test</Button>
      </MockedProvider>
    );
    expect(await screen.findByText("test")).toBeInTheDocument();
  });
  it("calls the onClick prop when clicked", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    userEvent.click(screen.getByText("Click me"));
    expect(onClick).toHaveBeenCalled();
  });
});
