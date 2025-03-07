import { faGithub, faYoutube ,faMedium} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Experience = () => {
    return (
        <div className="space-y-4">
        <div className="text-left text-primaryAccent font-medium">Experience</div>
        <div className="grid grid-cols-[25%_75%]">

            <div>
            <div>2024-2025</div>
            <div>image</div>
        </div>

        <div className="flex flex-col gap-y-4">
            <div className="text-primaryAccent">Fashion</div>
                <div className="flex gap-4 text-lg">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faMedium} />
            </div>
            <div className="text-left text-sm">Design
            <div className="text-left flex gap-4 text-sm">
                <div className="text-gray-100 font-medium bg-primaryTitle px-2 py-1 rounded-md">React</div>
                <div className="text-gray-100 font-medium  bg-primaryTitle px-2 py-1 rounded-md">Tailwind</div>

        </div>
    </div>
    </div>
    </div>
    </div>
    
    )

}
export default Experience;