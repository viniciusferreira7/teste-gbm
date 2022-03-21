export const calcSummary = (result) => {
  if (result !== null) {
    const soja = () => {
      const RUMO = [];
      const MRS = [];
      const VLI = [];

      result.map((item) => {
        if (item.railroad === 'RUMO' && item.product === 'Soja')
          RUMO.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
        if (item.railroad === 'MRS' && item.product === 'Soja')
          MRS.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
        if (item.railroad === 'VLI' && item.product === 'Soja')
          VLI.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
      });

      const reducer = (number, nextNumber) => {
        return number + nextNumber;
      };
      const total = [RUMO.reduce(reducer, 0), MRS.reduce(reducer, 0), VLI.reduce(reducer, 0)];

      const soma = total.reduce(reducer);
      const soja = {
        rumo: RUMO.reduce(reducer, 0),
        mrs: MRS.reduce(reducer, 0),
        vli: VLI.reduce(reducer, 0),
        soma: soma,
      };
      return soja;
    };

    const milho = () => {
      const RUMO = [];
      const MRS = [];
      const VLI = [];

      result.map((item) => {
        if (item.railroad === 'RUMO' && item.product === 'Milho')
          RUMO.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
        if (item.railroad === 'MRS' && item.product === 'Milho')
          MRS.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
        if (item.railroad === 'VLI' && item.product === 'Milho')
          VLI.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
      });

      const reducer = (number, nextNumber) => {
        return number + nextNumber;
      };

      const total = [RUMO.reduce(reducer, 0), MRS.reduce(reducer, 0), VLI.reduce(reducer, 0)];
      const soma = total.reduce(reducer);
      const milho = {
        rumo: RUMO.reduce(reducer, 0),
        mrs: MRS.reduce(reducer, 0),
        vli: VLI.reduce(reducer, 0),
        soma: soma,
      };
      return milho;
    };

    const somaFinal = () => {
      const RUMO = [];
      const MRS = [];
      const VLI = [];

      result.map((item) => {
        if (item.railroad === 'RUMO') RUMO.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
        if (item.railroad === 'MRS') MRS.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
        if (item.railroad === 'VLI') VLI.push(parseFloat(Number(item.weight).toLocaleString('en-US').replace('.')));
      });

      const reducer = (number, nextNumber) => {
        return number + nextNumber;
      };
      const total = [RUMO.reduce(reducer, 0), MRS.reduce(reducer, 0), VLI.reduce(reducer, 0)];

      const soma = total.reduce(reducer);
      const final = { rumo: total[0], mrs: total[1], vli: total[2], soma: soma };
      return final;
    };

    const all = {
      soja: soja(),
      milho: milho(),
      somaFinal: somaFinal(),
    };

    return all;
  }
};

// createdAt: "2021-12-05T16:25:28.476Z"
// deletedAt: null
// downloadEndTime: "2021-12-05T12:59:38.000Z"
// downloadStartTime: "2021-12-05T12:45:38.000Z"
// id: 1
// observation: " 4545observasddasções..."
// plate: "HFE-055436-7"
// product: "Milho"
// railroad: "VLI"
// updatedAt: "2021-12-05T16:25:38.476Z"
// weight: "84000"
