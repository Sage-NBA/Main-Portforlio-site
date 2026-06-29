interface prop {
  text: string;
}

function Button({text}: prop) {
  return (
    <section>
      <button className="py-2 px-3 rounded-3xl border-2 cursor-pointer border-black hover:bg-gray-600 transition duration-500">
        {text}
      </button>
    </section>
  );
}

export default Button;
