import ImageDrop from "../ImageDrop";
import Modal from "../Modal";

interface ModalAddNewItemProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddNewItem = (props: ModalAddNewItemProps) => {
  return <Modal {...props}>
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
          <ul className="flex gap-2">
            <li>
              lINK 1
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full cursor-pointer"
        >
          Add Item
        </button>
      </div>
    </form>
  </Modal >
};

export default ModalAddNewItem;
