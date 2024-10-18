import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between p-6">
            <div className="text-xl font-bold text-black" style={{ fontFamily: 'Barriecito' }}>
                My Website
            </div>
            <div className="hidden md:flex space-x-8" style={{ fontFamily: 'Barriecito' }}>
                <a href="#home" className="text-black hover:text-black hover:underline hover:underline-black">Home</a>
                <a href="#about" className="text-black hover:text-black hover:underline hover:underline-black">About</a>
                <a href="#roadmap" className="text-black hover:text-black hover:underline hover:underline-black">Roadmap</a>
                <a href="#tokens" className="text-black hover:text-black hover:underline hover:underline-black">Token</a>
                <a href="#contact" className="text-black hover:text-black hover:underline hover:underline-black">Contact</a>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-16 right-0 w-48 bg-white rounded-lg shadow-lg md:hidden">
                    <div className="flex flex-col p-4 space-y-2">
                        <a href="#home" className="text-black hover:text-black hover:underline hover:underline-black">Home</a>
                        <a href="#about" className="text-black hover:text-black hover:underline hover:underline-black">About</a>
                        <a href="#roadmap" className="text-black hover:text-black hover:underline hover:underline-black">Roadmap</a>
                        <a href="#features" className="text-black hover:text-black hover:underline hover:underline-black">Token</a>
                        <a href="#contact" className="text-black hover:text-black hover:underline hover:underline-black">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
