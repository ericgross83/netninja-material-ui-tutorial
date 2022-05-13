import React from 'react'
import {Button, ButtonGroup, Container, Typography} from "@mui/material";
import {logDOM} from "@testing-library/react";

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
                onClick={() => console.log('you clicked me')}>
                Submit
            </Button>


        </Container>
    )
}
