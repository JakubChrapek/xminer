import React from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Image from 'gatsby-image';
import useWindowSize from '../../utils/UseWindowSize';
import MobileSlider from './MobileSlider';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  overflow: hidden;
  padding: ${({last}) => last ? '92px 126px 74px' : '92px 126px 0'};
  > div {
    width: 100%;
  }
  @media (max-width: 1366px) {
    padding: ${({last}) => last ? '42px 60px 74px' : '92px 60px 0'};  
  }

  @media (max-width: 712px) {
    padding: ${({last}) => last ? '42px 28px 54px' : '56px 28px 0'};
    align-items: flex-start;
  }

  .header {
    font-size: 48px;
    font-weight: 600;
    color: var(--headers-color);
    line-height: 1.5;
    max-width: 666px;
    text-align: center;
    @media (max-width: 712px) {
      max-width: unset;
      font-size: 24px;
      text-align: left;
    }
  }

  .text {
    &--top {
      max-width: 602px;
      text-align: center;
      margin-top: 20px;
      color: var(--body-text);
      font-size: 18px;
      line-height: 1.68;
      font-weight: 300;
      @media (max-width: 712px) {
        max-width: unset;
        margin-top: 12px;
        text-align: left;
      }
    }

    &--bottom {
      max-width: 712px;
      text-align: center;
      margin-top: 56px;
      color: var(--body-text);
      font-size: 18px;
      line-height: 1.68;
      font-weight: 300;
      @media (max-width: 712px) {
        max-width: unset;
        text-align: left;
        margin-top: 50px;
      }


      &__additional {
        max-width: 712px;
        text-align: center;
        margin: 32px 0 48px;
        color: var(--headers-color);
        font-size: 18px;
        line-height: 1.68;
        font-weight: 300;
        @media (max-width: 712px) {
          max-width: unset;
          text-align: left;
          margin: 24px 0 4px;
        }

      }
    }
  }


`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 28px;
  width: 100%;
  margin-top: 72px;
  @media (max-width: 712px) {
    margin-top: 45px;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    img, picture {
      transform: scale(1);
	    transition: transform .3s ease-in-out !important;
    }
    &:hover img, &:hover picture {
      transform: scale(1.2);
    }
  }
`

const KryptowoltaikaInstallations = ({photos, last, galleryHeader, galleryParagraphTop, galleryParagraphBottom, galleryParagraphBottomAdditional}) => {
  const width = useWindowSize();
  const options = {
  settings: {
    autoplaySpeed: 0,
    boxShadow: 'none',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: 3000,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'easeOut',
    overlayColor: 'rgba(0,0,0, 0.7)',
    slideAnimationType: 'fade',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.4,
    slideTransitionTimingFunction: 'backOut',
    usingPreact: false
  },
  buttons: {
      backgroundColor: 'var(--primary)',
      iconColor: 'var(--white)',
      iconPadding: '12px',
      showAutoplayButton: true,
      showCloseButton: true,
      showNextButton: true,
      showPrevButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      size: '40px'
    },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 1px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  }
}
  return (
    <Wrapper last={last}>
      {galleryHeader && <Text className="header" as="h2" dangerously={galleryHeader} />}
      {galleryParagraphTop && <Text className="text--top" dangerously={galleryParagraphTop} />}
      {width && width > 680 ? (
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
        <GalleryGrid>
          {photos.map(photo => <Image fluid={photo.fluid} />)}
        </GalleryGrid>
        </SRLWrapper>
      </SimpleReactLightbox>
      )
      :
      <MobileSlider items={photos}/>
      }
      {galleryParagraphBottom &&
        <Text className="text--bottom" dangerously={galleryParagraphBottom} />
      }
      {galleryParagraphBottomAdditional && 
        <Text className="text--bottom__additional" dangerously={galleryParagraphBottomAdditional} /> 
      }
    </Wrapper>
  )
}

export default KryptowoltaikaInstallations
