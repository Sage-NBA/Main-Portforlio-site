interface prop {
  text: string;
  children: string;
  head: string;
}

function Sam({text, children, head}: prop) {
  return (
    <section>
      <div className="border-black border-t-[2px] border-b-[1px] font-bold p-5">
        <p className="md:text-2xl">{text}</p>
        <div className="flex itmes-center justify-between">
          <p className="md:font-bold font-light md:w-fit w-50">{children}</p>
          <h1 className="md:text-3xl">{head}</h1>
        </div>
      </div>
    </section>
  );
}

export default Sam;
