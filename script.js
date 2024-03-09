function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
        addToHistory(expression + ' = ' + result);
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function changeTheme() {
    document.body.classList.toggle('dark-theme');
}

function addToHistory(entry) {
    let historyList = document.getElementById('history-list');
    let newEntry = document.createElement('li');
    newEntry.textContent = entry;
    if (historyList.children.length >= 3) {
        historyList.removeChild(historyList.children[0]);
    }
    historyList.appendChild(newEntry);
}