import { API } from 'aws-amplify'
import gql from 'graphql-tag'

const getMyProfile = async () => {
    const result = await API.graphql({
        query: gql`
      query getMyProfile {
        getMyProfile {
          id
          name
          screenName
          imageUrl
          backgroundImageUrl
          bio
          location
          website
          birthdate
          createdAt
          followersCount
          followingCount
          tweetsCount
          likesCounts
        }
      }
    `,
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    const profile = result.data.getMyProfile

    profile.imageUrl = profile.imageUrl || 'default_profile.png'
    return profile
}

export {
    getMyProfile
}