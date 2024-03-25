import React, { useState } from 'react';

const Reservation = () => {
  const [nom, setNom] = useState('');
  const [nombrePersonnes, setNombrePersonnes] = useState(1);
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données de réservation soumises:", { nom, nombrePersonnes, date, heure });
    setNom('');
    setNombrePersonnes(1);
    setDate('');
    setHeure('');
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Réservation</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">Nom :</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nombrePersonnes" className="block text-gray-700 font-bold mb-2">Nombre de personnes :</label>
            <input
              type="number"
              id="nombrePersonnes"
              value={nombrePersonnes}
              onChange={(e) => setNombrePersonnes(parseInt(e.target.value))}
              className="border border-gray-300 rounded-md p-2 w-full"
              min="1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date :</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="heure" className="block text-gray-700 font-bold mb-2">Heure :</label>
            <input
              type="time"
              id="heure"
              value={heure}
              onChange={(e) => setHeure(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Réserver</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
