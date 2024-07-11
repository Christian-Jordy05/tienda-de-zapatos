import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // VARIABLE QUE GUARDAR EL NOMBRE DEL ADMIN
  const admin = localStorage.getItem('Admin');

  // AQUI HAGO UN IF SI EL ADMIN ES DISTINTO MUESTRE LA PAG DE ERROR PERO SI NO ES DISTINTO ENTONCES QUE LO DEJE PASAR A LA PAG PRIVADA
  if (!admin) {
    return <Navigate to="/error"/>;
  }

  return children;
};

export default PrivateRoute;