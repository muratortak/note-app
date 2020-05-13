import React, { Component } from 'react'
import { Grid, Card } from '@material-ui/core';


class Notes extends Component {
    render() {
        return (
            <Grid>
                <Grid>
                    <Grid>
                        Panel for managing Note Categories such as add, delete edit.
                    </Grid>
                    Categories for notes
                </Grid>
                <Grid>
                    <Card>
                        for each notes...
                    </Card>
                </Grid>
            </Grid>

        )
    }
}

export default Notes
