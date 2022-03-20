import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from '../../customHook/useFetch';

export const SummaryObs = () => {
  const inputRef = useRef();

  //eslint-disable-next-line
  const [result, loading] = useFetch(
    'https://api.tot.apigbmtech.com/api/selective-process/observation?authorization=67c9d5c3887b64c33671bb25f681753a',
  );
  const [value, setValue] = useState('Carregando observações...');
  //eslint-disable-next-line
  const [send, setSend] = useState({
    description: 'Carregando...',
  });
  //eslint-disable-next-line
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(send),
    };

    fetch(
      'https://api.tot.apigbmtech.com/api/selective-process/observation?authorization=67c9d5c3887b64c33671bb25f681753a',
      requestOptions,
    ).then((response) => response.json());
  }, [send]);

  const handleClick = () => {
    setEdit((e) => !e);
    console.log(send);
    setSend({ observation: value });
  };

  console.log(result);

  return (
    <>
      {edit ? (
        <>
          <button onClick={() => handleClick()}>Salvar</button>
          <button>Cancelar</button>
          <input ref={inputRef} type="text" value={value} onChange={() => setValue(inputRef.current.value)} />
        </>
      ) : (
        <>
          <button onClick={() => handleClick()}>Editar</button>
          <p>{value}</p>
        </>
      )}
    </>
  );
};
