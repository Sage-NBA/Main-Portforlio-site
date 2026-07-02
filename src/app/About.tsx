function About() {
  return (
    <section className="py-10 overflow-hidden">
      <h1 className="text-3xl md:text-6xl font-bold p-5 md:max-w-[80%] ">
        Design has always been more than a job -it's my passion.
      </h1>
      <section className="flex flex-col md:flex-row justify-between ">
        <div className="space-y-5">
          <p className="md:font-medium px-5 mt-10 h-fit hyphens-auto text-[20px] md:text-2xl w-fit md:w-full wrap-break-words">
            Hey!, I'm Emmanuel Samuel, a passionate frontend developer who
            enjoys building modern, responsive, and user-friendly web
            applications. I specialize in React, TypeScript, Tailwind CSS, and
            JavaScript, and I love turning ideas into clean, interactive digital
            experiences. I am constantly learning new technologies and improving
            my skills through personal projects. {""}
            <span className="text-gray-600">
              My goal is to create websites that are not only visually appealing
              but also fast, accessible, and easy to use. When I'm not coding,
              you'll usually find me exploring new tools, learning about web
              development, or working on projects that challenge me to grow as a
              developer. I'm always excited to collaborate, learn, and build
              impactful solutions.
            </span>
          </p>
          <div className="w-screen aspect-video px-5">
            <video
              className="w-full h-full"
              loop
              autoPlay
              muted
              src="images/response.mp4"
            />
          </div>
        </div>
      </section>
      <p className="md:font-semibold h-fit p-5 hyphens-auto md:text-2xl break-words text-[20px]">
        In addition to web development, I am a talented hairstylist, which
        reflects my creativity and ability to apply innovative thinking across
        different fields. I approach every task with discipline, dedication, and
        a commitment to achieving the best possible results in everything I do.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-5">
        <div className="w-full aspect-[16/10] ">
          <img
            className="w-full rounded-2xl object-cover h-full"
            src="images/kid.jpg"
          ></img>
        </div>
        <div className="w-full aspect-[16/10] ">
          <img
            className="w-full rounded-2xl object-cover h-full"
            src="images/ifesi.jpg"
          ></img>
        </div>
        <div className="w-full aspect-[10/10]">
          <video
            className="w-full h-full object-cover"
            loop
            autoPlay
            muted
            src="images/sam.mp4"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
