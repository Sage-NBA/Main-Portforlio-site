function Home() {
  return (
    <>
      <div className="md:flex md:overflow-hidden">
        {" "}
        <h1
          style={{fontFamily: "Bitcount Grid Double"}}
          className="text-3xl md:text-[150px] px-5 md:mt-70 font-bold"
        >
          Creative
          <br /> Designer
        </h1>
        <div className="space-y-8 md:space-y-40 md:ml-50">
          <p className="w-fit md:w-100 aspect-[10/12] px-5 ">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="images/samuel.jpeg"
            ></img>
          </p>
          <p className="wrap-broken-word py-5 ml-10 md:ml-40 md:w-50 justify-end font-bold ">
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
