
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('calendar-table');
    const specialDate = new Date('2024-04-11');
    const currentDate = new Date();

    for (let monthOffset = 0; monthOffset < 12; monthOffset++) {
        const month = new Date(specialDate.getFullYear(), specialDate.getMonth() + monthOffset);
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        container.appendChild(monthDiv);

        const header = document.createElement('div');
        header.className = 'month-header';
        header.textContent = month.toLocaleString('default', { month: 'long' }) + ' ' + month.getFullYear();
        monthDiv.appendChild(header);

        for (let day = 1; day <= daysInMonth(month.getFullYear(), month.getMonth()); day++) {
            const date = new Date(month.getFullYear(), month.getMonth(), day);
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.textContent = day;

            if (date.getDay() !== 0 && date.getDay() !== 6) { // Not Saturday or Sunday
                if (date >= specialDate && date < currentDate) {
                    dayDiv.classList.add('past-workday');
                }
            }

            if (date.toISOString().slice(0, 10) === '2024-04-11') {
                dayDiv.classList.add('special-date');
            }

            monthDiv.appendChild(dayDiv);
        }
    }

    function daysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
});

