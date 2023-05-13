import Heading from "./Headings";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




function RedirectLink(props) {
    return (
        <>
            <Heading level={5}>{props.titleHeading}</ Heading>
            <FontAwesomeIcon icon={props.iconSrc} className={props.iconName}></FontAwesomeIcon>
            <a href={props.redirectUrl}>{props.textUrl}</a>
        </>
    )
}

export default RedirectLink
