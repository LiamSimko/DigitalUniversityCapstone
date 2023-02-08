import { Book } from "../../components";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

describe("Book", () => {
  it("renders without error", async () => {
    render(
      <MockedProvider addTypename={false}>
        <Book
          href={"/"}
          breadCrumbPath={"/"}
          breadCrumbName={"Home"}
          title={"title"}
          author={"author"}
        ></Book>
      </MockedProvider>
    );
    expect(await screen.findByText("title")).toBeInTheDocument();
  });

  it("should render with href", () => {
    const push = jest.fn(); // the component uses `router.push` only

    useRouter.mockImplementation(() => ({
      push,
    }));
    render(
      <MockedProvider addTypename={false}>
        <Book
          href={"/"}
          breadCrumbPath={"/"}
          breadCrumbName={"Home"}
          title={"title"}
          author={"author"}
        ></Book>
      </MockedProvider>
    );
    userEvent.click(screen.getByTestId("link"));
    expect(push).toHaveBeenCalledWith({
      pathname: "/",
      query: { breadCrumbName: "Home", breadCrumbPath: "/" },
    });
  });
});
