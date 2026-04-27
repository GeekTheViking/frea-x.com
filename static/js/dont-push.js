// dont-push.js — Frea-X "Don't Push This Button"
// Ref: Hitchhiker's Guide, Astronauts (2005), Fars Fede Ferie,
//      The Big Red Button, Wario Ware, Nuclear Launch Codes

const btn = document.getElementById('dont-push-btn');

btn.addEventListener('click', async () => {

  // === STEP 1: VOLUME TIL MAX ===
  // (Bruger har allerede trykket = user gesture = vi MÅ spille lyd!)
  const audio = new Audio('/audio/crematory-revolution.mp3');
  audio.volume = 1.0;

  // === STEP 2: SPIL FOR FULD UDBLÆSNING ===
  try {
    await audio.play();
    console.log('💀 REVOLUTION ER I GANG 💀');
  } catch (e) {
    console.error('Selv Crematory kan stoppes af Chrome policies:', e);
  }

  // === STEP 3: WEB BLUETOOTH CHAOS ===
  await bluetoothChaos(audio);

});
