import { useWindowWidth, getServerSnapshot } from "@/hooks/useWindowWidth";
import { act, renderHook, waitFor } from "@testing-library/react";

describe("useWindowWidth", () => {
  it("should return the initial window width", () => {
    const { result } = renderHook(() => useWindowWidth());

    expect(result.current).toBe(1024);
  });

  it("should update the windowWidth value when resize", async () => {
    const { result } = renderHook(() => useWindowWidth());

    act(() => {
      window.innerWidth = 880;
      window.dispatchEvent(new Event("resize"));
    });

    await waitFor(() => {
      expect(result.current).toBe(880);
    });
  });

  it("should unsubscribe for resize event whe unmounted", () => {
    const removeEventListenerMock = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useWindowWidth());
    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );
  });

  it("should return 0 as the server snapshot", () => {
    const serverSnapshot = getServerSnapshot();
    expect(serverSnapshot).toBe(0);
  });
});
