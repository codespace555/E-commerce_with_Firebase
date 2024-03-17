import React, { useId } from "react";

function Select({ option, label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div>
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      <select
        {...props}
        ref={ref}
        id={id}
        className={`{'px-3 py-2 rounded-lg bg-white
text-black outline-none focus:bg-gray-50
duration-200 border border-gray-200 w-full ${className}`}
      >
        {option?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);