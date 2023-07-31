import { render, screen } from "@testing-library/react";
import Post from ".";

describe("Post", () => {
  it("should render correctly", () => {
    render(
      <Post
        title="Post Teste"
        sentAt={1}
        userName="Batata_123"
        domain="dominio.io"
      />,
    );

    expect(
      screen.getByRole("heading", { level: 4, name: "Post Teste" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        (_, node) => node?.textContent === "enviado há 1 horas por Batata_123",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("dominio.io")).toBeInTheDocument();
  });
});
