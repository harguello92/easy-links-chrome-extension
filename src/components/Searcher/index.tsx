import { CircleX, Search } from "lucide-react";
import { useState } from "preact/hooks";

interface SearcherProps {
  onSearch: (query: string) => void;
}

const Searcher = ({ onSearch }: SearcherProps) => {
  const [value, setValue] = useState('');

  const handleOnChange = (value: string) => {
    setValue(value);
    onSearch(value)
  }

  return <div className="w-full p-2 border border-gray-300 rounded-md flex items-center gap-2">
    <Search className="w-4 h-4 flex-[1_0_auto]" />
    <input
      type="text"
      onChange={(e) => handleOnChange(e.target.value)}
      value={value}
      className="w-full outline-none text-[16px]"
    />
    {value && <CircleX className="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer" onClick={() => handleOnChange('')} />}
  </div>;
};

export default Searcher;
