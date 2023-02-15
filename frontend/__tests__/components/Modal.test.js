import { Modal } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("Modal", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider>
        <Modal title={'title'}></Modal>
      </MockedProvider>
    );
    expect(await screen.findByText("title")).toBeInTheDocument();
  });
});
