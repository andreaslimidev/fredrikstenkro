import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ImageViewer from "react-simple-image-viewer"

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
      font-size: 1.3rem;
      margin-top: 0;
      font-weight: 500;
      margin-bottom: 4rem;

      span {
          color: ${props => props.theme.main};
      }
  }

  h1 {
    margin-top: 2.5rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    grid-template-columns: 1fr;
  }

  figure {
    height: 300px;
    width: 300px;
  }
`

export const Gallery = () => {
  const data = useStaticQuery(
    graphql`
      query CloudinaryImage {
        allCloudinaryMedia {
          edges {
            node {
              secure_url
              context {
                custom {
                  alt
                  caption
                }
              }
              resource_type
            }
          }
        }
      }
    `
  )
  const images = data.allCloudinaryMedia.edges

  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const imageLinks = data.allCloudinaryMedia.edges.map(
    edge => edge.node.secure_url
  )

  const openImageViewer = useCallback(index => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <>
      <Container>
        <h1>Galleri</h1>
        <h3>
          Her kan du se blinkskudd fra <span>Fredriksten Kro</span> og{" "}
          <span>begivenheter</span> vi har arrangert.
        </h3>
        <div>
          {images.map((image, index) => (
            <figure className="wave" key={`${index}-image`}>
              <img
                onClick={() => openImageViewer(index)}
                key={index}
                src={image.node.secure_url}
                alt={image.node.context.custom.alt}
              ></img>
              <figcaption></figcaption>
            </figure>
          ))}
        </div>
      </Container>
      {isViewerOpen && (
        <ImageViewer
          src={imageLinks}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
    </>
  )
}
