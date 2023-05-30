import { render, screen } from "@testing-library/react";
import Button from "../button.component";

describe("Button Test Cases", () => {
  it("Test button render", () => {
    render(<Button>Test</Button>);
    const renderedBaseButton = screen.getByRole("button");
    expect(renderedBaseButton.textContent).toEqual("Test");
  });

  it("Test disabled button render", () => {
    render(<Button isLoading={true} />);
    const renderedBaseButton = screen.getByRole("button");
    expect(renderedBaseButton).toBeDisabled();
  });
});
