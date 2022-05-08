import { InputAdornment } from '@material-ui/core'
import { Button, Divider, TextField } from '@material-ui/core'
import { VideoCallOutlined, Keyboard } from '@material-ui/icons'
import React from 'react'

function Home() {
  return (
    <div className="homepage">
      <div className="homepage_left">
        <div className="homepage_text">
          <h1 className="homepage_title">
            Premium video meetings. Now free for everyone
          </h1>
          <p className="homepage_subtitle">
          We re-engineered the service we built for secure buisness meetings,
            Google Meet, to make sure it free and available for all
          </p>
        </div>
        <div className="homepage_button">
          <Button color="primary" variant="contained" className="homepage_createBtn">
            <VideoCallOutlined />
            <p>New Meeting</p>
          </Button>
          <TextField className="homepage_input" variant="outlined" placeholder="Enter a code or a link"
          InputProps={{
            startAdornment:(
              <InputAdornment position="start">
                <Keyboard className="icon" />
              </InputAdornment>
            ),
          }}
          />
          <Button className="homepage_joinBtn">Join</Button>
        </div>
        <Divider />

        <p className="homepage_learnMore">Learn more about Google Meet</p>
      </div>
      <div className="homepage_right">
      <img
          className="homepage_image"
          src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"
          alt="Feature IMG"
        />
      </div>
    </div>
  )
}

export default Home