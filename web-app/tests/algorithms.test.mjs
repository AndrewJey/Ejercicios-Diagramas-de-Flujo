import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const A = require('../algorithms.js');

test('all 6 flowchart algorithms return accurate results and step traces', () => {
  assert.equal(A.parImpar(14).result, 'Par');
  assert.equal(A.parImpar(9).result, 'Impar');
  assert.equal(A.mayorDeTres(12, 45, 29).result, 45);
  assert.equal(A.factorial(5).result, 120);
  assert.equal(A.factorial(-1).ok, false);
  assert.deepEqual(A.fibonacci(6).result, [0, 1, 1, 2, 3, 5]);
  assert.equal(A.esPrimo(29).result, true);
  assert.equal(A.esPrimo(1).result, false);
  assert.equal(A.evaluarNota([80, 90, 70]).result.estado, 'Aprobado');
});
