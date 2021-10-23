import React from "react"
import { Badge, Container, Row, Col } from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const projectTitle = ({frontmatter}) => (
  <Row className="mt-5">
  <Col align="center">
  <h2>{frontmatter.title}</h2>
  {frontmatter.tags.map(tag => (
    <Badge pill variant="dark" className="px-2 mr-1">
      <h5 className="text-white my-0">{tag}</h5>
      </Badge>)
    )}
    <hr />
  </Col>
  </Row>
)

const ProjectPageLayout = ({pageContext, children}) => {

  console.log("context", pageContext)

  return(
  <Container fluid className="pt-5 min-vh-100">
    {projectTitle(pageContext)}
    <Row>

      <AliceCarousel autoPlay autoPlayInterval="3000">
      <Col align="center">
     <img src="https://www.designbust.com/download/1038/png/transparent_google_logo256.png" className="sliderimg" alt="project_photo"/>
     </Col>
     <Col align="center">
     <img src="https://logoeps.com/wp-content/uploads/2014/09/49354-facebook-logo-icon-vector-icon-vector-eps.png" className="sliderimg" alt="project_photo"/>
     </Col>
     <Col align="center">
     <img src="https://images.vexels.com/media/users/3/137380/isolated/lists/1b2ca367caa7eff8b45c09ec09b44c16-instagram-icon-logo.png" className="sliderimg" alt="project_photo"/>
     </Col>
     </AliceCarousel> 


       {/* {images.map(image => (
         <img src={image.src} className="sliderimg" />
       ))} */}
    </Row>
    <Row><Col><p>{children}</p></Col></Row>
  </Container>
  )
}


export default ProjectPageLayout;
