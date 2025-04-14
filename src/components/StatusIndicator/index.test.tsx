import { render, screen } from '@testing-library/preact';
import { describe, it, expect, vi } from 'vitest';
import StatusIndicator from '../index';
import { checkUrlStatus } from '../../../utils/urlCheck';

// Mock the urlCheck utility
vi.mock('../../../utils/urlCheck', () => ({
  checkUrlStatus: vi.fn()
}));

describe('StatusIndicator', () => {
  it('renders loading state initially', () => {
    render(<StatusIndicator urls={['https://test.com']} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows red indicator when all services are down', async () => {
    vi.mocked(checkUrlStatus).mockResolvedValue(false);
    render(<StatusIndicator urls={['https://test1.com', 'https://test2.com']} />);

    // Wait for loading to complete
    await new Promise(resolve => setTimeout(resolve, 1600));

    const indicator = screen.getByRole('status');
    expect(indicator).toHaveClass('bg-red-700');
  });

  it('shows yellow indicator when half of services are up', async () => {
    vi.mocked(checkUrlStatus).mockImplementation(url =>
      Promise.resolve(url === 'https://test1.com')
    );
    render(<StatusIndicator urls={['https://test1.com', 'https://test2.com']} />);

    await new Promise(resolve => setTimeout(resolve, 1600));

    const indicator = screen.getByRole('status');
    expect(indicator).toHaveClass('bg-yellow-600');
  });

  it('shows green indicator when all services are up', async () => {
    vi.mocked(checkUrlStatus).mockResolvedValue(true);
    render(<StatusIndicator urls={['https://test1.com', 'https://test2.com']} />);

    await new Promise(resolve => setTimeout(resolve, 1600));

    const indicator = screen.getByRole('status');
    expect(indicator).toHaveClass('bg-green-600');
  });
});
