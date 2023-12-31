import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useUserRole from "../../hooks/useUserRole";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { FaChalkboardTeacher, FaHome } from "react-icons/fa";
// import logo from '../../assets/siteLogo.png';

/* eslint-disable no-unused-vars */
const NavBar = () => {
  // const {user} = useContext(authContext);
  const { user, logOutUser, setUser } = useAuthContext();
  console.log(user);

  const handleLogOut = () => {
    logOutUser().then((res) => {
      setUser(null);
    });
  };
    console.log('user from navbar ',user);
    const {userRole} = useUserRole();
    console.log('user role from navbar   ',userRole);
  const navItems = (
    <>
      <li>
        <Link to='/'><FaHome/> Home</Link>
      </li>
      <li>
        <Link to='/instructors'><FaChalkboardTeacher/> Instructors</Link>
      </li>
      <li>
        <Link to='/classes'>Classes</Link>
      </li>
      <li>
        {
          userRole==='student' && <Link to="/studentDashboard"> <MdDashboard/> Dashboard</Link>
        }
        {
          userRole==='instructor' && <Link to='/instructorDashboard'><MdDashboardCustomize/> Dashboard</Link>
        }
        {
          userRole==='admin' && <Link to='/adminDashboard'><RiDashboardFill/> Dashboard</Link>
        }

      </li>
    </>
  );
  return (
    <div className="navbar bg-[#01a2a6] text-black font-semibold z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-4xl">
          Learn Lingo
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {/* Button here */}
        {user && (
          <img
            className="rounded-full mr-4 h-[70px] w-[70px]"
            src={`${user.photoURL}`}
          ></img>
        )}
        {!user ? (
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        ) : (
          <p className="btn btn-outline" onClick={handleLogOut}>
            LogOut
          </p>
        )}
      </div>
    </div>
  );
};

export default NavBar;
