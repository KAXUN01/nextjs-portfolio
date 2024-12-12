import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/main/Hero";

// Mock the HeroContent component
jest.mock("../components/sub/HeroContent", () => {
  return function MockHeroContent() {
    return <div data-testid="mock-hero-content">Mock Hero Content</div>;
  };
});

describe("Hero Component", () => {
  it("renders without crashing", () => {
    render(<Hero />);
    expect(screen.getByTestId("mock-hero-content")).toBeInTheDocument();
  });

  it("contains a video element with correct attributes", () => {
    const { container } = render(<Hero />);
    const videoElement = container.querySelector("video");

    expect(videoElement).toBeInTheDocument();

    // For boolean attributes in React, we need to check the property instead of the attribute
    expect(videoElement.autoplay).toBe(true);
    expect(videoElement.muted).toBe(true);
    expect(videoElement.loop).toBe(true);

    // Check if the video element contains all required classes
    const expectedClasses = [
      "rotate-180",
      "absolute",
      "top-[-340px]",
      "h-full",
      "w-full",
      "left-0",
      "object-cover",
      "z-5",
    ];

    expectedClasses.forEach((className) => {
      expect(videoElement).toHaveClass(className);
    });
  });

  it("has the correct video source", () => {
    const { container } = render(<Hero />);
    const sourceElement = container.querySelector("source");

    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute("src", "/blackhole.webm");
    expect(sourceElement).toHaveAttribute("type", "video/webm");
  });

  it("renders with correct container classes", () => {
    const { container } = render(<Hero />);
    const mainDiv = container.firstChild;

    expect(mainDiv).toHaveClass(
      "relative",
      "flex",
      "flex-col",
      "h-full",
      "w-full"
    );
  });
});
