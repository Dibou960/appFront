// TabBar.js
import React from 'react';
import Tab from './Tab';

const TabBar = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex">
    {tabs.map((tab, index) => (
      <Tab
        key={index}
        label={tab.label}
        onClick={() => onChange(index)}
        isActive={index === activeTab}
      />
    ))}
  </div>
  );
};

export default TabBar;
