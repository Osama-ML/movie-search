export function generarID() {
  var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  var idGenerado = '';
  for (var i = 0; i < 6; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    idGenerado += caracteres.charAt(indice);
  }
  return idGenerado;
}

export function parseFetchedData(data) {
  let resultData = [];
  data.map((item) => {
    let objStructure = {};
    Object.keys(item).map((key) => {
      if (key.includes('#')) {
        let keyFormated = key.slice(1).toLowerCase();
        objStructure[ keyFormated ] = item[ key ];
      } else {
        objStructure[ key ] = item[ key ];
      }
    });
    resultData.push(objStructure);
  });
  return resultData;
}

export function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}


export const showLoader = () => {
  const loaderShowEvent = new CustomEvent('show-loader', {
    detail: true,
    bubbles: true,
    composed: true,
  })
  return loaderShowEvent;
}

export const hideLoader = () => {
  const loaderHideEvent = new CustomEvent('show-loader', {
    detail: false,
    bubbles: true,
    composed: true,
  })
  return loaderHideEvent;
}