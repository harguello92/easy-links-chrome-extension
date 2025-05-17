import { renderHook } from "@testing-library/react";
import useJSONReadFile from "./useJSONReadFile";

describe("useJSONReadFile", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useJSONReadFile());

    expect(result.current.jsonData).toBe(null);
    expect(result.current.error).toBe(null);
  });

  it("should read a valid JSON file", async () => {
    const { result } = renderHook(() => useJSONReadFile());

    const file = new Blob([JSON.stringify({ name: "Test" })], { type: "application/json" });
    const fileList = [new File([file], "test.json")];

    act(() => {
      result.current.readFile(fileList);
    });

    expect(result.current.jsonData).toEqual({ name: "Test" });
    expect(result.current.error).toBe(null);
  });

  it("should set error for invalid JSON format", async () => {
    const { result } = renderHook(() => useJSONReadFile());

    const file = new Blob(["Invalid JSON"], { type: "application/json" });
    const fileList = [new File([file], "test.json")];

    act(() => {
      result.current.readFile(fileList);
    });

    expect(result.current.jsonData).toBe(null);
    expect(result.current.error).toBe("Invalid JSON format");
  });

  it("should set error when no file is selected", async () => {
    const { result } = renderHook(() => useJSONReadFile());

    act(() => {
      result.current.readFile([]);
    });

    expect(result.current.jsonData).toBe(null);
    expect(result.current.error).toBe("No file selected");
  });
});
