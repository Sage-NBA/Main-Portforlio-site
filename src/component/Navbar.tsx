import {useState} from "react";
import Button from "./Button";
import {Link} from "react-router-dom";

function Navbar() {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <section>
      <nav className="justify-between p-5 items-center hidden md:flex">
        <div className="w-10 h-10 rounded-[20px]">
          <img
            className="w-full h-full object-cover"
            src="images/sam.jpeg"
          ></img>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            className="transition duration-400 rounded-2xl p-1 animated-link"
            to="/Home"
          >
            Home
          </Link>

          <Link
            className="transition duration-400 rounded-2xl p-1 animated-link"
            to="/About"
          >
            About
          </Link>
          <Link
            className="transition duration-400 rounded-2xl p-1 animated-link"
            to="/Services"
          >
            Services
          </Link>
          <Link
            className="transition duration-400 rounded-2xl p-1 animated-link"
            to="/Contact"
          >
            Contact
          </Link>
        </div>
        <Button text="Get in Touch" />
      </nav>

      {/* MOBILE */}
      <nav className="">
        <div className="flex p-5 md:hidden items-center justify-between">
          <div className="w-15 rounded-[20px] h-15">
            <img
              className="w-full h-full object-cover"
              src="images/sam.jpeg"
            ></img>
          </div>

          {/* hambuger */}
          <button onClick={() => SetIsOpen(!isOpen)}>
            <i
              className={`text-4xl relative left-0 ${isOpen ? "ri-close-line" : "ri-menu-line"}`}
            ></i>
          </button>
        </div>
        {/* navText */}

        {isOpen && (
          <div className=" text-3xl space-y-10 text-[#f7f5f5] absolute w-full mt-0 pt-20 bg-black/70 rounded-2xl text-center font-bold h-screen">
            <p>
              <Link
                onClick={() => SetIsOpen(false)}
                className=" hover:bg-gray-500 transition duration-400 rounded-2xl p-1"
                to="/Home"
              >
                Home
              </Link>
            </p>

            <p>
              <Link
                onClick={() => SetIsOpen(false)}
                className=" hover:bg-gray-500 transition duration-400 rounded-2xl p-1"
                to="/About"
              >
                About
              </Link>
            </p>
            <p>
              <Link
                onClick={() => SetIsOpen(false)}
                className=" hover:bg-gray-500 transition duration-400 rounded-2xl p-1"
                to="/Services"
              >
                Services
              </Link>
            </p>
            <p>
              <Link
                onClick={() => SetIsOpen(false)}
                className=" hover:bg-gray-500 transition duration-400 rounded-2xl p-1"
                to="/Contact"
              >
                Contact
              </Link>
            </p>
          </div>
        )}
      </nav>
    </section>
  );
}

export default Navbar;
