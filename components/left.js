import Icon from '../components/icon'

const Left = (data) => {

    return (
        <div className="bg-white dark:bg-gray-700">
            <h3 className="font-semibold text-2xl flex items-center justify-center">{data.props.name}, {data.props.state}</h3>
            <div className="flex justify-center items-center py-6">
                <Icon props={{ icon_id: data.props.icon_id, size: "4x" }} />
            </div>
            <h3 className="font-semibold text-2xl flex items-center justify-center">{data.props.condition}</h3>
        </div>
    )
}

export default Left