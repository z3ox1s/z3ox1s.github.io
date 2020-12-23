document.querySelector('body').addEventListener('load', load())

function load() {
    fetch(`https://ipwhois.app/json/`)
        .then (function (response) {
            if (!response.ok) {
                alert('Invalid/Nonexistant IP!')
            }

            return response.json()
        })
        
        .then (function (data) {
            if (data.message == "invalid IP address") {
                alert('Invalid/Nonexistant IP!')
            } else {
                document.getElementById('iptracked').innerHTML = `<strong>IP Number: </strong>${(data.ip)}`
                document.getElementById('continent').innerHTML = `<strong>Continent: </strong>${(data.continent)}`
                document.getElementById('country').innerHTML = `<strong>Country: </strong>${(data.country)}`
                document.getElementById('state').innerHTML = `<strong>Region: </strong>${(data.region)}`
                document.getElementById('city').innerHTML = `<strong>City: </strong>${(data.city)}`
                document.getElementById('lat').innerHTML = `<strong>Latitude: </strong>${(data.latitude)}`
                document.getElementById('lon').innerHTML = `<strong>Longitude: </strong>${(data.longitude)}`
                document.getElementById('timezone').innerHTML = `<strong>Timezone: </strong>${(data.timezone)}`
                document.getElementById('provider').innerHTML = `<strong>Provider: </strong>${(data.isp)}` 
            }
        })
}

function locate() {
    var ip = String(document.getElementById('ip').value)

    fetch(`https://ipwhois.app/json/${ip}`)
        .then (function (response) {
            if (!response.ok) {
                alert('Invalid/Nonexistant IP!')
            }

            return response.json()
        })

        .then (function (data) {
            if (data.message == "invalid IP address") {
                alert('Invalid/Nonexistant IP!')
            } else {
                document.getElementById('iptracked').innerHTML = `<strong>IP Number: </strong>${(data.ip)}`
                document.getElementById('continent').innerHTML = `<strong>Continent: </strong>${(data.continent)}`
                document.getElementById('country').innerHTML = `<strong>Country: </strong>${(data.country)}`
                document.getElementById('state').innerHTML = `<strong>Region: </strong>${(data.region)}`
                document.getElementById('city').innerHTML = `<strong>City: </strong>${(data.city)}`
                document.getElementById('lat').innerHTML = `<strong>Latitude: </strong>${(data.latitude)}`
                document.getElementById('lon').innerHTML = `<strong>Longitude: </strong>${(data.longitude)}`
                document.getElementById('timezone').innerHTML = `<strong>Timezone: </strong>${(data.timezone)}`
                document.getElementById('provider').innerHTML = `<strong>Provider: </strong>${(data.isp)}`
            }
        })
}
