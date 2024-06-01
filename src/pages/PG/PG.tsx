import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TableThree from '../../components/Tables/TableThree';
import TableTwo from '../../components/Tables/TableTwo';
import TableOne from './PGTable';

const PG: React.FC = () => {
  return (
    <DefaultLayout>
      <TableOne></TableOne>
      <TableTwo></TableTwo>
      <TableThree></TableThree>
    </DefaultLayout>
  );
};

export default PG;
