function Contact() {
  return (
    <div className="  p-5">
      <div className="md:flex justify-between itens-center">
        <p className="text-4xl md:text-7xl wrap-break-word w-80 md:w-130">
          Let's Connect Out There
        </p>
        <p className="hidden md:flex w-screen md:w-50 h-20">
          <img
            className="w-full h-full rounded-3xl object-center"
            src="/images/mark.jpeg"
          ></img>
        </p>
      </div>
      {/* another */}
      <p className="text-center text-4xl p-5">
        Have an Idea? Let's Make it Happen
      </p>
      <div className="text-[20px] md:text-2xl">
        <p className="flex gap-2 md:gap-10">
          <i className="ri-mail-fill"></i>
          <p>Sammy2007bright@gmail.com</p>
        </p>
        <p className="flex gap-2 md:gap-10">
          <i className="ri-phone-fill"></i>
          <p>+234 9070685246</p>
        </p>
        <p className="flex gap-2 md:gap-10">
          <i className="ri-map-pin-fill"></i>
          <p>Lagos</p>
        </p>
      </div>
      {/* socials */}
      <p className="text-center text-4xl p-5">Connect Wth Me On!!</p>
      <div className="grid grid-cols-2 md:gap-20 justify-center text-center space-y-5 py-5 md:flex text-7xl list-none">
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
      <section className="text-white text-2xl p-5 space-y-5 rounded-2xl bg-[#423f3f] w-full h-fit">
        <h1 className="text-4xl text-center">Send A Message Today!!!!</h1>
        <p>* Frontend Developer</p>
        <p>* Remote Friendly</p>
        <p>* Open for Freelance Projects</p>
        <p>* Available for Internships</p>
        <p style={{fontFamily: "Bitcount Grid Double"}} className="text-end">
          Responds within 24hrs
        </p>
      </section>
    </div>
  );
}

export default Contact;
