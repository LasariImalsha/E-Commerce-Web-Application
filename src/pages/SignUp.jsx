import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/authSlice'; 
import BackgroundImage from '../assets/login/background.jpg'; 
import SideImage from '../assets/login/sideImage.jpeg'; 
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();  

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      // Dispatch the signUp action from Redux to store user data
      dispatch(signUp({ name: values.name, email: values.email, password: values.password }));
      alert('Signed Up Successfully');
      navigate('/signin'); 
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Background Image with Full Blur */}
      <div className="absolute inset-0 blur-sm bg-black/40 bg-center top-[58px] h-full backdrop-blur-sm" />

      {/* Form container */}
      <div className="relative w-full sm:w-11/12 lg:w-10/12 xl:w-8/12 flex rounded-lg overflow-hidden shadow-xl bg-black bg-opacity-5 backdrop-blur-lg">
        {/* Left Column - Image Section */}
        <div className="w-full sm:w-1/2 h-auto bg-cover bg-center  p-3">
          <img src={SideImage} className="w-full rounded-lg bg-cover h-auto" />
        </div>

        {/* Right Column - Form Section */}
        <div className="w-full sm:w-1/2 p-8">
          <h2 className="text-3xl text-center text-white font-bold mb-6">Sign Up</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-EcomBrown to-EcomDarkGray text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
