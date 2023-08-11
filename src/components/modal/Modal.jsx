function Modal({ children, onCloseModal }) {
  return (
    <div
      onClick={onCloseModal}
      className="fixed left-0 top-0  z-20 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.25)] backdrop-blur-sm"
    >
      <div className="mx-auto mt-48 w-[536px]">{children}</div>
    </div>
  );
}

export default Modal;
