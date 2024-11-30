import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`);
    };

    return (
        <>
            {/* Fixed Navbar */}
            <div className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex items-center justify-between py-4 px-6 ">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold">
                        Recipe Sharing App
                    </NavLink>

                    {/* Navigation Links */}
                    <div className="flex space-x-6">
                        <NavLink
                            to="/category/indian"
                            className="hover:text-gray-300"
                            style={({ isActive }) => ({
                                color: isActive ? '#52D0D5' : '', // Apply active color to the "Indian" link
                                fontWeight: isActive ? 'bold' : '',
                            })}
                        >
                            Indian
                        </NavLink>
                        <NavLink
                            to="/category/american"
                            className="hover:text-gray-300"
                            style={({ isActive }) => ({
                                color: isActive ? '#E44C64' : '',
                                fontWeight: isActive ? 'bold' : '',
                            })}
                        >
                            American
                        </NavLink>
                        <NavLink
                            to="/category/british"
                            className="hover:text-gray-300"
                            style={({ isActive }) => ({
                                color: isActive ? '#60a5fa' : '',
                                fontWeight: isActive ? 'bold' : '',
                            })}
                        >
                            British
                        </NavLink>
                        <NavLink
                            to="/category/chinese"
                            className="hover:text-gray-300"
                            style={({ isActive }) => ({
                                color: isActive ? '#A2715F' : '',
                                fontWeight: isActive ? 'bold' : '',
                            })}
                        >
                            Chinese
                        </NavLink>
                        <NavLink
                            to="/category/thai"
                            className="hover:text-gray-300"
                            style={({ isActive }) => ({
                                color: isActive ? '#B9D3F2' : '',
                                fontWeight: isActive ? 'bold' : '',
                            })}
                        >
                            Thai
                        </NavLink>
                    </div>

                    {/* Search Bar */}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="py-2 px-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </form>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-20">
                {/* Main content goes here */}
            </div>
        </>
    );
};

export default Navbar;
