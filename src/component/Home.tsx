function Home() {
  return (
    <>
      <div className="md:flex md:justify-between md:overflow-hidde">
        {" "}
        <h1
          style={{fontFamily: "Bitcount Grid Double"}}
          className="text-3xl md:text-[50px] lg:text-[70px] px-5 md:mt-70 sm:mt-10 font-bold"
        >
          Creative
          <br /> Designer
        </h1>
        <div className="space-y-8 md:space-y-40 ">
          <p className="w-fit md:w-90 aspect-[10/12] px-5 ">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="images/samuel.jpeg"
            ></img>
          </p>
          <p className="break-word py-5 text-center md:text-end px-5 hyphen-auto  md:ml-35 md:w-50 font-semibold ">
            Hi, I'm Emmanuel Samuel, a Frontend Developer Intern with a passion
            for creating modern, responsive web experiences and continuously
            learning new technologies.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
