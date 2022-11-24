import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
    ...chakraTheme.fonts,
    body: `"JetBrains Mono", monospace`,
    heading: `"JetBrains Mono", monospace`,
}

const breakpoints = {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em',
}

const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
}

const customTheme = extendTheme(overrides);

export default customTheme;
