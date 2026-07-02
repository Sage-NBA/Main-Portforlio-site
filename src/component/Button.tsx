interface prop {
  text: string;
}

function Button({text}: prop) {
  return (
    <section>
      <button className="py-2 px-3 rounded-3xl border-2 cursor-pointer border-black hover:border-none hover:text-purple-200 hover:bg-gray-300 transition duration-500">
        {text}
      </button>
    </section>
  );
}

export default Button;
