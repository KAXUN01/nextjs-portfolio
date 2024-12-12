import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For additional matchers like toBeInTheDocument
import Navbar from "../components/main/Navbar";

test("renders Navbar component", () => {
  render(<Navbar />);
});

test("renders all desktop navigation links", () => {
  render(<Navbar />);

  const aboutLink = screen.getByRole("link", { name: /About me/i });
  const educationLink = screen.getByRole("link", { name: /Education/i });
  const projectsLink = screen.getByRole("link", { name: /Projects/i });
  const contactLink = screen.getByRole("link", { name: /Contact me/i });
  const blogLink = screen.getByRole("link", { name: /Blog/i });

  expect(aboutLink).toBeInTheDocument();
  expect(educationLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(blogLink).toBeInTheDocument();
});

test("renders all links in mobile menu when opened", () => {
  render(<Navbar />);
  const burgerButton = screen.getByRole("button");
  fireEvent.click(burgerButton);

  const links = screen.getAllByRole("link");

  links.forEach((link) => {
    expect(link).toBeVisible();
  });
});

test("burger menu is visible on mobile view", () => {
  render(<Navbar />);
  const burgerButton = screen.getByRole("button");

  expect(burgerButton).toBeInTheDocument();
});

test("toggles mobile menu when burger button is clicked", () => {
  render(<Navbar />);
  const burgerButton = screen.getByRole("button");

  fireEvent.click(burgerButton);

  const mobileMenuLinks = screen.getAllByRole("link");

  mobileMenuLinks.forEach((link) => {
    expect(link).toBeVisible();
  });
});
