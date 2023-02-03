import { Book } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("Book", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Book href={"/"} title={"title"} author={"author"}></Book>
      </MockedProvider>
    );
    expect(await screen.findByText("title")).toBeInTheDocument();
  });
  it("should render with href", () => {
    render(
      <MockedProvider addTypename={false}>
        <Book href={"/"} title={"title"} author={"author"}></Book>
      </MockedProvider>
    );
    expect(screen.getByTestId("link")).toBeInTheDocument();
    expect(screen.getByTestId("link")).toHaveAttribute("href", "/");
  });
});
