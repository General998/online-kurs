import {Icons} from "./Icons.jsx";

function Listings({children}){
    return (<li
        className="grid grid-cols-12  min-w-full "
    >
        <div className="inline max-w-fit pt-[3px]">
            <Icons.checked className="mt-1" />
        </div>
        <p className="col-span-11 text-base flex">
            {children}
        </p>
    </li>)
}
export default Listings;
