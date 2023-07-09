import {Navigate,  useLocation, Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequiredAuth = () => {

    const auth = useAuth();
    const location = useLocation();

    console.log("required auth")
    return (!auth.user
        ? <Outlet/>
        : <Navigate to="/login" state={{from: location}} replace={true}/>
    )
}

export default RequiredAuth;