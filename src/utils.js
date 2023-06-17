export function generarID() {
  var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  var idGenerado = '';
  for (var i = 0; i < 6; i++) {
    var indice = Math.floor(Math.random() * caracteres.length);
    idGenerado += caracteres.charAt(indice);
  }
  return idGenerado;
}
