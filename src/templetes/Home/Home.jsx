import './styles.css';

import React from 'react';
import { useFetch } from '../../customHook/useFetch';
import { List } from '../../components/List';
import { Observation } from '../../components/Observation';
import { Weighing } from '../../components/Weighing';

export const Home = () => {
  //eslint-disable-next-line
  const [result, loading] = useFetch('https://api.tot.apigbmtech.com/api/selective-process/wagons?authorization=67c9d5c3887b64c33671bb25f681753a');
  return (
    <main>
      {loading && <h2>Carregando...</h2>}
      {result !== null && (
        <>
          <section className="wagons">
            <h2>Vagões Cadastrados</h2>
            <List result={result} loading={loading} />
          </section>
          <section className="weighing">
            <h2>Resumo de pesagens</h2>
            <Weighing loading={loading} />
          </section>
          <section className="observation">
            <h2>Observações</h2>
            <Observation />
          </section>
        </>
      )}
    </main>
  );
};
//id: 11, plate: 'HPT-030854-9', railroad: 'RUMO', product: 'Soja', downloadStartTime: '2021-12-05T08:24:38.000Z', …
