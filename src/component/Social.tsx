import Button from "./Button";

function Social() {
  return (
    <section className="hidden md:flex overflow-hidden ">
      <div className="justify-between flex p-5 gap-20 font-bold items-center animate-marquee">
        <a href="https://www.facebook.com/share/1EXC4sJ43C/">
          <Button text="Facebook" />
        </a>
        <h1 className="font-bold text-2xl">.Typescript</h1>
        <a href="https://www.instagram.com/samuelemmanuel668/">
          <Button text="Instagram" />
        </a>
        <h1 className="font-bold text-2xl">.React</h1>
        <a href="#https://wa.me/qr/HZ3MKMKKDZRHJ1">
          <Button text="Whatsapp" />
        </a>
        <h1 className="font-bold text-2xl">.HTML</h1>
        <a href="http://bit.ly/4v7Ukpr">
          <Button text="LinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default Social;
