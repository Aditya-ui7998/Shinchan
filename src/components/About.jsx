import Shinchan from '../assets/MiddleChan.jpeg'; 

const About = () => {
  return (
    <div id='about' className="w-[90%] h-auto lg:h-[70vh] xl:h-[80vh] m-auto rounded-lg flex flex-col lg:flex-row items-center p-6 lg:p-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <img 
          src={Shinchan} 
          alt="Shinchan character" 
          className="w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] lg:w-[500px] lg:h-[500px] object-cover rounded-full border-4 border-gray-400 shadow-md mt-[90px]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start px-4 lg:px-8  md:mt-[100px]">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center lg:text-left">
          About Our Trading Platform
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 mt-5 lg:mt-10 text-center lg:text-left"
         style={{
            fontFamily: 'Montserrat Alternates'
          }}
        >
          Decentralized Crypto Trading <br/>
          Platform
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 mb-4 mt-4 lg:mt-6 text-center lg:text-left font-semibold"
        style={{
            fontFamily: 'Suse'
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum voluptatibus praesentium mollitia nobis ullam in animi, autem fugit officiis delectus totam vero commodi temporibus reiciendis hic id facere fugiat voluptatum!
        </p>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 text-center lg:text-left font-semibold"
        style={{
            fontFamily: 'Suse'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae velit temporibus obcaecati minima consectetur, odio tenetur necessitatibus recusandae qui fugit reiciendis inventore illo vel odit nemo neque maiores! Beatae? 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit maiores magni asperiores libero deserunt harum corrupti iusto, possimus fuga.
        </p>
      </div>
    </div>
  );
};

export default About;
