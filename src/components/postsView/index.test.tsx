import { screen } from "@testing-library/react";
import PostsView from ".";
import { childrenMock } from "../../__tests__/mocks/posts";
import { renderWithProviders } from "../../__tests__/testUtils";
import userEvent from "@testing-library/user-event";
import { clearPosts } from "../../modules/posts/slice";

const mockUseGetPostsByCategoryQuery = vi.fn();

vi.mock("../../config/reactJsApi", async () => {
  const actual: object = await vi.importActual("../../config/reactJsApi");
  return {
    ...actual,
    useGetPostsByCategoryQuery: () => mockUseGetPostsByCategoryQuery(),
  };
});

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
    clearPosts: vi.fn(),
  };
});

describe("Post", () => {
  afterEach(() => vi.clearAllMocks());

  it("should render correctly", async () => {
    mockUseGetPostsByCategoryQuery.mockReturnValueOnce({
      isLoading: false,
      data: childrenMock,
      error: null,
      isFetching: false,
      isError: false,
    });
    const initialMockedState = { posts: { displayedPosts: 10 } };

    renderWithProviders(<PostsView />, { preloadedState: initialMockedState });

    expect(screen.getByRole("button", { name: "Hot" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "News" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Rising" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: "Titulo 1" }),
    ).toBeInTheDocument();
  });

  it("should render loading state correctly", async () => {
    mockUseGetPostsByCategoryQuery.mockReturnValueOnce({
      isLoading: true,
      data: null,
      error: null,
      isFetching: false,
      isError: false,
    });
    const initialMockedState = { posts: { displayedPosts: 10 } };

    renderWithProviders(<PostsView />, { preloadedState: initialMockedState });

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render error state correctly", async () => {
    mockUseGetPostsByCategoryQuery.mockReturnValueOnce({
      isLoading: true,
      data: null,
      error: "Oh no deu ruim!",
      isFetching: false,
      isError: true,
    });
    const initialMockedState = { posts: { displayedPosts: 10 } };

    renderWithProviders(<PostsView />, { preloadedState: initialMockedState });

    expect(screen.getByText("oh no deu ruim!")).toBeInTheDocument();
  });

  it.each([
    { buttonName: "Hot" },
    { buttonName: "News" },
    { buttonName: "Rising" },
  ])("should render call app dispatch correctly", async ({ buttonName }) => {
    mockUseGetPostsByCategoryQuery.mockReturnValue({
      isLoading: false,
      data: childrenMock,
      error: null,
      isFetching: false,
      isError: false,
    });
    const initialMockedState = { posts: { displayedPosts: 10 } };
    const user = userEvent.setup();

    renderWithProviders(<PostsView />, { preloadedState: initialMockedState });

    const newsButton = screen.getByRole("button", { name: buttonName });

    await user.click(newsButton);

    expect(clearPosts).toHaveBeenCalledTimes(1);
  });
});
