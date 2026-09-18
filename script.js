const clockElements = document.querySelectorAll('[data-timezone]');
const dateElements = document.querySelectorAll('[data-date-timezone]');

function updateClocks() {
  const now = new Date();

  clockElements.forEach((clock) => {
    const timezone = clock.dataset.timezone;
    clock.textContent = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: timezone
    }).format(now);
  });

  dateElements.forEach((date) => {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      timeZone: date.dataset.dateTimezone,
      timeZoneName: 'short'
    });
    date.textContent = dateFormatter.format(now);
  });
}

updateClocks();
setInterval(updateClocks, 1000);