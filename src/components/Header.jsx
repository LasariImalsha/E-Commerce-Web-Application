import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import FavoritesList from "../components/FavouritesList"; 
import Logo from '../assets/favicon.png'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorites.items);

  const [showFavorites, setShowFavorites] = useState(false); 

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/"); 
  };

  
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("User is not authenticated.");
    }
  }, [isAuthenticated]);

  return (
    <header className="bg-[#e0e0e0] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">

        <Link to="/" className="text-black text-xl font-semibold">
          <div className="flex flex-row gap-x-1">
            <img className="w-9 h-7" src={Logo}></img>
            <span className="text-EcomBrown">Modish</span>
          </div>
        </Link>

        <div className="flex items-center space-x-6 relative">
          {!isAuthenticated ? (
            <>
              <Link to="/signup" className="text-EcomBrown hover:text-EcomLightGray">
                Join Us
              </Link>
              <span className="text-EcomBrown">|</span>
              <Link to="/signin" className="text-EcomBrown hover:text-EcomLightGray">
                Sign In
              </Link>
            </>
          ) : (
            <>

              <Link to="/shopping" className="text-EcomBrown hover:text-EcomLightGray relative">
                <i className="fas fa-store"></i> {/* Cart Icon */}
              </Link>

              <button
                onClick={() => setShowFavorites(!showFavorites)} // Toggle the favorite list visibility
                className="text-EcomBrown hover:text-red-500"
              >
                <i className="fas fa-heart"></i> {/* Heart Icon */}
              </button>

              {showFavorites && <FavoritesList favorites={favorites} />} 

              
              <Link to="/cart" className="text-EcomBrown hover:text-EcomLightGray relative">
                <i className="fas fa-shopping-bag"></i> {/* Cart Icon */}

                {cartItems.length > 0 && (
                  <span className="absolute top-0 left-2 text-white bg-red-500 rounded-full px-1 py-0.5 text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              
              <button onClick={handleLogout} className="text-EcomBrown hover:text-EcomLightGray">
                <i className="fas fa-sign-out-alt"></i> {/* Logout Icon */}
              </button>
            </>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
