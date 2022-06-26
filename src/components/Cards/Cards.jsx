import React from "react"
import { Card, CardContent, Typography, Grid, Icon } from "@mui/material"
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" fontWeight="bold" gutterBottom>Infected</Typography>
                        <Typography variant="h5" element>
                            <CountUp start={0} end={confirmed.value} duration={2.50} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>    
                        <Typography variant="body2">Number of infected case covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" fontWeight="bold" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.50} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" fontWeight="bold" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.50} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards