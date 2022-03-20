import P from 'prop-types';
import React from 'react';
import { summary } from '../../function/summary';

export const Weighing = () => {
  return (
    <>
      {summary() !== undefined && (
        <section>
          <h4>SOJA</h4>
          <div className="rumo group">
            <p>RUMO</p>
            <p>{summary().soja.rumo}</p>
          </div>
          <div className="mrs group">
            <p>MRS</p>
            {/* <p>{summary().soja.mrs}</p> */}
          </div>
          <div className="VLI group">
            <p>VLI</p>
            {/* <p>{summary().soja.vli}</p> */}
          </div>
          <div className="total group">
            <p>
              <strong>TOTAL</strong>
            </p>
            {/* <p>{summary().soja.soma}</p> */}
          </div>
        </section>
      )}
    </>
  );
};

Weighing.propTypes = {
  loading: P.bool,
};
