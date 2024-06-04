function convertToSeconds() {
    let minutes = +document.getElementById("conversion").value;
    let seconds= minutes * 60

    document.getElementById('results').innerText = minutes + "minutes is equal to" + seconds

}