function convertText() {
    let inputText = document.getElementById('inputText').value;
    // Convert input text to lowercase for case-insensitive matching
    let lowerCaseText = inputText.toLowerCase();
    for (const [key, value] of Object.entries(translations)) {
        const regex = new RegExp(key, 'gi');  // Create a global, case-insensitive regex for each key
        lowerCaseText = lowerCaseText.replace(regex, value);
    }
    document.getElementById('outputText').innerText = lowerCaseText;
}

function addWordPair() {
    const word = document.getElementById('word').value.toLowerCase();
    const translation = document.getElementById('translation').value;
    if (word && translation) {
        translations[word] = translation;
        alert(`Added translation: "${word}" -> "${translation}"`);
        document.getElementById('word').value = '';
        document.getElementById('translation').value = '';
    } else {
        alert('Please enter both a word and a translation.');
    }
}
