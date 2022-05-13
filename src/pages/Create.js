import React from 'react'
import {Typography} from "@mui/material";

export default function Create() {
    return (
        <div>
            <Typography
            variant={"h6"}
            component={"h2"}
            gutterBottom
            color={"textSecondary"}
            >
                Create a New Note
            </Typography>
        </div>
    )
}
