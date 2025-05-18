import { renderHook } from "@testing-library/react";
import useDownloadConfig from "./useDownloadConfig";

describe('useDownloadConfig', () => {
  let downloadFileMock: jest.SpyInstance;
  let getConfigMock: jest.SpyInstance;

  beforeEach(() => {
    downloadFileMock = jest.spyOn(require('../utils/files'), 'downloadFile').mockImplementation(jest.fn());
    getConfigMock = jest.spyOn(require('../utils/localStorage'), 'getConfig').mockReturnValue({ key: 'value' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should download the config file', () => {
    const { result } = renderHook(() => useDownloadConfig());

    act(() => {
      result.current.downloadConfig();
    });

    expect(getConfigMock).toHaveBeenCalled();
    expect(downloadFileMock).toHaveBeenCalledWith('config.json', JSON.stringify({ key: 'value' }, null, 2));
  });

  it('should set error state on failure', () => {
    getConfigMock.mockImplementationOnce(() => { throw new Error('Failed to get config'); });

    const { result } = renderHook(() => useDownloadConfig());

    act(() => {
      result.current.downloadConfig();
    });

    expect(result.current.error).toBe('Failed to download file');
  });
})
