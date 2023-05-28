const FormInput = ({ data }) => {
  const { input } = data;
  return (
    <input
      type={input?.inputType?.toLowerCase() || 'text'}
      className="form-control m-0 block w-full border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-primary focus:bg-white focus:text-gray-700 focus:outline-none"
      id={input?.htmlId}
      placeholder={input?.placeholder}
      name={input?.name}
      required={input?.required}
    />
  );
};

export default FormInput;
