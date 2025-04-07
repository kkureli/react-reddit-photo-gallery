import { renderHook, act } from "@testing-library/react";
import useHomeHook from "../src/pages/HomePage/useHomeHook";
import { useNavigate } from "react-router-dom";

// mock navigate
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("useHomeHook", () => {
  it("should initialize with default state", () => {
    const { result } = renderHook(() => useHomeHook());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.images).toEqual([]);
    expect(result.current.searchInput).toBe("");
    expect(result.current.isFetchingMore).toBe(false);
  });

  it("should update searchInput when setSearchInput is called", () => {
    const { result } = renderHook(() => useHomeHook());

    act(() => {
      result.current.setSearchInput("test");
    });

    expect(result.current.searchInput).toBe("test");
  });

  it("should handle search input less than 3 characters", () => {
    const { result } = renderHook(() => useHomeHook());

    act(() => {
      result.current.handleSearch("ab");
    });

    expect(result.current.images).toEqual([]);
  });

  it("should handle onClickCard navigation", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { result } = renderHook(() => useHomeHook());

    const mockCard = { id: "1", ups: 10 };

    act(() => {
      result.current.onClickCard(mockCard);
    });

    expect(mockNavigate).toHaveBeenCalledWith("/photo/1", {
      state: { card: mockCard },
    });
  });
});
