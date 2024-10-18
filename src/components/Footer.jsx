import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return ( 
    <footer id='contact' className="py-6 mt-[500px] sm:mt-0 md:mt-[400px]">
      <div className="flex justify-center items-center space-x-8">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-2xl bg-white p-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 shadow-lg"
        >
          <FaFacebookF />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-2xl bg-white p-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 shadow-lg"
        >
          <FaTwitter />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-2xl bg-white p-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 shadow-lg"
        >
          <FaInstagram />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-2xl bg-white p-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 hover:scale-110 shadow-lg"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
