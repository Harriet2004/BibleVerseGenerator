const button = document.querySelector('.button button');
const passage = document.querySelector('.passage p');
const verse = document.querySelector('.verse p');

function fetchRandomVerse() {
    fetch('verses.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const randomVerse = data[Math.floor(Math.random() * data.length)];
            passage.textContent = `${randomVerse.BOOK} ${randomVerse.CHAPTER}:${randomVerse.VERSE}`;
            verse.innerHTML = `
                <i class="fas fa-quote-left"></i>
                ${randomVerse.CONTENT}
                <i class="fas fa-quote-right"></i>
            `;
        })
        .catch(error => console.error('Error fetching verse:', error));
}

document.addEventListener('DOMContentLoaded', fetchRandomVerse);
button.addEventListener('click', fetchRandomVerse);
