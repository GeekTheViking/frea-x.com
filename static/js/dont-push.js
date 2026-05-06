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

/* ============================================================
   F R E A - X   E A S T E R   E G G   Z O N E
   Hello, JS reader. You found dont-push.js.
   You were warned. Now you're reading the source. Good.
   ============================================================

   "The best features are the ones you have to earn."
   — Frea-X 2.0

   "Root access is not a privilege. It is a responsibility."
   — Frea-X Approved

   "In Cyberspace, nobody can hear you segfault."
   — Frankenstein AI

   [ Kevin Mitnick ]
   The FBI's most wanted hacker in the 1990s.
   His most powerful tool was never a computer.
   It was a phone and a convincing voice.
   Social engineering beats every firewall.

   [ Aaron Swartz ]
   Co-authored RSS 1.0 at age 13.
   Believed information should be free.
   He was right.

   [ Bitcoin Genesis Block, 2009 ]
   Block 0. January 3, 2009.
   Embedded in the coinbase:
   "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."
   A timestamp. And a manifesto.

   ============================================================
   FREA-X 2.0 — v0.0.42 | License to Exploit
   "To infinity... and beyond, CyberSpace"
   ============================================================ */
