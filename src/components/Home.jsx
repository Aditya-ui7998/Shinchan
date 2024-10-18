import HomeBg from '../assets/Hình nền điện thoại • Shin cậu bé bút chì.jpeg';

const Home = () => {
  return (
    <div id='home'
      className="w-[90%] h-screen m-auto mt-10 bg-cover bg-center p-8 rounded-xl shadow-lg border-4 border-black mb-5"
      style={{
        backgroundImage: `url(${HomeBg})`,
        backgroundColor: '#f97316', 
      }}
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black mb-4 ml-5 sm:ml-10 md:ml-[50px] lg:ml-[100px] xl:ml-[200px] mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px]"
      style={{
        fontFamily:'Barriecito'
      }}
      >
        FUTURE OF BITCOIN
      </h1>

      {/* Description Text */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black ml-5 sm:ml-10 md:ml-[50px] lg:ml-[100px] xl:ml-[200px] mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px] font-semibold"
       style={{
        fontFamily:'Suse'
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipiscing elit.<br />
        Eveniet ipsum dolor sit amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Inventore nostrum vero nemo id maiores reprehenderit non adipisci ducimus quaerat in.
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default Home;
