var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera );

camera.position.z = 120;

function init() {
	var video = document.createElement( 'video' );
	video.width = window.innerWidth;
	video.height = window.innerHeight / 2;
	video.loop = true;
	video.muted = true;
	video.src = '/three-journey/examples/video-texture-360/assets/neotrade.mp4';
	video.setAttribute( 'webkit-playsinline', 'webkit-playsinline' );
	video.play();

	var geometry = new THREE.SphereBufferGeometry( 820, 60, 40 );
	geometry.scale( -1, 1, 1 );

	var texture = new THREE.VideoTexture( video );
	texture.minFilter = THREE.LinearFilter;
	texture.format = THREE.RGBFormat;

	var material = new THREE.MeshBasicMaterial( { map: texture } );
	var mesh = new THREE.Mesh( geometry, material );
	mesh.rotation.y = -Math.PI / 2;
	scene.add( mesh );


	// 	var loader = new THREE.TextureLoader();

	// 	// Load an image file into a custom material
	// 	var material2 = new THREE.MeshLambertMaterial({
  // 	map: loader.load('https://raw.githubusercontent.com/juneidea/Candy/master/FullStackLogo.png')
	// 	});
	//   // Create the cube.
	// 	var geom = new THREE.CubeGeometry(1,1,8, 10);
	// 	cube = new THREE.Mesh(geom, material2);
	
	// 	// Add the cube to the scene.
	// 	scene.add(cube);

  // // Create and add a light source.
  // var globalLight = new THREE.AmbientLight(0xffffff, 1);
  // scene.add(globalLight);

}

function animate () {
	requestAnimationFrame( animate );

	// cube.position.copy( camera.position );
	// cube.rotation.copy( camera.rotation );
	// cube.updateMatrix();
	// cube.translateZ( - 10 );

	controls.update();
	renderer.render(scene, camera);
}

init();
animate();
