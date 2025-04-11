import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const PrivateRoute = ({ component }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const toastShown = useRef(false); // 👈 remember if toast already shown

  useEffect(() => {
    if (!user && !toastShown.current) {
      toast.error("Please log in to access this page.");
      toastShown.current = true;
    }
  }, [user]);

  return user ? component : null;
};

export default PrivateRoute;




