import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCloud, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faSun, faSnowflake, faPooStorm, faSmog, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Icon = (data) => {
    let iconPath

    if (data.props.icon_id === 800) { iconPath = faSun }
    else if(data.props.icon_id >= 802) { iconPath = faCloud }
    else if(data.props.icon_id === 801) { iconPath = faCloudSun }
    else if(data.props.icon_id >= 701 && data.props.icon_id <= 781) { iconPath = faSmog }
    else if(data.props.icon_id >= 600 && data.props.icon_id <= 622) { iconPath = faSnowflake }
    else if(data.props.icon_id >= 500 && data.props.icon_id <= 531) { iconPath = faCloudSunRain }
    else if(data.props.icon_id >= 300 && data.props.icon_id <= 321) { iconPath = faCloudShowersHeavy }
    else if(data.props.icon_id >= 200 && data.props.icon_id <= 232) { iconPath = faPooStorm }
    else { iconPath += faExclamationCircle }

    return (
        <FontAwesomeIcon icon={iconPath} className="text-black dark:text-gray-100" size={data.props.size}></FontAwesomeIcon>
    )
}

export default Icon