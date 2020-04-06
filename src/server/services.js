const statistics = tweets => {
    const counter  = {}
    counter["dates"] = {};
    counter["languages"] = {};
    counter["hashtags"] = {}
    counter["profile_use_background_image"] = 0;
    counter["geo_enabled"] = 0;
    counter["verified"] = 0;
    counter["has_extended_profile"] = 0
    counter["default_profile"] = 0
    counter["default_profile_image"] = 0
    counter["notifications"] = 0
    counter["user_location"] = {}
    for(let tweet of tweets.statuses){
        if(tweet.created_at in counter.dates){
            counter.dates[tweet.created_at] ++
        } else {
            counter.dates[tweet.created_at] = 1;
        }
        //
        if(tweet.lang in counter.languages){
            counter.languages[tweet.lang] ++
        } else {
            counter.languages[tweet.lang] = 1;
        }
        //
        if(tweet.user.location in counter.user_location){
            counter.user_location[tweet.user.location ] ++
        } else {
            counter.user_location[tweet.user.location ] = 1;
        }
        //
        if(tweet.user.profile_use_background_image){
            counter["profile_use_background_image"] ++
        }
        //
        if(tweet.user.geo_enabled){
            counter["geo_enabled"] ++
        }
        //
        if(tweet.user.verified){
            counter["verified"] ++
        }
        //
        if(tweet.user.has_extended_profile){
            counter["has_extended_profile"] ++
        }
        //
        if(tweet.user.default_profile){
            counter["default_profile"] ++
        }
        //
        if(tweet.user.default_profile_image){
            counter["default_profile_image"] ++
        }
        //
        if(tweet.user.notifications){
            counter["notifications"] ++
        }
        //
        for(let hashtag of tweet.entities.hashtags){
            if(hashtag.text in counter.hashtags){
                counter.hashtags[hashtag.text] ++
            } else {
                counter.hashtags[hashtag.text] = 1;
            }
        }

    }
    return counter
}

module.exports = statistics

