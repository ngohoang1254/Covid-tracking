import { Card, CardContent, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
        if (props.type === "recovered") return { borderLeft: '5px solid #28a745' };
        else return { borderLeft: '5px solid gray' }
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
    },
    count: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default function HighlightCard({ title, count, type }) {
    const style = useStyles({ type })
    return (
        < Grid item sm={4} xs={12} >
            <Card className={style.wrapper}>
                <CardContent>
                    <Typography component="p" className={style.title}>{title}</Typography>
                    <Typography component="p" className={style.count}>{count}</Typography>
                </CardContent>
            </Card>
        </Grid >
    )

}