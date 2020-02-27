import React from 'react'
import { IRating } from '../../State/Offers/offer.type'
import { Review, Stars, Reviewers, Rating } from './ReviewSection.styled'

const ReviewSection = ({ rating }: { rating: IRating }): JSX.Element | null => {
  if (rating.count === 0) {
    return null
  }
  const numberOfStars = rating.value / 20
  return (
    <Review>
      <Stars>{numberOfStars}</Stars>
      <Rating rating={rating.value} />
      <Reviewers>({rating.count})</Reviewers>
    </Review>
  )
}

export default ReviewSection
