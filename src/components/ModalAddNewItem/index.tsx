import Modal from "../Modal";

interface ModalAddNewItemProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddNewItem = (props: ModalAddNewItemProps) => {
  return <Modal {...props}>
    <div className="p-6 space-y-6">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <div
          className="cursor-pointer"
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const file = e.dataTransfer?.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                try {
                  const config = JSON.parse(e.target?.result as string);
                  // Handle config parsing here
                } catch (err) {
                  console.error('Invalid JSON file');
                }
              };
              reader.readAsText(file);
            }
          }}
        >
          <p className="text-gray-500">Drag and drop your config file here</p>
          <p className="text-sm text-gray-400 mt-2">or</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Choose File
          </button>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium mb-4">Add Item Manually</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Links
            </label>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter URL"
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Add Link
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  </Modal >
};

export default ModalAddNewItem;
