import { useState } from "react";

const Dropdown = ({ DropdownValue, name, setFun ,value }) => {
  const options = [
    { label: "Public", value: true },
    { label: "Private", value: false }
  ];
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <label className="block text-medium  font-medium text-gray-700">{name}</label>

      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 px-4 py-2 w-36 bg-gray-800 text-white rounded-md focus:outline-none"
      >
        {DropdownValue ? "Public" : "Private"}
      </button>

     
      {isOpen && (
        <div className="absolute mt-2 w-36 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                // setFun(option.value);
                setFun({...value,[name]:option.value})
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 focus:bg-gray-300"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
