import './styles.css';

import P from 'prop-types';
import React from 'react';
import { calcSummary } from '../../function/calcSummary';

export const Weighing = ({ result }) => {
  return (
    <>
      {result !== null && (
        <section className="weighing">
          <h2>Resumo de pesagens</h2>
          <div className="wrapper">
            <div>
              <h4>SOJA</h4>
              <section className="group">
                <div className="rumo  ">
                  <p>RUMO</p>
                  <p>{calcSummary(result).soja.rumo}</p>
                </div>
                <div className="mrs ">
                  <p>MRS</p>
                  <p>{calcSummary(result).soja.mrs}</p>
                </div>
                <div className="vli ">
                  <p>VLI</p>
                  <p>{calcSummary(result).soja.vli}</p>
                </div>
                <div className="total ">
                  <p>
                    <strong>TOTAL</strong>
                  </p>
                  <p>
                    <strong>{calcSummary(result).soja.soma}</strong>
                  </p>
                </div>
              </section>
            </div>
            <div>
              <h4>MILHO</h4>
              <section className="group two">
                <div className="rumo">
                  <p>RUMO</p>
                  <p>{calcSummary(result).milho.rumo}</p>
                </div>
                <div className="mrs ">
                  <p>MRS</p>
                  <p>{calcSummary(result).milho.mrs}</p>
                </div>
                <div className="vli ">
                  <p>VLI</p>
                  <p>{calcSummary(result).milho.vli}</p>
                </div>
                <div className="total ">
                  <p>
                    <strong>TOTAL</strong>
                  </p>
                  <p>
                    <strong>{calcSummary(result).milho.soma}</strong>
                  </p>
                </div>
              </section>
            </div>
            <div>
              <h4>TOTAL</h4>
              <section className="group">
                <div className="rumo ">
                  <p>RUMO</p>
                  <p>{calcSummary(result).somaFinal.rumo}</p>
                </div>
                <div className="mrs ">
                  <p>MRS</p>
                  <p>{calcSummary(result).somaFinal.mrs}</p>
                </div>
                <div className="vli ">
                  <p>VLI</p>
                  <p>{calcSummary(result).somaFinal.vli}</p>
                </div>
                <div className="total ">
                  <p>
                    <strong>TOTAL</strong>
                  </p>
                  <p>
                    <strong>{calcSummary(result).somaFinal.soma}</strong>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

Weighing.propTypes = {
  result: P.array,
};
