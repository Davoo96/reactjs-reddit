import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostNavigation from ".";

describe("PostNavigation", () => {
  it("should render correctly", () => {
    render(
      <PostNavigation
        onClickHot={() => {}}
        onClickNews={() => {}}
        onClickRising={() => {}}
        isDisabled={false}
      />,
    );

    expect(screen.getByRole("button", { name: "Hot" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "News" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Rising" })).toBeInTheDocument();
  });

  it("should call callback when button is clicked", async () => {
    const onClickHotSpy = vi.fn();
    const onClickNewsSpy = vi.fn();
    const onClickRisingSpy = vi.fn();

    const user = userEvent.setup();

    render(
      <PostNavigation
        onClickHot={onClickHotSpy}
        onClickNews={onClickNewsSpy}
        onClickRising={onClickRisingSpy}
        isDisabled={false}
      />,
    );

    const hotButton = screen.getByRole("button", { name: "Hot" });
    const newsButton = screen.getByRole("button", { name: "News" });
    const risingButton = screen.getByRole("button", { name: "Rising" });

    await user.click(hotButton);
    await user.click(newsButton);
    await user.click(risingButton);

    expect(onClickHotSpy).toHaveBeenCalledTimes(1);
    expect(onClickNewsSpy).toHaveBeenCalledTimes(1);
    expect(onClickRisingSpy).toHaveBeenCalledTimes(1);
  });
});
