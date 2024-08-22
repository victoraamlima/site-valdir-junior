import useElementTop from "@/hooks/useElementTop";
import { renderHook } from "@testing-library/react";

describe("useElementTop", () => {
  it("should return the top offset of the element", () => {
    const elementId = "myElement";
    const elementTop = 100;

    document.getElementById = jest.fn().mockReturnValue({
      offsetTop: elementTop,
    });

    const { result } = renderHook(() => useElementTop(elementId));

    expect(result.current).toBe(elementTop);
  });

  it("should return 0 if the element is not found", () => {
    const elementId = "nonExistentElement";

    document.getElementById = jest.fn().mockReturnValue(null);

    const { result } = renderHook(() => useElementTop(elementId));

    expect(result.current).toBe(0);
  });
});
