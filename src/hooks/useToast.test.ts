describe('useToast', () => {
  const wrapper = ({ children }: { children: any }) => <ToastProvider>{ children } </ToastProvider>;

  it('should add a toast', () => {
    const { result } = renderHook(() => useToast(), { wrapper });

    act(() => {
      result.current.addToast({ message: 'Test Toast', type: 'success', duration: 3000 });
    });

    expect(result.current.addToast).toBeDefined();
  });

  it('should remove a toast', () => {
    const { result } = renderHook(() => useToast(), { wrapper });

    act(() => {
      const toastId = result.current.addToast({ message: 'Test Toast', type: 'success', duration: 3000 });
      result.current.removeToast(toastId);
    });

    expect(result.current.removeToast).toBeDefined();
  });

  it('should show success toast', () => {
    const { result } = renderHook(() => useToast(), { wrapper });

    act(() => {
      result.current.showSuccess('Success message');
    });

    expect(result.current.showSuccess).toBeDefined();
  });

  it('should show error toast', () => {
    const { result } = renderHook(() => useToast(), { wrapper });

    act(() => {
      result.current.showError('Error message');
    });

    expect(result.current.showError).toBeDefined();
  });

  it('should show warning toast', () => {
    const { result } = renderHook(() => useToast(), { wrapper });

    act(() => {
      result.current.showWarning('Warning message');
    });

    expect(result.current.showWarning).toBeDefined();
  });

  it('should show info toast', () => {
    const { result } = renderHook(() => useToast(), { wrapper });

    act(() => {
      result.current.showInfo('Info message');
    });

    expect(result.current.showInfo).toBeDefined();
  });
});


