function InputGroup({ label, value, setValue, id, type }) {
  return (
    <div className="mb-4 flex flex-col items-start justify-center">
      <label className="text-lg font-semibold text-[#527bf7]" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className="w-[100%] border border-solid border-[#527bf7] px-2 py-1 font-semibold"
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default InputGroup;
