import './styles.css';

import React from 'react';
import { useFetch } from '../../customHook/useFetch';
import { List } from '../../components/List';
import { SummaryObs } from '../../components/SummaryObs';

export const Home = () => {
  //eslint-disable-next-line
  const [result, loading] = useFetch('https://api.tot.apigbmtech.com/api/selective-process/wagons?authorization=67c9d5c3887b64c33671bb25f681753a');
  return (
    <>
      <List result={result} loading={loading} />
      <SummaryObs />
    </>
  );
};
//id: 11, plate: 'HPT-030854-9', railroad: 'RUMO', product: 'Soja', downloadStartTime: '2021-12-05T08:24:38.000Z', …
