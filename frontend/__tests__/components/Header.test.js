import { Header } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: "/",
  })),
}));

describe("Header", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider>
        <Header></Header>
      </MockedProvider>
    );
    expect(await screen.findByText("Liam Simko Capstone")).toBeInTheDocument();
  });
  it("links to new page", async () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({
      push,
    }));
    render(
      <MockedProvider>
        <Header></Header>
      </MockedProvider>
    );
    expect(await screen.findByText("Authors")).toBeInTheDocument();
    userEvent.click(screen.getByText("Authors"));
    expect(push).toHaveBeenCalledWith("/authors");
    userEvent.click(screen.getByText("Categories"));
    expect(push).toHaveBeenCalledWith("/categories");
  });
});
