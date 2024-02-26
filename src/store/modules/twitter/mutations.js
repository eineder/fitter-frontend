export default {
  PROFILE_SET(state, profile) {
    state.profile = profile;
  },

  TWITTER_TIMELINE(state, timeline) {
    state.tweets = timeline;
  },

  TWITTER_CREATE(state, newTweet) {
    const tweets = [newTweet, ...state.tweets.tweets];
    state.tweets.tweets = tweets;
  },

  TWITTER_LIKE(state, tweetId) {
    state.tweets.tweets = state.tweets.tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        tweet.liked = true;
        tweet.likes += 1;
      }
      return tweet;
    });
  },

  TWITTER_UNLIKE(state, tweetId) {
    state.tweets.tweets = state.tweets.tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        tweet.liked = false;
        tweet.likes -= 1;
      }
      return tweet;
    });
  },
};
