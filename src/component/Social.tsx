import Button from "./Button";

export function Social() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white py-6 overflow-hidden">
      <div className="flex justify-between items-center gap-16 font-bold animate-marquee whitespace-nowrap text-gray-800">
        <a href="https://www.facebook.com/share/1EXC4sJ43C/" target="_blank" rel="noopener noreferrer">
          <Button text="Facebook" />
        </a>
        <span className="font-bold text-xl text-gray-500">.TypeScript</span>

        <a href="https://www.instagram.com/samuelemmanuel668/" target="_blank" rel="noopener noreferrer">
          <Button text="Instagram" />
        </a>
        <span className="font-bold text-xl text-gray-500">.React</span>

        <a href="https://wa.me/qr/HZ3MKMKKDZRHJ1" target="_blank" rel="noopener noreferrer">
          <Button text="WhatsApp" />
        </a>
        <span className="font-bold text-xl text-gray-500">.TailwindCSS</span>

        <a href="http://bit.ly/4v7Ukpr" target="_blank" rel="noopener noreferrer">
          <Button text="LinkedIn" />
        </a>
        <span className="font-bold text-xl text-gray-500">.Vite</span>

        <a href="https://github.com/Sage-NBA" target="_blank" rel="noopener noreferrer">
          <Button text="GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Social;
