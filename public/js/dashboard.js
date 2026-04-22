// Freax 2.0 Code Raid - Eksempel på at hente mails fra dit API
async function loadMails() {
    const response = await fetch('/api/mails');  // Din backend
    const mails = await response.json();
    // Vis dem i main området
}

// Kald funktionen når brugeren klikker på "Mails" i menuen
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Hent data via fetch og opdater main
    });
});
