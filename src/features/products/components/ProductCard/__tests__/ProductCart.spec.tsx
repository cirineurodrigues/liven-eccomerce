/* eslint-disable @typescript-eslint/no-var-requires */

import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";
import ProductCard from "..";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

const productMock = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

describe("ProductCard Test Suite", () => {
  it("haha", () => {
    renderWithProviders(<ProductCard product={productMock} />);
    const defaultImage = screen.getAllByAltText(/Your perfect/);
    expect(defaultImage).toHaveAttribute("src", /default-image.svg/);
  });
});
