import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders vercel logo link", () => {
    render(<Home />);
    const heading = screen.getByRole("link", {
      name: /By Vercel Logo/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
