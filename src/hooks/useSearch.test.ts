import { renderHook, act } from "@testing-library/react";
import useSearch from "./useSearch";

describe("useSearch", () => {
  const initialData = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Alice Johnson", age: 35 },
  ];

  const filterAttributes = ["name"];

  it("should initialize with initial data", () => {
    const { result } = renderHook(() => useSearch(initialData, filterAttributes));

    expect(result.current.data).toEqual(initialData);
  });

  it("should filter data based on search query", () => {
    const { result } = renderHook(() => useSearch(initialData, filterAttributes));

    act(() => {
      result.current.onSearch("Jane");
    });

    expect(result.current.data).toEqual([{ name: "Jane Smith", age: 25 }]);
  });

  it("should return empty array when no matches found", () => {
    const { result } = renderHook(() => useSearch(initialData, filterAttributes));

    act(() => {
      result.current.onSearch("Nonexistent");
    });

    expect(result.current.data).toEqual([]);
  });
});
