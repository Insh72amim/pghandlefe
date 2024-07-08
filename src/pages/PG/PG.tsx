import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { getPGById } from '../../apis/pg.api';
import { Pg } from '../../types/PG';

const PG: React.FC = () => {
  const [pg, setPG] = useState<Pg>();

  useEffect(() => {
    const fetchPgData = async () => {
      const pg = await getPGById('f4b41cd9-22dc-4de9-b9b9-d5659a1f8508');
      setPG(pg);
    };

    fetchPgData();
  }, []);

  return (
    <DefaultLayout>
      <div className="dark:bg-boxdark p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold dark:text-white">{pg?.name}</h1>
        <p className="mt-2 text-white">You can add any content here.</p>
      </div>
    </DefaultLayout>
  );
};

export default PG;
