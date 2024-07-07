import LetterIcon from '../../components/Icons/Letter.icon';
import { useEffect, useState } from 'react';
import { getBedsInPgByPgId, getPGListByOwnerId } from '../../apis/pg.api';
import { getUserId } from '../../utils/getUserId';
import { PG } from '../../types/entities';
import AddPremiseModal from './AddPremise.modal';
import AddPremiseForm from './AddPremise.form';

const PremisesTable = () => {
  const [pgList, setPGLList] = useState<PG[]>([]);
  const [pgBedOccupancy, setpgBedOccupancy] = useState<{
    [key: string]: {
      available: number;
      total: number;
    };
  }>({});

  const [addPremiseModalOpened, setAddPremiseModalOpened] = useState(false);
  const handleOpenModal = () => {
    setAddPremiseModalOpened(true);
  };

  const handleCloseModal = () => {
    setAddPremiseModalOpened(false);
  };

  useEffect(() => {
    const fetchPgData = async () => {
      const owner = await getUserId();
      const list = await getPGListByOwnerId(owner);
      setPGLList(list);
    };

    fetchPgData();
  }, []);

  useEffect(() => {
    const fetchBedList = async () => {
      for (const pg of pgList) {
        const totalBeds = await getBedsInPgByPgId(pg.id);
        const availableBeds = totalBeds.filter(
          (bed: any) => bed.isAvailable,
        ).length;

        setpgBedOccupancy((prevPgBedOccupancy) => ({
          ...prevPgBedOccupancy,
          [pg.id]: {
            available: availableBeds,
            total: totalBeds.length,
          },
        }));
      }
    };

    if (pgList.length > 0) fetchBedList();
  }, [pgList]);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-row justify-between">
        <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
          Premises Listed
        </h4>{' '}
        <button
          className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-800 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          onClick={handleOpenModal}
        >
          Add PG
        </button>
        <AddPremiseModal
          show={addPremiseModalOpened}
          handleClose={handleCloseModal}
          children={
            <AddPremiseForm handleClose={handleCloseModal}></AddPremiseForm>
          }
        ></AddPremiseModal>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              PG Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Rooms
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Beds
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Available Beds
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Contact Number
            </h5>
          </div>
        </div>

        {pgList.map((pg, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === pgList.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <LetterIcon letter={pg.name.at(0) as string}></LetterIcon>
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {pg.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{pg.totalRooms}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{pgBedOccupancy[pg.id]?.total}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{pgBedOccupancy[pg.id]?.available}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{pg.contactNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremisesTable;
