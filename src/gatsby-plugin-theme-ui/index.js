import { bulma } from '@theme-ui/presets'


const PRIMARY_COLOR = "#0C2D1C" // DARKER
const PRIMARY_COLOR_LIGHT = "#49916c"

const theme = {
    ...bulma,
    colors: {
        text: "#000",
        primary: PRIMARY_COLOR,
        background: "#fff"
    },
    forms: {
        // label: {
        //     fontSize: 1,
        // },
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
    fonts: {
        body: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
        heading: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";',
        monospace: 'Menlo, monospace',
      },
    fontSizes: [14, 16, 18, 20, 22, 27, 36, 64, 80],
    lineHeights: {
        text: "1.45",
        heading: "1.1",
    },
    sizes: {
        container: 650,
    },
    styles: {
        Layout: {
            backgroundColor: "background",
            color: "text",
            fontFamily: "body",
            fontSize: 2,
            lineHeight: "text",
            padding: 0,
            overflowY: "auto",
        },
        Header: {
            fontSize: 5,
            height: "20vh",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "flex-end",
            pt: 3,
            pb: [3],
        },
        Main: {
            flex: 1,
            display: "flex"
        },
        Container: {
            padding: 0,
            my: 'auto',
            width: 'auto',
            margin: 0
        },
        Footer: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            pt: [3],
            pb: 2,
            height: "20vh",
        },
        h1: {
            fontWeight: "bolder",
            lineHeight: "heading",
            fontSize: 8,
            margin: 0,
            maxWidth: ["60vw", "500px", "800px"]
        },
        h2: {
            fontWeight: "normal",
            fontSize: 2,
            margin: 0,
            maxWidth: ["90vw", "80vw", "800px"],
        },
    },
    svg: {
        fill: PRIMARY_COLOR
    }
}

export default theme