import { FormEvent, useState } from 'react';
import SwitchBox from '../../components/Switchers/SwitchBox';
import InputField from '../../components/Form/InputField';
import { Link } from 'react-router-dom';
import { AddPG } from '../../apis/pg.api';
import { verifyToken } from '../../apis/auth.api';

const AddPremiseForm = ({ handleClose }: { handleClose: () => void }) => {
  const [pgName, setPgName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setzipcode] = useState('');
  const [country, setCountry] = useState('');
  const [totalRooms, setTotalRooms] = useState('');
  const [totalFloors, setTotalFloors] = useState('');

  const [wifi, setWifi] = useState(false);
  const [food, setFood] = useState(false);
  const [gym, setGym] = useState(false);
  const [ac, setAc] = useState(false);
  const [television, setTelivision] = useState(false);
  const [laundry, setLaundry] = useState(false);
  const [carParking, setCarParking] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);
  const [bikeParking, setBikeParking] = useState(false);
  const [refrigerator, setRefrigerator] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const access_token = localStorage.getItem('access_token');
    const verify = await verifyToken({ access_token });
    if (verify.valid === false) return;

    try {
      await AddPG({
        owner: verify.decoded.sub,
        name: pgName,
        contactNumber,
        totalFloors,
        totalRooms,
        address: {
          addressLine1,
          addressLine2,
          city,
          state,
          zipcode,
          country,
        },
        amenity: {
          food,
          internet: wifi,
          television,
          washingMachine: laundry,
          refrigerator,
          airConditioned: ac,
          gym,
          swimmingPool,
          bikeParking,
          carParking,
        },
      });
      window.location.href = '/premises';
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <InputField
            label="Name"
            placeholder="Enter your PG Name"
            inputValue={pgName}
            setInputValue={setPgName}
          ></InputField>

          <InputField
            label="Total Rooms"
            placeholder="Enter total rooms"
            inputValue={totalRooms}
            setInputValue={setTotalRooms}
          ></InputField>

          <InputField
            label="Address Line 1"
            placeholder="Enter Street Name or Locality"
            inputValue={addressLine1}
            setInputValue={setAddressLine1}
          ></InputField>

          <InputField
            label="City"
            placeholder="Enter your city"
            inputValue={city}
            setInputValue={setCity}
          ></InputField>

          <InputField
            label="State"
            placeholder="Enter your state"
            inputValue={state}
            setInputValue={setState}
          ></InputField>
        </div>

        <div className="flex flex-col gap-9">
          <InputField
            label="Contact Number"
            placeholder="Enter your PG Contact Number"
            inputValue={contactNumber}
            setInputValue={setContactNumber}
          ></InputField>

          <InputField
            label="Total Floors"
            placeholder="Enter total floors"
            inputValue={totalFloors}
            setInputValue={setTotalFloors}
          ></InputField>

          <InputField
            label="Address Line 2"
            placeholder="Enter Landmark"
            inputValue={addressLine2}
            setInputValue={setAddressLine2}
          ></InputField>

          <InputField
            label="zipcode"
            placeholder="Enter your zipcode"
            inputValue={zipcode}
            setInputValue={setzipcode}
          ></InputField>

          <InputField
            label="Country"
            placeholder="Enter your country"
            inputValue={country}
            setInputValue={setCountry}
          ></InputField>
        </div>
      </div>

      <div className="mt-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Amenities Provided
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">WiFi</div>
            <SwitchBox id="wifi" enabled={wifi} setEnabled={setWifi} />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">Food</div>
            <SwitchBox id="food" enabled={food} setEnabled={setFood} />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">
              Television
            </div>
            <SwitchBox
              id="tv"
              enabled={television}
              setEnabled={setTelivision}
            />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">
              Laundary
            </div>
            <SwitchBox id="laundry" enabled={laundry} setEnabled={setLaundry} />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">
              Refrigator
            </div>
            <SwitchBox
              id="refrigerator"
              enabled={refrigerator}
              setEnabled={setRefrigerator}
            />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">
              Air Conditioned
            </div>
            <SwitchBox id="ac" enabled={ac} setEnabled={setAc} />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">Gym</div>
            <SwitchBox id="gym" enabled={gym} setEnabled={setGym} />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">
              Bike Parking
            </div>
            <SwitchBox
              id="bike"
              enabled={bikeParking}
              setEnabled={setBikeParking}
            />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">
              Car Parking
            </div>
            <SwitchBox
              id="car"
              enabled={carParking}
              setEnabled={setCarParking}
            />
          </div>
          <div className="grid grid-cols-2 gap-9">
            <div className="font-medium text-black dark:text-white">
              Swimming Pool
            </div>
            <SwitchBox
              id="pool"
              enabled={swimmingPool}
              setEnabled={setSwimmingPool}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center space-x-14 p-4">
        <Link
          to="#"
          className="inline-flex items-center justify-center bg-customGray py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 rounded-lg lg:px-8 xl:px-10"
          onClick={handleClose}
        >
          Cancel
        </Link>
        <Link
          to="#"
          className="inline-flex items-center justify-center bg-primary px-10 text-center font-medium text-white hover:bg-opacity-90 rounded-lg lg:px-8 xl:px-10"
          onClick={handleSubmit}
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default AddPremiseForm;
