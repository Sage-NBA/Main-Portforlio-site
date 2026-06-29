function About() {
  return (
    <>
      <h1 className="text-3xl md:text-6xl font-bold p-5">
        Design has always been more than a job -it's my passion.
      </h1>
      <section className="flex justify-center ">
        <div className="hidden md:flex w-200 h-200">
          <video
            className="w-full h-full rounded-3xl"
            loop
            autoPlay
            muted
            src="images/sam.mp4"
          />
        </div>
        <div className="space-y-5">
          <p
            style={{fontFamily: "Lobster"}}
            className="md:font-medium p-5 h-fit hyphens-auto text-[20px] md:text-2xl w-fit md:w-200 mx-auto wrap-break-words"
          >
            <span className="font-bold text-3xl">Hey!!</span>, I'm Emmanuel
            Samuel, a passionate frontend developer who enjoys building modern,
            responsive, and user-friendly web applications. I specialize in
            React, TypeScript, Tailwind CSS, and JavaScript, and I love turning
            ideas into clean, interactive digital experiences. I am constantly
            learning new technologies and improving my skills through personal
            projects.
            <span className="text-gray-600">
              My goal is to create websites that are not only visually appealing
              but also fast, accessible, and easy to use. When I'm not coding,
              you'll usually find me exploring new tools, learning about web
              development, or working on projects that challenge me to grow as a
              developer. I'm always excited to collaborate, learn, and build
              impactful solutions.
            </span>
          </p>
          <div>
            <video
              className="w-full h-full rounded-3xl"
              loop
              autoPlay
              muted
              src="images/response.mp4"
            />
          </div>
        </div>
      </section>
      <p
        style={{fontFamily: "Lobster"}}
        className="md:font-semibold h-fit p-5 hyphens-auto md:text-2xl w-fit md:w-250 mx-auto py-5 wrap-break-words text-[20px]"
      >
        In addition to web development, I am a talented hairstylist, which
        reflects my creativity and ability to apply innovative thinking across
        different fields. I approach every task with discipline, dedication, and
        a commitment to achieving the best possible results in everything I do.
      </p>
      <div className="md:flex gap-10 justify-center space-y-20 p-5">
        <p className="w-80 h-100">
          <img className="w-full rounded-3xl h-full" src="images/kid.jpg"></img>
        </p>
        <p className="w-80 h-100">
          <img
            className="w-full rounded-3xl h-full"
            src="images/ifesi.jpg"
          ></img>
        </p>
      </div>
    </>
  );
}

export default About;
