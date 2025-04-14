import { vi } from 'vitest';

// Mock fetch globally
global.fetch = vi.fn();

// Mock chrome API
global.chrome = {
  runtime: {
    getURL: vi.fn((path: string) => path)
  }
} as any;
