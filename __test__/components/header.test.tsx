import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
  it("should render without throwing an error", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
