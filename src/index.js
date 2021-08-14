<script src="src/index.js" charset="utf-8"></script>

document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/dice_sets';
    fetch(endPoint)
    .then(res => res.json())
    .then(json => console.log(json));
});