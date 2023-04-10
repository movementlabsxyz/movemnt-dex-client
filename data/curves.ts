import {curvesModule} from "@/data/modules";

import {CurveType} from "@/types/CurveType";
import {Struct} from "@/types/Struct";

export const curve = (curve: CurveType): Struct => ({
    ...curvesModule,
    struct_name: curve
})