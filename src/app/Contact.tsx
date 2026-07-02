function Contact() {
  return (
    <div className="  p-5">
      <div className="md:flex py-5 gap-10 md:py-10 md:my-10 md:ml-10 space-y-5">
        <p className="text-3xl sm:text-4xl break-word w-80 md:w-70">
          Let's Connect Out There
        </p>
        <div className="text-[20px] space-y-5 xl:flex lg:gap-20">
          <p className="flex gap-2 md:gap-10 lg:gap-5">
            <i className="ri-mail-fill"></i>
            <p>Sammy2007bright@gmail.com</p>
          </p>
          <p className="flex gap-2 md:gap-10 lg:gap-3">
            <i className="ri-phone-fill"></i>
            <p>+234 9070685246</p>
          </p>
          <p className="flex gap-2 md:gap-10 lg:gap-3">
            <i className="ri-map-pin-fill"></i>
            <p>Lagos</p>
          </p>
        </div>
      </div>
      {/* another */}

      {/* socials */}
      <p className="text-center text-2xl md:text-3xl p-5">
        Connect Wth Me On!!
      </p>
      <div className="grid grid-cols-2 md:gap-20 text-center justify-center space-y-5 py-5 md:flex text-4xl md:text-5xl list-none">
        <a href="https://www.facebook.com/share/1EXC4sJ43C/">
          <li>
            <i className="ri-facebook-circle-fill"></i>
          </li>
        </a>
        <a href="https://wa.me/qr/HZ3MKMKKDZRHJ1">
          <li>
            <i className="ri-whatsapp-fill"></i>
          </li>
        </a>
        <a href="https://www.instagram.com/samuelemmanuel668/">
          <li>
            <i className="ri-instagram-fill"></i>
          </li>
        </a>
        <a href="http://bit.ly/4v7Ukpr">
          <li>
            <i className="ri-linkedin-fill"></i>
          </li>
        </a>
      </div>
      <div className="bg-[gray] p-5 md:p-10 rounded-2xl space-y-5 md:space-y-10">
        <h1 className="text-2xl md:text-4xl text-center">
          Send A Message Today!!!!
        </h1>
        <div className=" space-y-5">
          <p>* Frontend Developer</p>
          <p>* Remote Friendly</p>
          <p>* Open for Freelance Projects</p>
          <p>* Available for Internships</p>
          <p style={{fontFamily: "Bitcount Grid Double"}} className="text-end">
            Responds within 24hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
