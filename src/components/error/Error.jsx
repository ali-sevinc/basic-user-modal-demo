import Button from "../ui/Button";
import Card from "../ui/Card";

const extraStyles = "pt-5 pb-3 px-5 bg-white";
function Error({ onCloseError, message }) {
  return (
    <Card extraStyling={extraStyles}>
      <div className="relative h-[180px] w-[100%] bg-white ">
        <h2 className="mb-3 text-xl font-bold">Error Occured</h2>
        <p className="text-lg">{message}</p>
        <Button onClick={onCloseError}>Close</Button>
      </div>
    </Card>
  );
}

export default Error;
