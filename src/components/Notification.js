import React from 'react';

const Notification = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold mb-4">Notification</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Nouvelle Notification :</h3>
          <p>Vous avez reçu un nouveau message de confirmation de réservation.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Prochaine Réservation :</h3>
          <p>Votre prochaine réservation est prévue pour demain à 19h00.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Rappel :</h3>
          <p>N'oubliez pas de confirmer votre réservation pour ce soir avant 18h00.</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
