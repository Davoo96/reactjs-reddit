import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostsResults from ".";
import { childrenMock } from "../../__tests__/mocks/posts";
import { renderWithProviders } from "../../__tests__/testUtils";
import { incrementPost } from "../../modules/posts/slice";

vi.mock("../../lib/customHooks/useAppDispatch", async () => {
  const actual: object = await vi.importActual(
    "../../lib/customHooks/useAppDispatch",
  );
  return {
    ...actual,
    useAppDispatch: () => vi.fn(),
  };
});

vi.mock("../../modules/posts/slice", async () => {
  const actual: object = await vi.importActual("../../modules/posts/slice");
  return {
    ...actual,
    incrementPost: vi.fn(),
  };
});

describe("PostsResults", () => {
  it("should render correctly", () => {
    const initialMockedState = { posts: { displayedPosts: 10 } };

    renderWithProviders(<PostsResults children={childrenMock.children} />, {
      preloadedState: initialMockedState,
    });

    const firstPost = childrenMock.children[0].data;

    expect(
      screen.getByRole("heading", { level: 4, name: firstPost.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(firstPost.url)).toBeInTheDocument();
    expect(
      screen.getByText(
        (_, node) =>
          node?.textContent === `enviado há 1 horas por ${firstPost.author}`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ver mais posts" }),
    ).toBeInTheDocument();
  });

  it("should call incrementPost", async () => {
    const initialMockedState = { posts: { displayedPosts: 10 } };
    const user = userEvent.setup();

    renderWithProviders(<PostsResults children={childrenMock.children} />, {
      preloadedState: initialMockedState,
    });

    const seeMoreButton = screen.getByRole("button", {
      name: "Ver mais posts",
    });

    await user.click(seeMoreButton);

    expect(incrementPost).toHaveBeenCalledTimes(1);
  });
});
