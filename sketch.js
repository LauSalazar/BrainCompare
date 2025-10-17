// === Simulación de dos cerebros ===
// Uno "sano" y uno con Alzheimer
// por Laura S. — concepto: la escritura del cuerpo

let t = 0;
let brainNormal = {};
let brainAlzheimer = {};

function setup() {
  let canvas = createCanvas(900, 500);
  canvas.parent('sketch-container');
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0, 0, 10, 20);
  incrementTime();

  updateBrainNormal();
  updateBrainAlzheimer();

  push();
  translate(width * 0.3, height / 2);
  drawBrain(brainNormal, "normal");
  pop();

  push();
  translate(width * 0.7, height / 2);
  drawBrain(brainAlzheimer, "alzheimer");
  pop();

  noStroke();
  fill(0, 0, 80);
  textAlign(CENTER);
  textSize(16);
  text("Escrituras del cuerpo — izquierda: coherencia / derecha: fragmento", width / 2, height - 20);
}


function updateBrainNormal() {
  brainNormal.delta = noise(t) * 0.3;
  brainNormal.theta = noise(t + 10) * 0.4;
  brainNormal.alpha = noise(t + 20) * 0.8;
  brainNormal.beta = noise(t + 30) * 0.9;
  brainNormal.gamma = noise(t + 40) * 0.9;
}

function updateBrainAlzheimer() {
  brainAlzheimer.delta = noise(t + 100) * 0.8;
  brainAlzheimer.theta = noise(t + 110) * 0.7;
  brainAlzheimer.alpha = noise(t + 120) * 0.3 + random(-0.05, 0.05);
  brainAlzheimer.beta = noise(t + 130) * 0.2 + random(-0.1, 0.1);
  brainAlzheimer.gamma = noise(t + 140) * 0.1 + random(-0.1, 0.1);
  for (let k in brainAlzheimer) brainAlzheimer[k] = constrain(brainAlzheimer[k], 0, 1);
}

function drawBrain(brain, type) {
  let baseHue = type === "normal" ? 200 : 20;
  let size = map(brain.alpha, 0, 1, 50, 200);
  let pulse = sin(frameCount * 0.02) * 20;

  fill(
    baseHue + map(brain.gamma, 0, 1, -20, 20),
    80,
    map(brain.beta, 0, 1, 60, 100),
    80
  );

  ellipse(0, 0, size + pulse, size + pulse);

  // "Ondas" externas — representan actividad cerebral
  for (let i = 0; i < 50; i++) {
    let angle = TWO_PI * i / 50;
    let rad = size / 2 + noise(t + i * 0.1) * 100 * brain.theta;
    let x = cos(angle) * rad;
    let y = sin(angle) * rad;

    let alpha = map(brain.gamma, 0, 1, 10, 80);
    fill(baseHue + random(-10, 10), 60, 100, alpha);

    if (type === "alzheimer") {
      // escritura fragmentada: dispersión y ruido
      ellipse(x + random(-20, 20), y + random(-20, 20), 5, 5);
    } else {
      // escritura coherente: fluidez
      ellipse(x, y, 5, 5);
    }
  }
}

// Incrementar tiempo para el ruido
function keyPressed() {
  if (key === ' ') noLoop(); // pausa con espacio
}
function mousePressed() {
  loop(); // reanudar con click
}
function incrementTime() {
  t += 0.01;
}
