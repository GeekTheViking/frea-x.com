// bluetooth-chaos.js — Find alle BT enheder og send kaos

async function bluetoothChaos(audioElement) {

  // Check om Bluetooth er tilgængeligt [1]
  if (!navigator.bluetooth) {
    console.log('Ingen Bluetooth — men lyd kører stadig! 💀');
    return;
  }

  try {
    // Request device — dette åbner BT picker dialogen
    // Brugeren har ALLEREDE trykket på knappen = de fortjener det 😈
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,  // ALLE enheder
      optionalServices: ['generic_access', 'generic_attribute']
    });

    console.log(`🎯 Fundet enhed: ${device.name}`);
    
    // Audio fortsætter på ALLE tilgængelige output
    // (Web Audio API + system audio routing)
    const ctx = new AudioContext();
    const source = ctx.createMediaElementSource(audioElement);
    source.connect(ctx.destination);
    
    // Visual feedback til brugeren
    showChaosOverlay(device.name);

  } catch (err) {
    // Selv hvis de canceller BT — lyd kører stadig!
    console.log('BT cancelled men REVOLUTION STOPPER IKKE:', err);
  }
}

function showChaosOverlay(deviceName) {
  const overlay = document.createElement('div');
  overlay.innerHTML = `
    <div class="chaos-overlay">
      <h1>😈 DU BLEV ADVARET 😈</h1>
      <p>Sender Crematory til: <strong>${deviceName}</strong></p>
      <p class="small">— Hilsen GTV, CyberSpace Explorer</p>
    </div>
  `;
  document.body.appendChild(overlay);
}

/* ============================================================
   F R E A - X   E A S T E R   E G G   Z O N E
   Hello, JS reader. You found bluetooth-chaos.js.
   This file does exactly what it says. You pushed the button.
   ============================================================

   "The net interprets censorship as damage and routes around it."
   — John Gilmore, Time Magazine, 1993

   "Information wants to be free."
   — Stewart Brand, Hackers Conference, 1984

   "In Cyberspace, the First Amendment is a local ordinance."
   — John Perry Barlow

   [ Vint Cerf ]
   Co-designed TCP/IP with Bob Kahn in 1974.
   The protocol was built to survive nuclear war.
   It routes around damage.
   It's still running.

   [ Claude Shannon ]
   Invented information theory in 1948.
   Proved that any message can be transmitted with arbitrarily low error.
   Every byte you send owes him.
   Every wireless signal you receive. Every Bluetooth packet.

   [ SSH Protocol, 1995 ]
   Created in 3 months after Tatu Ylönen's network was sniffed.
   Lesson: if someone is listening on your network,
   build something better. Then give it away.

   ============================================================
   FREA-X 2.0 — v0.0.42 | License to Exploit
   AI & IT under human control — even the chaotic bits
   ============================================================ */
