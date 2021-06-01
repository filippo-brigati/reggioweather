import Head from 'next/head'
import LeftComponent from '../components/left'
import RightComponet from '../components/right'
import Daily from '../components/daily'

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=44.69825&lon=10.63125&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_TOKEN_API}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data } // will be passed to the page component as props
  }
}

export default function Home({ data }) {
  const days = data.daily.slice(1, 8)

  return (
    <>
      <Head>
        <title>Reggio Emilia Weather</title>
      </Head>
      <div className="w-full min-h-screen bg-white dark:bg-gray-600 flex justify-center">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 mt-0 pb-8 md:pb-0 md:mt-32 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-50" style={{ maxWidth: 900 }}>
          <div className="col-span-1 p-10 bg-white dark:bg-gray-700">
            <LeftComponent props={{ condition: data.current.weather[0].main, icon_id: data.current.weather[0].id }} />
          </div>
          <div className="col-span-1 md:col-span-2 p-10 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-50">
            <RightComponet props={{ temp: data.current.temp.toFixed(1), feelTemp: data.current.feels_like.toFixed(1), hum: data.current.humidity.toFixed(1), t_max: data.daily[0].temp.max, t_min: data.daily[0].temp.min }}/>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-7">
              {days.map((day) => {
                return (
                  <div key={day.dt} className="col-span-1 hover:bg-gray-300 dark:hover:bg-gray-700 py-2 md:py-6">
                    <Daily props={day} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}