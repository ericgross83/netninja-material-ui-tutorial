import React from 'react';
import {Card, CardContent, CardHeader, IconButton, makeStyles, Typography} from "@material-ui/core";
import {DeleteOutline} from "@material-ui/icons";

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category === 'work'){
                return '1px solid red'
            }
        }
    }
})

function MoreVertIcon() {
    return null;
}

export default function NoteCard({note, handleDelete}) {
    const classes = useStyles(note)

    return (
        <div>
            <Card elevation={1} className={classes.test}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <DeleteOutline onClick={() => handleDelete(note.id)}/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"}>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};
