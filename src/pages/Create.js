import React from 'react'
import {Button, Container, Typography} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create() {
    return (
        <Container>
            <Typography
                variant={"h6"}
                component={"h2"}
                gutterBottom
                color={"textSecondary"}
            >
                Create a New Note
            </Typography>

            <Button
                color={"secondary"}
                variant={"contained"}
                onClick={() => console.log('you clicked me')}
                endIcon={<KeyboardArrowRightIcon/>}
            >
                Submit
            </Button>


            {/*Icons*/}
            <br/>
            {/*<AcUnitOutlinedIcon/>*/}
            {/*<AcUnitOutlinedIcon color={"secondary"} fontSize={"large"}/>*/}
            {/*<AcUnitOutlinedIcon color={"secondary"} fontSize={"small"}/>*/}
            {/*<AcUnitOutlinedIcon color={"action"} fontSize={"small"}/>*/}
            {/*<AcUnitOutlinedIcon color={"error"} fontSize={"small"}/>*/}
            {/*<AcUnitOutlinedIcon color={"disabled"} fontSize={"small"}/>*/}
        </Container>
    )
}
