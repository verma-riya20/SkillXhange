import { useContext, useEffect, useRef } from "react";
import { AuthContext } from '../context/AuthContext';
import toast from "react-hot-toast";

const PrivateRoute = ({ component }) => {
  const { user, checkingAuth } = useContext(AuthContext);
  const toastShown = useRef(false);

  useEffect(() => {
    if (!checkingAuth && !user && !toastShown.current) {
      toast.error("Please log in to access this page.");
      toastShown.current = true;
    }
  }, [checkingAuth, user]);

  if (checkingAuth) return null; // don't render anything yet

  return user ? component : null;
};

export default PrivateRoute;





