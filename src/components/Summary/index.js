import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getMapDataByCountryId } from "../../apis";
import HighMap from "../Chart/HighMap";
import LineChart from "../Chart/LineCharts";
export default function Summary({ countryId, report }) {
    const [mapData, setMapData] = useState({});
    useEffect(() => {
        if (countryId) {
            getMapDataByCountryId(countryId)
                .then((res) => {
                    setMapData(res);
                })
                .catch((err) => console.log({ err }));
        }
    }, [countryId]);
    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report} />
            </Grid>
            <Grid item sm={4} xs={12}>
                <HighMap mapData={mapData} />
            </Grid>
        </Grid>
    )
}