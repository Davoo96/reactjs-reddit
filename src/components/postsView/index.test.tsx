import { describe, it } from "vitest";
import { renderWithProviders } from "../../__tests__/testUtils";
import PostsView from ".";

describe("Post", () => {
  it("should render correctly", () => {
    renderWithProviders(<PostsView />);
  });
});
