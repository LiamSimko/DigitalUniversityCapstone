import { Book } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("Book", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Book title={"title"} author={"author"}></Book>
      </MockedProvider>
    );
    expect(await screen.findByText("title")).toBeInTheDocument();
  });
});
