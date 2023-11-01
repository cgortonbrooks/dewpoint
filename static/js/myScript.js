console.log('This is running...')

const dewPtDiv = document.getElementById("dewPtDiv");
getWx();

async function getWx() {
    const response = await fetch("https://api.weather.gov/stations/KLWM/observations/latest?require_qc=false");
    const wx = await response.json();
    const wxTime = wx.properties.timestamp;
    const dewPtC = wx.properties.dewpoint.value;
    const dewPtF = (Math.round(((dewPtC * 9 / 5) + 32) * 10) / 10).toFixed(1);
    console.log(wxTime, dewPtF);
    dewPtDiv.innerHTML = "The Dewpoint is " + dewPtF + "°F";
}