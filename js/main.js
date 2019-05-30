let renderer, scene, camera, floor, cube, sphere, light, step = 0, controller, stats;

function createRenderer() {

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(`#000000`);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.shadowMap.enabled = true;
  // console.log(renderer)
  return renderer;
}

// createRenderer();

function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    45, //FOV Filter Of View
    window.innerWidth / window.innerHeight, // Screen Ratio
    0.1,
    1000,
  );
  camera.position.set(-30, 40, 30); // x, y, z
  camera.lookAt(0,0,0);

  return camera;
}

function createFloor(){
  const floorMaterial = new THREE.MeshLambertMaterial({
    color: '#cfd8dc',
  });
  const floorGeometry = new THREE.BoxGeometry(60, 0.1, 20);
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  // floor.castShadow = true;
  floor.receiveShadow = true;
  floor.position.set(15, 0, 0);
  return floor;
}

function createLight() {
  const light = new THREE.PointLight('#ffffff');
  light.castShadow = true;
  light.position.set(10, 60, 10);
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  return light;
}

function init() {
  renderer = createRenderer();
  scene = new THREE.Scene();
  camera = new createCamera();

  floor = createFloor();
  scene.add(floor);

  light = createLight();
  scene.add(light);

  document.body.appendChild(renderer.domElement);

  renderer.render(scene, camera);
}

window.onload = init;