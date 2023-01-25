import { Text } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("Text", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Text>test</Text>
      </MockedProvider>
    );
    expect(await screen.findByText("test")).toBeInTheDocument();
  });
});
