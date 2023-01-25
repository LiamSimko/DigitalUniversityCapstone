import { Input } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("Input", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Input></Input>
      </MockedProvider>
    );
    expect(await screen.getByTestId("input")).toBeInTheDocument();
  });
});
