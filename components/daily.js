import Icon from '../components/icon'

const Daily = (data) => {
    const date = new Date(data.props.dt * 1000)

    //console.log(date)
    const day = date.toDateString().substr(0, 3)
    const number = date.toDateString().substring(8, 10)

    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2">
                <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center items-center"><Icon props={{ icon_id: data.props.weather[0].id, size: "lg"}} /></div>
                <div className="col-span-1 md:col-span-2 flex justify-center items-center">
                    <p className="md:pt-2 font-semibold text-gray-600 dark:text-gray-50">{day+' '+number}</p>
                </div>
            </div>
        </div>
    )
}

export default Daily