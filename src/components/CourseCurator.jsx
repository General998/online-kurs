import {Title} from "./index.js";
import {Icons} from "./Icons.jsx";

function CourseCurator() {
    return(
        <div className="flex justify-between items-stretch gap-32">
            <div className="bg-[#FFCF2D] min-w-fit h-[580px] relative ]">
                <img
                    src="../../public/curator/image.png"
                    className=" px-4 relative -top-5"
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-8">
                <Title
                    primaryTitle={"Course curator"}
                    secondaryTitle={"Cody Fisher"}
                    btnTitle={" "}
                />
                <p>Senior UX designer in IT Product Company</p>
                <ul className="text-[#424551] text-base  lato-bold flex flex-col ">
                    <li className="grid  grid-cols-9  ">
                        <Icons.star className="fill-[#FF3F3A] " />
                        <p className="col-span-8 ">4.9 rate</p>
                    </li>
                    <li className="grid  grid-cols-9  ">
                        <Icons.video className="fill-[#FF3F3A]" />
                        <p className="col-span-8 ">4 courses</p>
                    </li>
                    <li className="grid  grid-cols-9  ">
                        <Icons.user className="fill-[#FF3F3A]" />
                        <p className="col-span-8 ">350 students</p>
                    </li>
                </ul>
                <p>
                    Mattis adipiscing aliquam eu proin metus a iaculis faucibus.
                    Tempus curabitur venenatis, vulputate venenatis fermentum ante.
                    Nisl, amet id semper semper quis commodo, consequat. Massa
                    rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam.
                    Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo
                    platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam
                    vel aliquam tristique sollicitudin interdum quam.{" "}
                </p>
                <div className="flex items-center gap-6 ">
                    <Icons.fecebook className="fill-[#787A80] -hover:fill-[#FF3F3A]" />
                    <Icons.ve className="fill-[#787A80] hover:fill-[#FF3F3A]" />
                    <Icons.twitter className="fill-[#787A80] hover:fill-[#FF3F3A]" />
                    <Icons.in className="fill-[#787A80] hover:fill-[#FF3F3A] " />
                </div>
            </div>
        </div>

        )
    }
    export  default CourseCurator
