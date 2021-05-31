import Head from 'next/head'
import LeftComponent from '../components/left'
import RightComponet from '../components/right'

export async function getServerSideProps(context) {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Reggio%20Emilia&units=metric&appid=${process.env.REACT_APP_TOKEN_API}`)
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
  //console.log(data)

  return (
    <>
      <Head>
        <title>Reggio Emilia Weather</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5 bg-white dark:bg-gray-600">
          <div className="shadow-xl overflow-hidden w-full md:flex rounded-lg" style={{ maxWidth: 900 }}>
              <div className="flex w-full md:w-1/3 p-10 bg-white dark:bg-gray-700 dark:text-gray-50 text-gray-600 items-center justify-center">
                  <LeftComponent props={{ name: data.name, state: data.sys.country, condition: data.weather[0].main, icon_id: data.weather[0].id }} />
              </div>
              <div className="flex w-full md:w-2/3 p-10 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-50 justify-center items-center">
                  <RightComponet props={{ temp: data.main.temp.toFixed(1), feelTemp: data.main.feels_like.toFixed(1), t_max: data.main.temp_max.toFixed(1), t_min: data.main.temp_min.toFixed(1), hum: data.main.humidity.toFixed(1) }}/>
              </div>
          </div>
      </div>
    </>
  )
}