import Card1 from '../assets/Shinchan ♥️.jpeg';
import Card2 from '../assets/124191d2-4dee-4af6-a1c2-bd7f9119a72f.jpeg';
import Card3 from '../assets/Shinchan.jpeg';

const Tokens = () => {
  return (
    <div id='tokens' className="w-[90%] h-auto lg:h-[65vh] m-auto rounded-lg p-6  flex flex-col items-center gap-5 md:mt-[100px]">
      <h4 className="text-xl sm:text-2xl lg:text-3xl" style={{ fontFamily:'Suse' }}>
        How To Start
      </h4>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center" style={{ fontFamily:'Montserrat Alternates' }}>
        How To Buy Tokens
      </h1>
      <h5 className="text-center text-sm sm:text-base lg:text-lg font-semibold max-w-3xl" style={{ fontFamily:'Montserrat Alternates' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam fuga eius reiciendis, <br/> error aut temporibus perspiciatis expedita minima. Aliquid.
      </h5>

      <div className="w-full h-auto lg:h-[70%] flex flex-col lg:flex-row items-center justify-between p-7 gap-8 lg:gap-5">
        {/* Card 1 */}
        <div className="w-full lg:w-[30%] h-full flex flex-col items-center gap-2">
          <div className="w-full h-[200px] flex items-center justify-center mb-5">
            <img src={Card1} alt="" className="w-auto h-[150px] sm:h-[200px] border-4 border-black object-cover"/>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center" style={{ fontFamily:'Montserrat Alternates' }}>
            Register New Account
          </h2>
          <p className="text-center text-sm sm:text-base lg:text-lg font-semibold max-w-xs lg:max-w-sm" style={{ fontFamily:'Montserrat Alternates' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a officiis doloribus culpa dignissimos enim laboriosam possimus. Odit, voluptas id?
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-[30%] h-full flex flex-col items-center gap-2">
          <div className="w-full h-[200px] flex items-center justify-center mb-5">
            <img src={Card2} alt="" className="w-auto h-[150px] sm:h-[200px] border-4 border-black object-cover"/>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center" style={{ fontFamily:'Montserrat Alternates' }}>
          Setup Account Info
          </h2>
          <p className="text-center text-sm sm:text-base lg:text-lg font-semibold max-w-xs lg:max-w-sm" style={{ fontFamily:'Montserrat Alternates' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a officiis doloribus culpa dignissimos enim laboriosam possimus. Odit, voluptas id?
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-[30%] h-full flex flex-col items-center gap-2">
          <div className="w-full h-[200px] flex items-center justify-center mb-5">
            <img src={Card3} alt="" className="w-auto h-[150px] sm:h-[200px] border-4 border-black object-cover"/>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center" style={{ fontFamily:'Montserrat Alternates' }}>
           Start Buying &amp;
           Selling
          </h2>
          <p className="text-center text-sm sm:text-base lg:text-lg font-semibold max-w-xs lg:max-w-sm" style={{ fontFamily:'Montserrat Alternates' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In a officiis doloribus culpa dignissimos enim laboriosam possimus. Odit, voluptas id?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
