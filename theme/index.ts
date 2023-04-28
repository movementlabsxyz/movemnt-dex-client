import {extendTheme} from "@chakra-ui/react";

import colors from "@/theme/colors";
import fonts from "@/theme/fonts";
import config from "@/theme/config";

const theme = extendTheme({
    config,
    colors,
    fonts
});

export default theme;