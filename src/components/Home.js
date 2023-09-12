import { Typography } from "@mui/material";
import { makeStyles } from "@mui/material"

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        backgroundColor: '#fefefe',
    },
}));

function Home() {

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Typography variant="h2">
                Welcome to my portfolio page!
            </Typography>
        </div>
        // banner with nav

        // about me
        // projects
        // blog

    )
}
export default Home;