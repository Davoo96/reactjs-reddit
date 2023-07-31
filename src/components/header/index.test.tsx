import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from ".";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: (_, node) => node?.textContent === "ReactJS",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Trocar de tema" }),
    ).toBeInTheDocument();
  });

  it("should change local storage theme", async () => {
    const localStorageSpy = vi.spyOn(localStorage.__proto__, "setItem");
    const user = userEvent.setup();

    render(<Header />);

    const themButton = screen.getByRole("button", { name: "Trocar de tema" });

    expect(localStorageSpy).toHaveBeenCalledWith("theme", "light");

    await user.click(themButton);

    expect(localStorageSpy).toHaveBeenCalledWith("theme", "dark");

    await user.click(themButton);

    expect(localStorageSpy).toHaveBeenCalledWith("theme", "light");
  });
});
