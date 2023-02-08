import { Header } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: "/",
  })),
}));

describe("Header", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Header></Header>
      </MockedProvider>
    );
    expect(await screen.findByText("Liam Simko Capstone")).toBeInTheDocument();
  });
});
