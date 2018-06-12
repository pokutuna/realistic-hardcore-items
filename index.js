const THREE = require('three');

import 'expose-loader?THREE!three';
import 'three/examples/js/loaders/MTLLoader';
import 'three/examples/js/loaders/OBJLoader';

console.log([THREE.OBJLoader, THREE.MTLLoader]);
