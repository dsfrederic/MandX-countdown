import baseTheme from "@rafaelquintanilha/gatsby-theme-countdown/src/gatsby-plugin-theme-ui/index";

// Defining the primary color outside so we can reference it later in the svg
const PRIMARY_COLOR = "#0C2D1C";

const theme = {
    ...baseTheme,
    colors: {
        text: "#fff",
        background: PRIMARY_COLOR,
        primary: PRIMARY_COLOR,
        border: "#ccc",
    },
    forms: {
        input: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        select: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        textarea: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        slider: {
            bg: 'muted',
        },
    },
    svg: {
        fill: "#00A300"
    }
}

export default theme