import Home from "@/pages";
import { render, screen } from "@testing-library/react";

describe("Index page", () => {
  it("should render without throwing an error", function () {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it("deve renderizar a imagem shape-control-04.png sem problemas", () => {
    render(<Home />);
    // const image = screen.getByRole("img", { name: /shape-control-04.png/i });
    const image = screen.getByAltText("Produto shape control e uma laranja moro");

    expect(image).toHaveAttribute("src", "/assets/images/shape-control-04.png");
  });
});
