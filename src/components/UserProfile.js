import React, { Component, useEffect } from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { logout } from '../actions/user.actions';
import { getMe } from '../actions/user.actions';

function UserProfile(props) {
  return (
    <Grid>
      <Grid>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="User PP"
              height="140"
              image={props.user.image}
              title={props.user.userName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.user.userName}
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                {props.user.description}
                <br />
                {props.user.email}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

// export default connect(mapStateToProps)(UserProfile)
export default UserProfile;
