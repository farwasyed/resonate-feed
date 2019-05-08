import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import twfeed from './twfeed.css';

export default class TwFeed extends React.Component {

  render(){
    return(
      <div class="box">
        <p>Twitter feed for ResonateAU!!</p>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ResonateAU"
        options={{height: 400}}
        />
      </div>

    );
  }
}
