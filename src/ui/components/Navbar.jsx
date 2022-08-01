import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

    const {authState,logout}=useContext(AuthContext);
    const name=authState.user?.name;
    // console.log(authState.user?.name);

    const navigate = useNavigate();

    const onLogOut = () => {
        navigate('/login',{
            replace:true,
        });
        logout();
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            {/* <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link> */}

            <div className="navbar-collapse ">
                <div className="navbar-nav mx-4">

                    <NavLink 
                        className={({isActive})=>

                            `nav-item nav-link ${isActive? 'active':'' }`
                        }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                       className={({isActive})=>
                            `nav-item nav-link ${isActive? 'active':'' }`
                        }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                       className={({isActive})=>
                            `nav-item nav-link ${isActive? 'active':'' }`
                        }
                        to="/heroSearch"
                    >
                        Search...
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  <span className="nav-item nav-link text-primary">
                    {name}
                  </span>
                  <button 
                  onClick={onLogOut}
                  className="nav-item nav-link btn">
                        LogOut
                  </button>
                </ul>
            </div>
        </nav>
    )
}