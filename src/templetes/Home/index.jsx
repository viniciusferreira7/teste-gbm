import './styles.css';

import React, { useState } from 'react';
import { useFetch } from '../../customHook/useFetch';
import { AsideBar } from '../../components/AsideBar';
import { HeaderMenu } from '../../components/HeaderMenu';
import { List } from '../../components/List';
import { Observation } from '../../components/Observation';
import { Weighing } from '../../components/Weighing';

export const Home = () => {
  const [click, setClick] = useState(false);
  const [result, loading] = useFetch(
    'https://api.tot.apigbmtech.com/api/selective-process/wagons?authorization=67c9d5c3887b64c33671bb25f681753a',
  );
  const [menu, setMenu] = useState(false);

  const handleCLick = () => {
    setClick((c) => !c);
  };

  const handleMenu = () => {
    setMenu((c) => !c);
  };

  return (
    <div className="container">
      <AsideBar menu={menu} />
      <main>
        <HeaderMenu handleMenu={handleMenu} />
        <div className="btnWrapper">
          <h2>Vagões Cadastrados</h2>
          <button className="btn-click" onClick={handleCLick}>
            Buscar vagões API
          </button>
        </div>
        {click && loading && <h2 className="carregando">Carregando...</h2>}
        {click && result !== null && (
          <>
            <section className="wagons">
              <List result={result} loading={loading} />
            </section>
            <Weighing result={result} />
            <Observation />
          </>
        )}
      </main>
    </div>
  );
};
//id: 11, plate: 'HPT-030854-9', railroad: 'RUMO', product: 'Soja', downloadStartTime: '2021-12-05T08:24:38.000Z', …
