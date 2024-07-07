export default function InputField({
  label,
  inputValue,
  placeholder,
  setInputValue,
}: {
  label: string;
  inputValue: string;
  placeholder: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div>
        <label className="mb-3 ml-4 mt-3 block text-black dark:text-white">
          {label}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={inputValue}
          onChange={(n) => setInputValue(n.target.value)}
        />
      </div>
    </div>
  );
}
