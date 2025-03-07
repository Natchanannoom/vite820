import { faGithub, faYoutube ,faMedium} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/picExp1.png";
const Experience = () => {
    return (
        <div className="space-y-4">
        <div className="text-left text-primaryAccent font-medium">Experience</div>
        <div className="grid grid-cols-[25%_75%]">

            <div>
                <div className="text-left">
                    <span className="text-sm">2024-2025</span>
                </div>
                <div>
            <img src={picExp} className="w-5/6 rounded-md border-2" />
        </div>
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
                <div className="text-primaryBase font-medium bg-primaryTitle px-2 py-1 rounded-md hover:text-gray-100">React</div>
                <div className="text-primaryBase font-medium  bg-primaryTitle px-2 py-1 rounded-md  hover:text-gray-100">Tailwind</div>

        </div>
    </div>
    </div>
    </div>
    </div>
    
    )

}
export default Experience;