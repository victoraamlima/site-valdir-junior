import { act, renderHook, waitFor } from "@testing-library/react";
import { useScrollY, getServerSnapshot } from "@/hooks/useScrollY";
// import getServerSnapshot from "@/hooks/useScrollY";

describe("useScrollY", () => {
  it("should return the initial scrollY value", () => {
    const { result } = renderHook(() => useScrollY());
    expect(result.current).toBe(0);
  });

  it("should update the scrollY value when scrolling", async () => {
    const { result } = renderHook(() => useScrollY());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => {
      expect(result.current).toBe(100);
    });
  });

  it("should unsubscribe from scroll event when unmounted", () => {
    const removeEventListenerMock = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useScrollY());
    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );

    removeEventListenerMock.mockRestore();
  });
  
  it("should return 0 as the server snapshot", () => {
    const serverSnapshot = getServerSnapshot();
    expect(serverSnapshot).toBe(0);
  });
});
