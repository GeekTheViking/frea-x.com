// Når dashboardet loader
document.addEventListener('DOMContentLoaded', function() {
    // Hent seneste mails fra dit API
    fetch('/api/mails/latest')
        .then(response => response.json())
        .then(mails => {
            const mailList = document.querySelector('.mail-list');
            if(mailList) {
                mailList.innerHTML = mails.map(mail => 
                    `<li><strong>${mail.from}</strong> — ${mail.subject}</li>`
                ).join('');
            }
        });

    // Hent filplads fra Seafile/Nextcloud API
    fetch('/api/storage/usage')
        .then(response => response.json())
        .then(data => {
            const storageCard = document.querySelector('.stat-card:last-child .stat-number');
            if(storageCard) {
                storageCard.textContent = `${data.used} GB`;
            }
        });
});
