async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here
  document.querySelector('#weatherWidget').computedStyleMap.display = 'none'
document.querySelector('#citySelect').addEventListener('change', async evt => {
  console.log('selection changed')
  try {
    document.querySelector('#citySelect').setAttribute('disabled', 'disabled')
    document.querySelector('#weatherWidget').computedStyleMap.display = 'none'
    document.querySelector('.info').textContent = "Fetching weaher data..."

    console.log(evt.target.value)
    let city = evt.target.data
    let url = `http://localhost:3003/api/weather?city=${city}`
    const res = await axios.get(url)
    document.querySelector('#weatherWidget').Style.display = 'block'
    document.querySelector('.info').textContent = ""
    evt.target.removeAttribute('disabled')
    let {data} = res
    document.querySelector('#apparentTemp div:nth-child[2]')
    .textContent = `${data.current.apparent.temperature}`
      document.querySelector('#todayDescriptiom')
      .textContent = description.find(d=> d[0] === data.curent.weather.description)[1]
      document.querySelector('#todayStats div:nth-child[1]')
      .textContent = `${data.current.apparent.temperature_min}/${data.current.temperature_max}`
      document.querySelector('#todayStats div:nth-child[2]')
      .textContent = `Presipitation: ${data.current.precipitation_probability} - 100%`
      document.querySelector('#todayStats div:nth-child[3]')
      .textContent = `Humidity: ${data.current.humidity}%`
      document.querySelector('#todayStats div:nth-child[4]')
    .textContent = `Wind: ${data.current.wind_speed} m/s`

    data.forecast.forEach((day, i) => {
      let card = document.querySelector('.next-day')[idx]
      
      let weekDay = card.children[0]
      let apparent = card.children[1]
      let minMax = card.children[2]
      let precip  = card.children[3]
      
      weekDay.textContent = getWeekDay(day.date)
      apparent.textContent = descriptions.find(d => d[0] === day.weather.description)[1]
      minMax.textContent = `${day.temperature_min}/${day.temperature_max}`
      precip.textContent = `Precipitation: ${day.precipitation_probability}%`
  })

  document.querySelector('#location').firstElementChild.textContent = data.location.city
  } catch (err) {
    console.log(`promise rejected with an err message ===>`, err.message)

  }
})
function getWeekDay(date) {
 return date
}
  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
