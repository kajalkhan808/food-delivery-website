import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { PiBowlFoodBold } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const categories = [
    {
      id : 1,
    name : "All",
    icon : <TiThSmallOutline className="w-[60px] h-[60px] text-amber-400 

" />
},
    {
        id : 2,
    name : "breakfast",
    icon : <MdOutlineFreeBreakfast className="w-[60px] h-[60px]   text-amber-400" />
},
    {
        id : 3,
    name : "soups",
    icon : <TbSoup className="w-[60px] h-[60px]   text-amber-400" />
},
    {
        id : 4,
    name : "pasta",
    icon : <PiBowlFoodBold className="w-[60px] h-[60px]   text-amber-400" />
},
    {
        id : 5,
    name : "main course",
    icon :<MdFoodBank className="w-[60px] h-[60px]   text-amber-400" />

},
    {
        id : 6,
    name : "pizza",
    icon : <GiFullPizza  className="w-[60px] h-[60px]   text-amber-400"/>
},
    {
        id : 7,
    name : "burger",
    icon : <GiHamburger className="w-[60px] h-[60px]   text-amber-400" />
}
    
]
export default categories