import { Footer } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider>
        <Footer></Footer>
      </MockedProvider>
    );
    expect(
      await screen.findByText("DIGITAL UNIVERSITY INCORPERATED")
    ).toBeInTheDocument();
  });
});
