function filterEvents() {
    const city = document.getElementById('filter-city').value;
    const type = document.getElementById('filter-type').value;
    const cards = document.querySelectorAll('.event-card-item');

    cards.forEach(card => {
        const cardCity = card.dataset.city;
        const cardType = card.dataset.type;
        const cityMatch = city === 'الكل' || cardCity === city;
        const typeMatch = type === 'الكل' || cardType === type;

        if (cityMatch && typeMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

const citySelect = document.getElementById('filter-city');
const typeSelect = document.getElementById('filter-type');

if (citySelect) citySelect.addEventListener('change', filterEvents);
if (typeSelect) typeSelect.addEventListener('change', filterEvents);
