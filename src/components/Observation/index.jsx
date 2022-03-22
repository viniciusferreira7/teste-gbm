import './styles.css';

import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from '../../customHook/useFetch';

export const Observation = () => {
  const inputRef = useRef();
  const text = useRef();

  //eslint-disable-next-line
  const [result, loading] = useFetch(
    'https://api.tot.apigbmtech.com/api/selective-process/observation?authorization=67c9d5c3887b64c33671bb25f681753a',
  );

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text.current);
  const [send, setSend] = useState({
    description: 'Produtividade alta no terminal da Rumo',
  });

  useEffect(() => {
    if (result !== null) text.current = result[0].observation;
  }, [result]);

  useEffect(() => {
    if (edit) {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(send),
      };

      fetch(
        'https://api.tot.apigbmtech.com/api/selective-process/observation?authorization=67c9d5c3887b64c33671bb25f681753a',
        requestOptions,
      ).then((response) => response.json());
    }
  }, [send, edit]);

  useEffect(() => {
    setSend({ description: value });
  }, [edit, value]);

  const handleClick = () => {
    setEdit((e) => !e);
    setSend({ description: value });
    text.current = send.description;
  };

  const handleClickCancel = () => {
    setEdit((e) => !e);
    setSend({ description: text.current });
  };

  return (
    <section className="observation">
      <div className="obsWrapper">
        <h2>Observações</h2>
        {!edit ? (
          <button className="btn blue " onClick={() => handleClick()}>
            Editar
          </button>
        ) : (
          <>
            <button className="btn red" onClick={() => handleClickCancel()}>
              Cancelar
            </button>
            <button className="btn blue " onClick={() => handleClick()}>
              Salvar
            </button>
          </>
        )}
      </div>

      {!edit ? (
        <p className="obsText">{text.current}</p>
      ) : (
        <textarea
          className="obsText"
          ref={inputRef}
          type="text"
          value={value}
          onChange={() => setValue(inputRef.current.value)}
        ></textarea>
      )}
    </section>
  );
};
