import React from 'react'
import {Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {AddCircleOutlined, SubjectOutlined} from "@material-ui/icons";
import {useHistory, useLocation} from "react-router-dom";

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: "flex"
    },
    active: {
        background: '#f4f4f4'
    }
})


export default function Layout({children}) {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    function handleItemClick(path) {
        history.push(path)

    }


    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color={"secondary"}/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined color={"secondary"}/>,
            path: '/create'
        },
    ]

    return (
        <div className={classes.root}>

            {/* app bar*/}
            <Drawer
                className={classes.drawer}
                variant={"permanent"}
                anchor={"left"}
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant={"h5"}>
                        Ninja Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item => (
                        <ListItem key={item.text}
                                  button
                                  onClick={() => handleItemClick(item.path)}
                                  className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            {/* side drawer */}

            <div className={classes.page}>
                {children}
            </div>
        </div>)
}