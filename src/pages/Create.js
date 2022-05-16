import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import {FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField} from '@material-ui/core'

const useStyles = makeStyles({
    field: {
        marginBottom: 20, marginTop: 20, display: "block"
    }
})

export default function Create() {
    const classes = useStyles()

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')

    const handleSubmit = (e) => {
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }

        if (details === '') {
            setDetailsError(true)
        }

        e.preventDefault()
        if (title && details ) {
            console.log(title, details, category)
        }
    }

    return (<Container size="sm">
        <Typography
            className={classes.title}
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            Create a New Note
        </Typography>

        <form noValidate autoComplete={'off'} onSubmit={handleSubmit}>
            <TextField
                onChange={(e) => setTitle(e.target.value)}
                className={classes.field}
                label={'Note Title'}
                variant={"outlined"}
                color={"secondary"}
                fullWidth
                required
                error={titleError}
            />
            <TextField
                onChange={(e) => setDetails(e.target.value)}
                className={classes.field}
                label='Details'
                variant={"outlined"}
                color={"secondary"}
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
            />

            <FormControl className={classes.field}>
                <FormLabel>Stuff</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                <FormControlLabel control={<Radio/>} label={"Money"} value={'money'}/>
                <FormControlLabel control={<Radio/>} label={"Todos"} value={'todos'}/>
                <FormControlLabel control={<Radio/>} label={"Reminders"} value={'reminders'}/>
                <FormControlLabel control={<Radio/>} label={"Work"} value={'work'}/>
            </RadioGroup>
            </FormControl>

            <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon/>}>
                Submit
            </Button>
        </form>


    </Container>)
}
