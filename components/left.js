import Image from 'next/image'

const Left = (data) => {
    return (
        <div>
            <h3 className="font-semibold text-2xl flex items-center justify-center">{data.props.name}, {data.props.state}</h3>
            <div className="flex justify-center items-center py-6">
                <Image
                    src={data.props.iconPATH}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                />
            </div>
            <h3 className="font-semibold text-2xl flex items-center justify-center">{data.props.condition}</h3>
        </div>
    )
}

export default Left