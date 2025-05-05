import { createUploadElement, removeUploadElement } from "./fileUpload";

describe('File Upload', () => {
  let input: HTMLInputElement;

  beforeEach(() => {
    input = createUploadElement();
  });

  afterEach(() => {
    removeUploadElement(input);
  });

  it('should create an upload element', () => {
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input.type).toBe('file');
    expect(input.accept).toBe('image/*');
    expect(input.style.display).toBe('none');
  });

  it('should handle file upload', () => {
    const mockFile = new File([''], 'test.png', { type: 'image/png' });

    const onFileSelected = jest.fn();

    input.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        onFileSelected(file);
      }

      removeUploadElement(input);
    });

    input.dispatchEvent(new Event('change', { bubbles: true }));

    expect(onFileSelected).toHaveBeenCalledWith(mockFile);
  });
});
