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

    expect(
      screen.getByRole("button", { name: "Hot posts" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "News posts" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Rising posts" }),
    ).toBeInTheDocument();
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

    const hotButton = screen.getByRole("button", { name: "Hot posts" });
    const newsButton = screen.getByRole("button", { name: "News posts" });
    const risingButton = screen.getByRole("button", { name: "Rising posts" });

    await user.click(hotButton);
    await user.click(newsButton);
    await user.click(risingButton);

    expect(onClickHotSpy).toHaveBeenCalledTimes(1);
    expect(onClickNewsSpy).toHaveBeenCalledTimes(1);
    expect(onClickRisingSpy).toHaveBeenCalledTimes(1);
  });
});
