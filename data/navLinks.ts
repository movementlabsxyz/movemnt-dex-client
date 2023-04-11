import {NavLink} from "@/types/NavLink";

import { MdOutlineSwapHoriz, MdWaterDrop } from "react-icons/md";
import { FaFaucet } from "react-icons/fa";

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
    },
    {
        name: "Faucet",
        path: "/faucet",
        icon: FaFaucet
    }
]

export default navLinks;