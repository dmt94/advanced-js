/*
JS needed a way to support modules

import module1 from 'module1'
import module2 from 'module2'
*/

const harry = 'potter';
const draco = 'malfoy';

export function jump() {
  return 'jump to the moon';
}

//default import, wont need {} brackets when import
export default function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins!` : `${char2} wins!`;
}