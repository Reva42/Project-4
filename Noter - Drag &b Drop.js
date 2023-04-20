// Draggeble Notepad
const noter = document.querySelector ('noter');

noter.addEventListener('dragstart',(event) => {event.dataTransfer.setDate ('text/plain', 'noter'); event.dataTransfer.effectAllowed = 'move'; });
document.addEventListener ('dragover', (event) => {event.preventDefault(); });
document.addEventListener('drop',(event) => {
    const noter = document.querySelector('.noter');
    if (event.dataTransfer.getData('text') === 'noter') {
        const x = event.clientX;
        const y = event.clientY;
        noter.style.left = x + 'px';
        noter.style.top = y + 'px';
    }
});

// Add New Notes 
const addButton = document.querySelector('button');

addButton.addEventListener('click', () => {
    const input = document.querySelector('input');
    const note = document.createElement('div');
    note.textContent = input.value;
    noter.appendChild(note);
    input.value = '';
});
