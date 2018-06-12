const THREE = require('three');

require('imports-loader?THREE=three!three/examples/js/loaders/MTLLoader');
require('imports-loader?THREE=three!three/examples/js/loaders/OBJLoader');

console.log([THREE.OBJLoader, THREE.MTLLoader]);
