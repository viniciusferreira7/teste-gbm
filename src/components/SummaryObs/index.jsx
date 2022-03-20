import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from '../../customHook/useFetch';

export const SummaryObs = () => {
  const inputRef = useRef();
  const text = useRef();

  //eslint-disable-next-line
  const [result, loading] = useFetch(
    'https://api.tot.apigbmtech.com/api/selective-process/observation?authorization=67c9d5c3887b64c33671bb25f681753a',
  );

  const [value, setValue] = useState(`Carregando observações...`);
  //eslint-disable-next-line
  const [send, setSend] = useState({
    description: 'Produtividade alta no terminal da Rumo',
  });
  //eslint-disable-next-line
  const [edit, setEdit] = useState(false);

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
  console.log(text.current);
  console.log(result);

  return (
    <>
      {!edit ? (
        <>
          <button onClick={() => handleClick()}>Editar</button>
          <p>{text.current}</p>
        </>
      ) : (
        <>
          <button onClick={() => handleClick()}>Salvar</button>
          <button onClick={() => handleClickCancel()}>Cancelar</button>
          <textarea
            ref={inputRef}
            type="text"
            value={value}
            onChange={() => setValue(inputRef.current.value)}
          ></textarea>
        </>
      )}
    </>
  );
};
