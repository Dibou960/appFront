import React from 'react';

const Tab = ({ label, onClick, isActive }) => {
  return (
    <div
    className={`px-4 py-2 cursor-pointer ${isActive ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
    onClick={onClick}
  >
    {label}
  </div>
  );
};

export default Tab;
