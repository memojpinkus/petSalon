function displayInformation(){
    document.getElementById("salonInformation").innerHTML = `
    <p>Welcome to ${salon.name}</p>
    <p>You can find us at ${salon.address.street}, ${salon.address.number}</p>
    <p>Opened from ${salon.hours.open} to ${salon.hours.close}</p>`
}

displayInformation();