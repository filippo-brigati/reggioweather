const Right = (data) => {
    return (
        <>
        <div className="grid grid-cols-2 gap-x-16 gap-y-2">
            <div className="col-span-2 flex justify-center lg:justify-start items-center pb-8">
                <h3 className="text-4xl xl:text-6xl font-bold">{data.props.temp}°</h3>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
                <h3 className="text-lg font-semibold">Feels Temp: {data.props.feelTemp}°</h3>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
                <h3 className="text-lg font-semibold">Humidity: {data.props.hum}%</h3>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
                <h3 className="text-lg font-semibold">Max Temp: {data.props.t_max}°</h3>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
                <h3 className="text-lg font-semibold">Min Temp: {data.props.t_min}°</h3>
            </div>
        </div>
        </>
    )
}

export default Right