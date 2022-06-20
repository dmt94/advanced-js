let shapes = [
  'square',
  'octahedron',
  'circle',
  'rose',
  'rectangle',
];


let pureShape = (arr) => {
  if (arr.includes('rose')) {
    console.log('array is not pure');
  }
}

pureShape(shapes);