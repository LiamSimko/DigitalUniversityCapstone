import { Toast } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("Toast", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Toast message={"success"} type={"success"}></Toast>
      </MockedProvider>
    );
    expect(await screen.findByText("success")).toBeInTheDocument();
  });
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Toast message={"error"} type={"error"}></Toast>
      </MockedProvider>
    );
    expect(await screen.findByText("error")).toBeInTheDocument();
  });
});
