import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Shopping from './pages/Shop';
import Cart from './pages/Cart'
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

function App() {
  return (
    <div className="App">
      <AuthProvider> {/* Wrap your app with AuthProvider */}
        <Router>
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/shopping" element={<Shopping />} /> {/* Add Shopping route */}
              <Route path="/cart" element={<Cart/>} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
