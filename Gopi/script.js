const container = document.querySelector('.container');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movie = document.querySelector('#movie');
const seats = document.querySelectorAll('row .seat:not(.occupied)');

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }
updateTicketCountAndPrice()
});

movie.addEventListener('change', (e) => {
    updateTicketCountAndPrice();
}
)

function updateTicketCountAndPrice() {
    const selectedSeats = document.querySelectorAll('.row. seat.selected');
    const ticketValue = movie.value;
    count.innerHTML = selectedSeats.length;
    total.innerHTML = ticketValue * selectedSeats.length;
}