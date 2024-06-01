import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import PremisesTable from './PremisesTable';

const Premises: React.FC = () => {
  return (
    <DefaultLayout>
      <PremisesTable></PremisesTable>
    </DefaultLayout>
  );
};

export default Premises;
