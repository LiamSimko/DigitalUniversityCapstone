import { Breadcrumb } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";

describe("Book", () => {
  it("renders with text", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Breadcrumb links={[{ name: "title" }]}></Breadcrumb>
      </MockedProvider>
    );
    expect(await screen.findByText("title")).toBeInTheDocument();
  });
  it("should render a link with href", () => {
    render(
      <MockedProvider addTypename={false}>
        <Breadcrumb links={[{ name: "title", href: "/test" }]}></Breadcrumb>
      </MockedProvider>
    );
    expect(screen.getByText(/title/)).toBeInTheDocument();
    expect(screen.getByText(/title/)).toHaveAttribute("href", "/test");
  });
});
