import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Faq extends Component {
  render() {
    return (
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What is a cigar
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p> A cigar is a rolled bundle of dried and fermented tobacco leaves made to be smoked. They are produced in a wide variety of sizes and shapes. Since the 20th century, almost all cigars are made up of three distinct components: the filler, the binder leaf which holds the filler together, and a wrapper leaf, which is often the best leaf used. Often there will be a cigar band printed with the cigar manufacturer's logo. Modern cigars often come with 2 bands, especially Cuban Cigar bands, showing Limited Edition (Edición Limitada) bands displaying the year of production.</p>
          
                <p> Cigar tobacco is grown in significant quantities primarily in Central America and the islands of the Caribbean, including Cuba, the Dominican Republic, Haiti, Honduras, Mexico, Ecuador, Nicaragua, Guatemala, Panama, and Puerto Rico; it is also produced in the Eastern United States, the Mediterranean countries of Italy and Spain (in the Canary Islands), and in Indonesia and the Philippines of Southeast Asia.</p>
          
                <p> The origins of cigar smoking are unknown. A Mayan ceramic pot from Guatemala dating back to the 10th century depicts people smoking tobacco leaves tied with a string.</p>
      </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Types of cigars
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p> Cigars come in a variety of shapes and sizes, which are often referred to as Vitolas. Each of the different formats offering varying smoking experiences from the fullness to the overall burning time.</p>
          
                <p> Furthermore, the various cigar formats are often very differently priced, which can make it confusing when choosing your first cigar. Therefore, it’s helpful to know the different sizes and shapes before you start making purchases or building out your collection.</p>
          
                <p> Similarly, the cigar industry is rife with different terms and expressions. However, we have identified the most standardised and universally-recognised terms. In this definitive guide, you will learn about the different types of cigar that you can buy.</p>
      </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Types of wrappers
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                How to cut a cigar
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                How to light a cigar
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                How to enjoy a cigar
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                How is a cigar measured
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p> Although the metric system has been compulsory in Cuba since 1858, cigars are usually measured in inches. Whilst some countries employ the metric system, it’s almost an industry norm to use imperial measurements. This is likely because of the United States’ influence in the market.</p>

                <img src="img/Measuring-A-Cigars-Length.jpg" alt="measure"/>
                
                <p> Overall, cigars are measured according their length and ring gauge. The length is simply measured in inches such as a Corona, which is usually 5.25″ long.</p>
                
                <p> Meanwhile, the ring gauge is the cigar’s diameter. Because a ring gauge is often quite small, it’s measured by 64ths of an inch rather than a decimal. This fraction is then simplified by simply giving the resulting figure.</p>
                
                <p> For instance, a typical Corona is 0.68 inches thick, which comes to 44/64, is presented as simply 44. Therefore, when giving its overall dimensions, a Corona will be presented as 5.25×44.</p>
                
                <p> In other countries that focus on the metric system, this information is often presented in either centimetres or millimetres for the length and gauge. We’ll offer these alternative measurements in the chart below.</p>
                
                <p>As cigar size names can greatly fluctuate between different brands, it can sometimes be too conceptual to understand. Using this as a more precise scale can sometimes make it easier when trying to visualise the size of a cigar.</p>
      </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}



