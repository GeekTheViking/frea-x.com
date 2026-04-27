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
