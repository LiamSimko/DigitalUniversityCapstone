import { TextArea } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("TextArea", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <TextArea></TextArea>
      </MockedProvider>
    );
    expect(await screen.findByTestId("textarea")).toBeInTheDocument();
  });
});
