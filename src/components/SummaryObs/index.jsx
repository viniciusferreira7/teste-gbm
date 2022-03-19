import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from '../../customHook/useFetch';

export const SummaryObs = () => {
  const inputRef = useRef();

  //eslint-disable-next-line
  const [result, loading] = useFetch(
    'https://api.tot.apigbmtech.com/api/selective-process/observation?authorization=67c9d5c3887b64c33671bb25f681753a',
  );

  const [value, setValue] = useState('Carregando observações...');

  useEffect(() => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks PUT Request Example' }),
    };
    fetch(
      'https://api.tot.apigbmtech.com/api/selective-process/observation?authorization=67c9d5c3887b64c33671bb25f681753a',
      requestOptions,
    )
      .then((response) => response.json())
      .then((data) => setValue(data[0].observation));
  }, [value]);

  console.log(result);
  return (
    <form>
      <input ref={inputRef} type="text" onChange={() => setValue(inputRef.current.value)} />
      <button>Enviar</button>
    </form>
  );
};
