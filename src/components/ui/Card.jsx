function Card({ children, extraStyling }) {
  return (
    <div
      className={`rounded-md shadow-md ${extraStyling ? extraStyling : ""} `}
    >
      {children}
    </div>
  );
}

export default Card;
