import React from "react";
import { Grid } from "@material-ui/core";
import HighlightCard from "./HighlightCard";
export default function HighLight({ report }) {
    const data = report ? report[report.length - 1] : [];
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Tử vong',
            count: data.Deaths,
            type: 'deaths'
        }
    ]
    return <Grid container spacing={3}>
        {summary.map((item, index) => <HighlightCard title={item.title} count={item.count} type={item.type} key={index} />)}
    </Grid>
}