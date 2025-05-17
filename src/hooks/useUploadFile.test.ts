import { renderHook, act } from "@testing-library/react-hooks";
import useUploadFile from "./useUploadFile";

describe("useUploadFile", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useUploadFile());

    expect(result.current.isUploading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it("should set isUploading to true when uploading a file", async () => {
    const { result } = renderHook(() => useUploadFile());

    act(() => {
      result.current.uploadFile();
    });

    expect(result.current.isUploading).toBe(true);
  });

  it("should set error when no file is selected", async () => {
    const { result } = renderHook(() => useUploadFile());

    act(() => {
      result.current.uploadFile();
    });

    expect(result.current.error).toBe("No file selected");
  });

  it("should set error when file upload fails", async () => {
    const { result } = renderHook(() => useUploadFile());

    act(() => {
      result.current.uploadFile();
    });

    expect(result.current.error).toBe("Failed to upload file");
  });
});
