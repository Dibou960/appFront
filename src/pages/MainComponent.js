import React, { useState } from 'react';
import { AcademicCapIcon, CalendarIcon, BellIcon } from '@heroicons/react/outline'; // Importing icons from Heroicons v1
import TabBar from '../components/TabBar';
import Reservation from '../components/Reservation';
import MenuDuJour from '../components/MenuDuJour';
import Notification from '../components/Notification';

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Menu du Jour', icon: <AcademicCapIcon className="w-6 h-6" /> },
    { label: 'Réservation', icon: <CalendarIcon className="w-6 h-6" /> },
    { label: 'Notification', icon: <BellIcon className="w-6 h-6" /> },
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const renderContenuOnglet = () => {
    switch (activeTab) {
      case 0:
        return <MenuDuJour />;
      
      case 1:
        return <Reservation />;
      case 2:
        return <Notification />;
      default:
        return null;
    }
  };

  return (
    <div className="main-component">
      <div className="contenu-onglet">
        {renderContenuOnglet()}
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 flex justify-around items-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center w-full h-full focus:outline-none ${
              index === activeTab ? 'text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => handleTabChange(index)}
          >
            {tab.icon}
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
