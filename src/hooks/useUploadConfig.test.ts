import { renderHook, act } from "@testing-library/react-hooks";
import useUploadConfig from "./useUploadConfig";

describe("useUploadConfig", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useUploadConfig());

    expect(result.current.isUploading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it("should set isUploading to true when uploading a file", async () => {
    const { result } = renderHook(() => useUploadConfig());

    act(() => {
      result.current.uploadFile();
    });

    expect(result.current.isUploading).toBe(true);
  });

  it("should set error when no file is selected", async () => {
    const { result } = renderHook(() => useUploadConfig());

    act(() => {
      result.current.uploadFile();
    });

    expect(result.current.error).toBe("No file selected");
  });

  it("should set error when file upload fails", async () => {
    const { result } = renderHook(() => useUploadConfig());

    act(() => {
      result.current.uploadFile();
    });

    expect(result.current.error).toBe("Failed to upload file");
  });
});
