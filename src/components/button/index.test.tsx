import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";
import { ButtonTypes } from "./types";

describe("Button", () => {
  it("should render correctly with isActive prop", () => {
    render(
      <Button
        title="Teste"
        onClick={() => {}}
        type={ButtonTypes.DEFAULT}
        isActive
        icon
        ariaLabel="Teste"
      />,
    );

    expect(screen.getByRole("button", { name: "Teste" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Teste" })).toHaveClass(
      "bg-primary",
    );
  });

  it("should render the correct class when the button is not active", () => {
    render(
      <Button
        title="Teste"
        onClick={() => {}}
        type={ButtonTypes.DEFAULT}
        ariaLabel="Teste"
      />,
    );

    expect(screen.getByRole("button", { name: "Teste" })).toHaveClass(
      "bg-gray-gray",
    );
  });

  it("should call onClick when button is clicked", async () => {
    const onClickSpy = vi.fn();
    const user = userEvent.setup();

    render(
      <Button
        title="Teste"
        onClick={onClickSpy}
        type={ButtonTypes.DEFAULT}
        ariaLabel="Teste"
      />,
    );

    const button = screen.getByRole("button", { name: "Teste" });

    await user.click(button);

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when isDisabled is true", () => {
    render(
      <Button
        title="Teste"
        onClick={() => {}}
        type={ButtonTypes.DEFAULT}
        isDisabled
        ariaLabel="Teste"
      />,
    );

    expect(screen.getByRole("button", { name: "Teste" })).toBeDisabled();
  });
});
