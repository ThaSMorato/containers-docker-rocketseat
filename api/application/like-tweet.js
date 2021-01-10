const LikeTweetUsecase = require('../usecases/like-tweet')
const TweetRepository = require('../adapters/mongodb-tweet-repository')
const { toApplication } = require('./translators/tweet-translator')

const tweetLiked = ctx => tweet => {
  ctx.status = 200
  ctx.body = tweet
}

const LikeTweet = ({ mongoDb }) => {
  const tweetRepository = TweetRepository({ mongoDb })
  const likeTweetUsecase = LikeTweetUsecase({ tweetRepository })

  const like = ctx =>
    likeTweetUsecase
      .like(ctx.params.id)
      .then(toApplication)
      .then(tweetLiked(ctx))

  return {
    like,
  }
}

module.exports = LikeTweet
