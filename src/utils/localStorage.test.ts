import { saveConfig, getConfig, clearConfig } from "./localStorage";
import { Config } from "../types";

describe("Database Utility Functions", () => {
  const testConfig: Config = [
    {
      name: "Test Service",
      links: [
        { name: "Test Link", url: "https://example.com" }
      ]
    }
  ];

  beforeEach(() => {
    clearConfig();
  });

  it("should save and retrieve config from localStorage", () => {
    saveConfig(testConfig);
    const retrievedConfig = getConfig();
    expect(retrievedConfig).toEqual(testConfig);
  });

  it("should return an empty array if no config is saved", () => {
    const retrievedConfig = getConfig();
    expect(retrievedConfig).toEqual([]);
  });

  it("should clear the config from localStorage", () => {
    saveConfig(testConfig);
    clearConfig();
    const retrievedConfig = getConfig();
    expect(retrievedConfig).toEqual([]);
  });
});
