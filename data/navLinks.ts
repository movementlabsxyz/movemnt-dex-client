import {NavLink} from "@/types/NavLink";

import { MdOutlineSwapHoriz, MdWaterDrop } from "react-icons/md";

const navLinks: NavLink[] = [
    {
        name: "Swap",
        path: "/",
        icon: MdOutlineSwapHoriz
    },
    {
        name: "Pools",
        path: "/pools",
        icon: MdWaterDrop
    }
]

export default navLinks;