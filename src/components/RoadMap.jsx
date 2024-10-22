import CustomSVG from '../assets/Sylus.svg'; // Adjust the path to your SVG file

const RoadMap = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 mt-[100px] overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-16"
       style={{
        fontFamily: 'Barriecito',
      }}
      >Road Map</h1>

      {/* Custom SVG Background - larger size */}
      <div className="absolute inset-0 flex items-center justify-center top-0">
        <img src={CustomSVG} alt="Custom Background" className="w-full h-full object-cover opacity-50 scale-125" />
      </div>

      {/* Cards */}
      <div className="relative flex flex-col space-y-6 md:flex-row md:justify-between md:space-y-0 md:space-x-8 z-10">
        <div className="rounded-lg p-8 w-64 h-64 text-center flex flex-col items-center justify-center md:rotate-90 transform md:translate-y-[100px]">
          <h2 className="text-xl font-bold mb-4"
         style={{
          fontFamily: 'Montserrat Alternates'
        }}
          >Phase 4</h2>
          <p className="text-gray-600"
           style={{
            fontFamily: 'Kavivanar'
          }}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero?</p>
        </div>
        <div className="rounded-lg p-8 w-64 h-64 text-center flex flex-col items-center justify-center md:rotate-[80deg] transform md:translate-y-[85px]">
          <h2 className="text-xl font-bold mb-4"
         style={{
          fontFamily: 'Montserrat Alternates'
        }}
          >Phase 3</h2>
          <p className="text-gray-600"
           style={{
            fontFamily: 'Kavivanar'
          }}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iste.</p>
        </div>
        <div className="rounded-lg p-8 w-64 h-64 text-center flex flex-col items-center justify-center md:rotate-[70deg] transform md:translate-y-[55px]">
          <h2 className="text-xl font-bold mb-4"
          style={{
            fontFamily: 'Montserrat Alternates'
          }}
          >Phase 2</h2>
          <p className="text-gray-600"
           style={{
            fontFamily: 'Kavivanar'
          }}
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fuga!</p>
        </div>
        
      </div>
    </div>
  );
};

export default RoadMap;
