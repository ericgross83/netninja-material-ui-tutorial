import React from 'react';
import {Card, CardContent, CardHeader, IconButton, Typography} from "@material-ui/core";
import {DeleteOutline} from "@material-ui/icons";

function MoreVertIcon() {
    return null;
}

export default function NoteCard({note, handleDelete}) {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <DeleteOutline onClick={() => handleDelete(note.id)} />
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
