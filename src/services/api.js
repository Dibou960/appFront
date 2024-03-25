import ENVIRONMENT from '../environments/environment.dev';

const BASE_URL = ENVIRONMENT.BASE_URL;

export const getEmployes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/employes`); // Utilisation de BASE_URL ici
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données des employés');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getEmployes;
