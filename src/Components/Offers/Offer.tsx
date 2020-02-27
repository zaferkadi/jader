import React from 'react'
import { IOffer } from '../../State/Offers/offer.type'
import {
  Card,
  Title,
  OfferWrapper,
  ItemInfo,
  Location,
  Meta,
  CTAWrapper,
  ImageWrapper,
  Button,
  ImageSlider
} from './Offer.styled'

import ReviewSection from './ReviewSection'
import PriceSection from './PriceSection'
import SpaceSection from './SpaceSection'
import { CarouselImage } from '../Carousel/Carousel.styled'
import Carousel from '../Carousel/Carousel'

const Offer = ({ offer }: { offer: IOffer }): JSX.Element => {
  return (
    <Card>
      <OfferWrapper>
        <ImageSlider>
          <ImageWrapper>
            <Carousel>
              {offer.photos.map(({ m }, i) => (
                <CarouselImage img={m} key={i} />
              ))}
            </Carousel>
          </ImageWrapper>
        </ImageSlider>

        <ItemInfo>
          <Meta>
            <Title>{offer.details.name}</Title>
            <Location>{offer.location.name}</Location>
            <SpaceSection details={offer.details} />
            <ReviewSection rating={offer.rating} />
          </Meta>
          <PriceSection price={offer.price} />
        </ItemInfo>
        <CTAWrapper>
          <Button onClick={() => alert('Booked')}>Book this place</Button>
        </CTAWrapper>
      </OfferWrapper>
    </Card>
  )
}

export default Offer
