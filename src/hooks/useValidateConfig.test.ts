import { renderHook, act } from "@testing-library/react";
import useValidateConfig from "./useValidateConfig";

describe("useValidateConfig", () => {
  it("should return an error for invalid JSON format", () => {
    const { result } = renderHook(() => useValidateConfig());

    act(() => {
      const isValid = result.current.validateConfig({} as any);
      expect(isValid).toBe(false);
      expect(result.current.error).toBe("Invalid JSON format. Expected an array.");
    });
  });

  it("should return an error for invalid service name", () => {
    const { result } = renderHook(() => useValidateConfig());

    act(() => {
      const isValid = result.current.validateConfig([{ links: [] }] as any);
      expect(isValid).toBe(false);
      expect(result.current.error).toBe("Invalid service name. Expected a string.");
    });
  });

  it("should return an error for invalid links format", () => {
    const { result } = renderHook(() => useValidateConfig());

    act(() => {
      const isValid = result.current.validateConfig([{ name: "Service", links: {} }] as any);
      expect(isValid).toBe(false);
      expect(result.current.error).toBe("Invalid links format. Expected an array.");
    });
  });

  it("should return an error for invalid link name", () => {
    const { result } = renderHook(() => useValidateConfig());

    act(() => {
      const isValid = result.current.validateConfig([{ name: "Service", links: [{ url: "https://example.com" }] }] as any);
      expect(isValid).toBe(false);
      expect(result.current.error).toBe("Invalid link name. Expected a string.");
    });
  });

  it("should return an error for invalid link URL", () => {
    const { result } = renderHook(() => useValidateConfig());

    act(() => {
      const isValid = result.current.validateConfig([{ name: "Service", links: [{ name: "Link", url: 123 }] }] as any);
      expect(isValid).toBe(false);
      expect(result.current.error).toBe("Invalid link URL. Expected a string.");
    });
  });

  it("should validate correct config data", () => {
    const { result } = renderHook(() => useValidateConfig());

    act(() => {
      const isValid = result.current.validateConfig([{
        name: "Service",
        links: [{
          name: "Link",
          url: "https://example.com"
        }]
      }]);

      expect(isValid).toBe(true);
      expect(result.current.error).toBe(null);
    });
  });
});
