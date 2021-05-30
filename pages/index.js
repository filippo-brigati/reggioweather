import Head from 'next/head'
import LeftComponent from '../components/left'
import RightComponet from '../components/right'

export async function getStaticProps(context) {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Reggio%20Emilia&units=metric&appid=d223d72ce260e9719c1aa55a155ffcf9`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Home({ data }) {
  console.log(data)
  let iconPath = '/img/'

  if (data.weather[0].id === 800) { iconPath += 'sun-solid.svg' }
  else if(data.weather[0].id > 802) { iconPath += 'cloud-solid.svg' }
  else if(data.weather[0].id === 801) { iconPath += 'cloud-sun-solid.svg' }
  else if(data.weather[0].id >= 701 && data.weather[0].id <= 781) { iconPath += 'smog-solid.svg' }
  else if(data.weather[0].id >= 600 && data.weather[0].id <= 622) { iconPath += 'snowflake-solid.svg' }
  else if(data.weather[0].id >= 500 && data.weather[0].id <= 531) { iconPath += 'cloud-sun-rain-solid.svg' }
  else if(data.weather[0].id >= 300 && data.weather[0].id <= 321) { iconPath += 'cloud-showers-heavy-solid.svg' }
  else if(data.weather[0].id >= 200 && data.weather[0].id <= 232) { iconPath += 'poo-storm-solid.svg' }
  else { iconPath += 'error.svg' }

  console.log(iconPath)

  return (
    <>
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5 bg-white dark:bg-gray-800">
            <div className="rounded shadow-xl overflow-hidden w-full md:flex" style={{ maxWidth: 900 }} x-init="stockTicker.renderChart()">
                <div className="flex w-full md:w-1/3 p-10 bg-white text-gray-600 items-center justify-center">
                    <LeftComponent props={{ name: data.name, state: data.sys.country, condition: data.weather[0].main, iconPATH: iconPath }} />
                </div>
                <div className="flex w-full md:w-2/3 p-10 bg-gray-100 text-gray-600 justify-center items-center">
                    <RightComponet props={{ temp: data.main.temp.toFixed(1), feelTemp: data.main.feels_like.toFixed(1), t_max: data.main.temp_max.toFixed(1), t_min: data.main.temp_min.toFixed(1), hum: data.main.humidity.toFixed(1) }}/>
                </div>
            </div>
        </div>
    </>
  )
}