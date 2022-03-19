import './styles.css';

import React from 'react';
import { useFetch } from '../../customHook/useFetch';

export const Home = () => {
  //eslint-disable-next-line
  const [result, loading] = useFetch('https://api.tot.apigbmtech.com/api/selective-process/wagons?authorization=67c9d5c3887b64c33671bb25f681753a');
  return (
    <div>
      {loading && <h2>Carregando...</h2>}
      {result !== null && (
        <div className="row">
          <div className="col">
            <ul>
              <h4>Placa</h4>
              {result.map((wagon) => (
                <p key={wagon.id}>{wagon.plate}</p>
              ))}
            </ul>
          </div>
          <div className="col">
            <ul>
              <h4>Ferrovia</h4>
              {result.map((wagon) => (
                <p key={wagon.id}>{wagon.railroad}</p>
              ))}
            </ul>
          </div>
          <div className="col">
            <ul>
              <h4>Produto</h4>
              {result.map((wagon) => (
                <p key={wagon.id}>{wagon.product}</p>
              ))}
            </ul>
          </div>
          <div className="col">
            <ul>
              <h4>Ferrovia</h4>
              {result.map((wagon) => (
                <p key={wagon.id}>{wagon.dow}</p>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
//id: 11, plate: 'HPT-030854-9', railroad: 'RUMO', product: 'Soja', downloadStartTime: '2021-12-05T08:24:38.000Z', …
