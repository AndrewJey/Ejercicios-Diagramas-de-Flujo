/* Ejercicios de Diagramas de Flujo — Algoritmos clásicos con traza paso a paso */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.FlowchartAlgorithms = factory();
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  function parImpar(n) {
    var v = Number(n);
    if (!Number.isInteger(v)) return { ok: false, error: 'Ingrese un número entero.' };
    var esPar = v % 2 === 0;
    return {
      ok: true,
      result: esPar ? 'Par' : 'Impar',
      steps: ['Inicio', 'Leer n = ' + v, 'Calcular residuo: ' + v + ' % 2 = ' + Math.abs(v % 2), '¿Residuo == 0? -> ' + (esPar ? 'Sí (Par)' : 'No (Impar)'), 'Fin']
    };
  }

  function mayorDeTres(a, b, c) {
    var x = Number(a), y = Number(b), z = Number(c);
    if (![x, y, z].every(Number.isFinite)) return { ok: false, error: 'Ingrese 3 números válidos.' };
    var mayor = x;
    var steps = ['Inicio', 'Leer a=' + x + ', b=' + y + ', c=' + z, 'mayor = a (' + x + ')'];
    if (y > mayor) { mayor = y; steps.push('b > mayor -> mayor = ' + y); } else { steps.push('b <= mayor -> se mantiene ' + mayor); }
    if (z > mayor) { mayor = z; steps.push('c > mayor -> mayor = ' + z); } else { steps.push('c <= mayor -> se mantiene ' + mayor); }
    steps.push('Mostrar mayor = ' + mayor, 'Fin');
    return { ok: true, result: mayor, steps: steps };
  }

  function factorial(n) {
    var v = Number(n);
    if (!Number.isInteger(v) || v < 0 || v > 20) return { ok: false, error: 'Ingrese un entero entre 0 y 20.' };
    var acc = 1;
    var steps = ['Inicio', 'Leer n = ' + v, 'acc = 1'];
    for (var i = 1; i <= v; i++) {
      acc *= i;
      steps.push('i = ' + i + ' -> acc = ' + acc);
    }
    steps.push('Resultado: ' + v + '! = ' + acc, 'Fin');
    return { ok: true, result: acc, steps: steps };
  }

  function fibonacci(count) {
    var n = Number(count);
    if (!Number.isInteger(n) || n < 1 || n > 30) return { ok: false, error: 'Ingrese cantidad entre 1 y 30.' };
    var seq = [];
    var a = 0, b = 1;
    var steps = ['Inicio', 'Leer cantidad = ' + n];
    for (var i = 0; i < n; i++) {
      seq.push(a);
      steps.push('Paso ' + (i + 1) + ': emitir ' + a);
      var next = a + b;
      a = b;
      b = next;
    }
    steps.push('Fin');
    return { ok: true, result: seq, steps: steps };
  }

  function esPrimo(n) {
    var v = Number(n);
    if (!Number.isInteger(v)) return { ok: false, error: 'Ingrese un número entero.' };
    if (v < 2) return { ok: true, result: false, steps: ['Inicio', 'Leer n = ' + v, 'n < 2 -> No es primo', 'Fin'] };
    var steps = ['Inicio', 'Leer n = ' + v];
    for (var d = 2; d * d <= v; d++) {
      if (v % d === 0) {
        steps.push('Divisible por ' + d + ' -> No es primo', 'Fin');
        return { ok: true, result: false, steps: steps };
      }
      steps.push('Probar divisor ' + d + ' -> residuo ' + (v % d));
    }
    steps.push('Sin divisores propios -> Es primo', 'Fin');
    return { ok: true, result: true, steps: steps };
  }

  function evaluarNota(notas) {
    var arr = (Array.isArray(notas) ? notas : []).map(Number).filter(Number.isFinite);
    if (!arr.length) return { ok: false, error: 'Ingrese al menos una calificación numérica.' };
    var sum = arr.reduce(function (a, b) { return a + b; }, 0);
    var avg = Number((sum / arr.length).toFixed(2));
    var estado = avg >= 70 ? 'Aprobado' : (avg >= 60 ? 'Ampliación' : 'Reprobado');
    return { ok: true, result: { promedio: avg, estado: estado }, steps: ['Inicio', 'Leer notas: [' + arr.join(', ') + ']', 'Promedio = ' + avg, 'Estado = ' + estado, 'Fin'] };
  }

  return { parImpar: parImpar, mayorDeTres: mayorDeTres, factorial: factorial, fibonacci: fibonacci, esPrimo: esPrimo, evaluarNota: evaluarNota };
});
