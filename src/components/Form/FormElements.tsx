import CheckboxTwo from '../Checkboxes/CheckboxTwo';
import SwitcherFour from '../Switchers/SwitcherFour';
import SwitcherOne from '../Switchers/SwitcherOne';
import SwitchBox from '../Switchers/SwitchBox';
import SwitcherTwo from '../Switchers/SwitcherTwo';
import DatePickerOne from '../Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../Forms/DatePicker/DatePickerTwo';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import MultiSelect from '../Forms/MultiSelect';

const FormElements = () => {
  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        {/* <!-- Input Fields --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Input Fields
            </h3>
          </div>
          <div>
            <label className="mb-3 ml-4 mt-3 block text-black dark:text-white">
              Active Input
            </label>
            <input
              type="text"
              placeholder="Active Input"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
          </div>
        </div>

        {/* <!-- Toggle switch input --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Toggle switch input
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <SwitchBox />
          </div>
        </div>

        {/* <!-- Time and date --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Time and date
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <DatePickerOne />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9">
        {/* <!-- Textarea Fields --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Textarea Fields
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Default textarea
              </label>
              <textarea
                rows={6}
                placeholder="Default textarea"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              ></textarea>
            </div>
          </div>
        </div>

        {/* <!-- Checkbox and radio --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Checkbox and radio
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <CheckboxTwo />
          </div>
        </div>

        {/* <!-- Select input --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Select input
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <SelectGroupTwo />
            <MultiSelect id="multiSelect" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormElements;
