function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();

    const estOffset = -7 * 60;
    const estTime = new Date(now.getTime() + (estOffset - now.getTimezoneOffset()) * 60000);

    let hours = estTime.getHours();
    const minutes = String(estTime.getMinutes()).padStart(2, '0');
    const seconds = String(estTime.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime(); 
