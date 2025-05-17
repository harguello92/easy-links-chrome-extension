export const createUploadElement = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "json/*";
  input.style.display = "none";
  document.body.appendChild(input);

  return input;
};

export const removeUploadElement = (input: HTMLInputElement) => {
  document.body.removeChild(input);
};

export const handleFileUpload = (input: HTMLInputElement): Promise<File> => {
  return new Promise<File>((resolve, reject) => {
    input.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        resolve(file);
      } else {
        reject(new Error("No file selected"));
      }

      removeUploadElement(input);
    });

    input.click();
  });
};

export const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && event.target.result) {
        resolve(event.target.result as string);
      } else {
        reject(new Error("Failed to read file"));
      }
    };
    reader.onerror = () => {
      reject(new Error("Failed to read file"));
    };
    reader.readAsText(file);
  });
};

export const readFileAsJson = async (file: File): Promise<any> => {
  try {
    const fileContent = await readFileAsText(file);
    return JSON.parse(fileContent);
  } catch (error) {
    throw new Error("Failed to parse JSON");
  }
};
