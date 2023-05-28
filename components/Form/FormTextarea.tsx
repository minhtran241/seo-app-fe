const FormTextarea = ({ data }) => {
  const { textarea } = data;
  return (
    <textarea
      className="form-control m-0 block w-full border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-primary focus:bg-white focus:text-gray-700 focus:outline-none"
      id={textarea?.htmlId}
      rows={3}
      placeholder={textarea?.placeholder}
      name={textarea?.name}
      required={textarea?.required}
    ></textarea>
  );
};

export default FormTextarea;
