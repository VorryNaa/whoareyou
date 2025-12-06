document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.toLowerCase();
    let message = '';

    if (name === 'mutiara'|| name === 'muti'|| name === "tiara" || name === "Mutiara" || name === "Muti" || name === "Tiara" || name === "MUTIARA" || name === "MUTI" || name === "TIARA") {
        message = 'love you';
    } else if (name === 'bocil' || name === 'cil' || name === 'Bocil' || name === 'Cil' || name === 'BOCIL' || name === 'CIL') {
        message = 'Woopyuuu cill';
    } else if (name === 'sapi' || name === 'capi' || name === 'Sapi' || name === 'Capi' || name === 'SAPI' || name === 'CAPI') {
        message = 'capiiiii';
    } else {
        message = 'siapa luuuu?';
    }

    document.getElementById('message').textContent = message;
});
