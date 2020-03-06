let r, g, b;
let button;
let permissionGranted = false;

/*
 function preload() {
  song = loadSound('Audio/folky.mp3');
}
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  //song.loop();
  

  // DeviceOrientationEvent, DeviceMotionEvent
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    // ios 13 device
    background(255, 0, 0);
    button = createButton("Tune in");
    button.style("font-size", "48px");
    button.center();
    button.mousePressed( requestAccess );

  } else {
    // non ios 13
    background(0, 0, 255);
  }
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
    if (response == 'granted') {
      permissionGranted = true;
    }
  })
  .catch(console.error);
  
  button.remove();
}
  
function mousePressed(){
    //song.play();
  
    background(0, 255, 0); 
}

function draw() {
  if (!permissionGranted) return;
  
  background(0, 255, 0);
  textSize(72);
  
  //Debug orientation
  text("X = " + rotationX, 90, 100);
  text("Y = " + rotationY, 90, 170);
  text("Z = " + rotationZ, 90, 240);

}
