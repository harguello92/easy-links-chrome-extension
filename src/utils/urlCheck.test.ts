import { describe, it, expect, vi } from 'vitest';
import { checkUrlStatus } from './urlCheck';

describe('checkUrlStatus', () => {
  it('returns true for successful response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200
    });

    const result = await checkUrlStatus('https://test.com');
    expect(result).toBe(true);
  });

  it('returns false for failed response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500
    });

    const result = await checkUrlStatus('https://test.com');
    expect(result).toBe(false);
  });

  it('returns false for network errors', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    const result = await checkUrlStatus('https://test.com');
    expect(result).toBe(false);
  });

  it('handles timeout correctly', async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      new Promise(resolve => setTimeout(() => resolve({ ok: true }), 6000))
    );

    const result = await checkUrlStatus('https://test.com');
    expect(result).toBe(false);
  });
});
