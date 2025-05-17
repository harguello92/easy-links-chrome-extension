import { renderHook, act } from "@testing-library/react";
import usePersistFile from "./usePersistFile";

describe("usePersistFile", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => usePersistFile());

    expect(result.current.error).toBe(null);
  });

  it("should set error to null when persistFile is called", () => {
    const { result } = renderHook(() => usePersistFile());

    act(() => {
      result.current.persistFile({} as any);
    });

    expect(result.current.error).toBe(null);
  });

  it("should set error when file upload fails", () => {
    const { result } = renderHook(() => usePersistFile());

    act(() => {
      result.current.persistFile({} as any);
    });

    expect(result.current.error).toBe("Failed to upload file");
  });
});
