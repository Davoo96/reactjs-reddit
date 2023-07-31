import { screen } from "@testing-library/react";
import PostsResults from ".";
import { childrenMock } from "../../__tests__/mocks/posts";
import { renderWithProviders } from "../../__tests__/testUtils";

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
  });
});
