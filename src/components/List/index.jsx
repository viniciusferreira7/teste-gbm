import './styles.css';

import P from 'prop-types';
import React from 'react';
import { total } from '../../function/total';

export const List = ({ result }) => {
  return (
    <div className="list">
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
        <div className="col product">
          <ul>
            <h4>Produto</h4>
            {result.map((wagon) => (
              <p key={wagon.id}>{wagon.product}</p>
            ))}
          </ul>
        </div>
        <div className="col date">
          <ul>
            <h4>Data/Hora Início Desc.</h4>
            {result.map((wagon) => (
              <p key={wagon.id}>{wagon.downloadStartTime}</p>
            ))}
          </ul>
        </div>
        <div className="col date">
          <ul>
            <h4>Data/Hora Fim Desc.</h4>
            {result.map((wagon) => (
              <p key={wagon.id}>{wagon.downloadEndTime}</p>
            ))}
            <p className="listTotal">Total :</p>
          </ul>
        </div>
        <div className="col">
          <ul>
            <h4>Peso destino</h4>
            {result.map((wagon) => (
              <p key={wagon.id}>{Number(wagon.weight).toLocaleString('en-US')}</p>
            ))}
            <p className="listTotal">{total(result)}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  result: P.array,
};
