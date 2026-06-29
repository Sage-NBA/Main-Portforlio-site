import {Button} from "../component";
import {Sam} from "../component";
function Services() {
  return (
    <>
      <Button text="Think Big!" />
      <h1 className="font-bold text-3xl md:text-7xl wrap-break-word w-70 md:w-200 p-5">
        A Yearly snapshot of my creative growth
      </h1>
      {/* another */}
      <Sam
        text="S.S.C.E"
        children="Community Senior Secondary Schools"
        head="2023-2025"
      />

      <Sam text="Hair-Stylist" children="" head="2023-DATE" />

      <Sam text="Web Developer" children="" head="2025-DATE" />
    </>
  );
}

export default Services;
