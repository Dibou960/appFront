import React from "react";

const MenuDuJour = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96 lg:w-full">
        <h2 className="text-3xl font-bold mb-4">Menu du Jour</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 flex justify-center">
              Petit Déjeuner :
            </h3>
            <div className="lg:pr-2 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:border-r-4 lg:border-black">
              <img
                src="https://via.placeholder.com/150"
                alt="Thiakry"
                className="mb-2"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Pain français"
                className="mb-2"
              />
              <img src="https://via.placeholder.com/150" alt="Bissap" />
              <img src="https://via.placeholder.com/150" alt="Bissap" />
              <img src="https://via.placeholder.com/150" alt="Bissap" />
              <img src="https://via.placeholder.com/150" alt="Bissap" />
              <img src="https://via.placeholder.com/150" alt="Bissap" />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 flex justify-center">
              Déjeuner :
            </h3>
            <div className="lg:pr-2 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:border-r-4 lg:border-black">
              <img
                src="https://via.placeholder.com/150"
                alt="Yassa poulet"
                className="mb-2"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Riz blanc"
                className="mb-2"
              />
              <img src="https://via.placeholder.com/150" alt="Salade verte" />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 flex justify-center">
              Dîner :
            </h3>
            <div className="lg:pr-2 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:border-r-4 lg:border-black">
              <img
                src="https://via.placeholder.com/150"
                alt="Thieboudienne"
                className="mb-2"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Légumes"
                className="mb-2"
              />
              <img src="https://via.placeholder.com/150" alt="Sauce rouge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDuJour;
