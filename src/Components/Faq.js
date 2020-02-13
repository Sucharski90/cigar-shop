import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Utility from './Utility';

export default class Faq extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-9">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What is a cigar
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="row">
                  <div className="col">
                    <p> A cigar is a rolled bundle of dried and fermented tobacco leaves made to be smoked. They are produced in a wide variety of sizes and shapes. Since the 20th century, almost all cigars are made up of three distinct components: the filler, the binder leaf which holds the filler together, and a wrapper leaf, which is often the best leaf used. Often there will be a cigar band printed with the cigar manufacturer's logo. Modern cigars often come with 2 bands, especially Cuban Cigar bands, showing Limited Edition (Edición Limitada) bands displaying the year of production.</p>

                    <p> Cigar tobacco is grown in significant quantities primarily in Central America and the islands of the Caribbean, including Cuba, the Dominican Republic, Haiti, Honduras, Mexico, Ecuador, Nicaragua, Guatemala, Panama, and Puerto Rico; it is also produced in the Eastern United States, the Mediterranean countries of Italy and Spain (in the Canary Islands), and in Indonesia and the Philippines of Southeast Asia.</p>

                    <p> The origins of cigar smoking are unknown. A Mayan ceramic pot from Guatemala dating back to the 10th century depicts people smoking tobacco leaves tied with a string.</p>
                  </div>
                </div>

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
                <div className="row">
                  <div className="col">
                    <p> Cigars come in a variety of shapes and sizes, which are often referred to as Vitolas. Each of the different formats offering varying smoking experiences from the fullness to the overall burning time.</p>

                    <p> Furthermore, the various cigar formats are often very differently priced, which can make it confusing when choosing your first cigar. Therefore, it’s helpful to know the different sizes and shapes before you start making purchases or building out your collection.</p>

                    <p> Similarly, the cigar industry is rife with different terms and expressions. However, we have identified the most standardised and universally-recognised terms. In this definitive guide, you will learn about the different types of cigar that you can buy.</p>
                  </div>
                </div>

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
              <Card.Body>
              <div className="row">
              <div className="col-md-4">
                    <Image src="https://2x1dks3q6aoj44bz1r1tr92f-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/different-cigar-colours.png" fluid />
                  </div>
                  <div className="col-md-8">
                  <iframe title="types of wrappers" src="https://www.youtube.com/embed/3qL2QrTnogA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                How to cut a cigar
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div className="row">
                <div className="col-md-6">
                <Image src="https://2x1dks3q6aoj44bz1r1tr92f-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Cigar-Cutting-Types-Cross-Sections.png" fluid />
                </div>
                  <div className="col-md-6">
                    <p>When you are ready to smoke your cigar, the time will come to cut the cap so you can draw through it. All handmade cigars are finished by adding a small piece of wrapper leaf over the head, which is called the cap. This secures the wrapper and its contents before smoking.</p>
                    <p>There are a number of different ways to cut a cigar, which we cover in our dedicated cigar cutting guide, which features a full step-by-step guide. For instance, there are guillotines, V-cuts and punches that you can choose according to the cigar and preference.</p>
                    <p>However, most experts agree that you shouldn’t bite a cigar like a gangster in the movies. Rather than looking like Al Capone, you’ll end up tearing the wrapper and get bits of tobacco in your teeth!</p>
                    <p>Whatever method you go for, the cut should be careful yet decisive. Furthermore, you don’t want to cut too high up the cigar’s shoulder as it may cause the wrapper to unravel as you smoke.</p>
                    <p>If you look closely, you’ll notice one or several small seams along at the extreme end of the cigar’s head. You’ll want to cut below the one closest to the end in order to safely secure the wrapper.</p>
                    <p>As mentioned above, cut in a decisive and quick movement as doing it too slowly can tear the wrapper.

</p>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                How to light a cigar
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <div className="row">
                <div className="col">
                  <iframe title="how to light a cigar" src="https://www.youtube.com/embed/I7qeAtjRlVc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
              </Card.Body>
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
                <div className="row">
                  <div className="col">
                    <p> Although the metric system has been compulsory in Cuba since 1858, cigars are usually measured in inches. Whilst some countries employ the metric system, it’s almost an industry norm to use imperial measurements. This is likely because of the United States’ influence in the market.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Image src="https://2x1dks3q6aoj44bz1r1tr92f-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/different-parejo-cigar-vitola-sizes.png" fluid />
                  </div>
                  <div className="col-md-8">
                    <p> Overall, cigars are measured according their length and ring gauge. The length is simply measured in inches such as a Corona, which is usually 5.25″ long.</p>

                    <p> Meanwhile, the ring gauge is the cigar’s diameter. Because a ring gauge is often quite small, it’s measured by 64ths of an inch rather than a decimal. This fraction is then simplified by simply giving the resulting figure.</p>
                    <p> For instance, a typical Corona is 0.68 inches thick, which comes to 44/64, is presented as simply 44. Therefore, when giving its overall dimensions, a Corona will be presented as 5.25×44.</p>

                    <p> In other countries that focus on the metric system, this information is often presented in either centimetres or millimetres for the length and gauge. We’ll offer these alternative measurements in the chart below.</p>

                    <p>As cigar size names can greatly fluctuate between different brands, it can sometimes be too conceptual to understand. Using this as a more precise scale can sometimes make it easier when trying to visualise the size of a cigar.</p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="6">
                Chose a cigar
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <div className="row">
                  <div className="col">
                    <p>There are many shapes, sizes, countries of origins and flavour profiles to choose from when selecting your cigar. In fact, it can be very intimidating and overwhelming when starting out.</p>
                    <p>However, cigars are like wine in many respects and as many people know, you don’t have to be an expert to enjoy a glass.</p>
                    <p>One of the most comfortable ways to enjoy your first cigar is to ask a friend who already smokes them. If they know their stuff, they’ll be able to at least give you a few recommendations as your first smoke.</p>
                    <p>Overall, the most reliable way is to seek out a professional retailer that specialises in cigars. They’ll be able to give you experienced advice on the best cigars to smoke as a beginner.</p>
                    <p>Most people tend to agree that it’s best to begin with a relatively mild and good quality handmade cigar. A cigar that’s too full-bodied may be overwhelming as a first smoke. Meanwhile, an inferior cigar may be an underwhelming experience.</p>
                    <h2>Cigar Quality Control</h2>
                    <p>If you do go to a retailer, you may want to get into the habit of inspecting the cigar to ensure its quality. Being made by hand, even the most reputable cigar brands can host a few defects.</p>
                    <p>These can include any of the following:</p>
                    <ul>
                      <li><strong>Dull Colour:</strong> Caused by dry storage or improper cultivation.</li>
                      <li><strong>Spots or Blemishes:</strong> Indications of faulty curing or fungus disease.</li>
                      <li><strong>Mould:</strong> Caused by storing in high humidity.</li>
                      <li><strong>Tears:</strong> Can be due to mishandling but may suggest dry storage conditions.</li>
                      <li><strong>Holes:</strong> Likely caused by beetle infestation.</li>
                      <li><strong>Soft Spots:</strong> Suggests improper rolling, which will burn unevenly.</li>
                      <li><strong>Hardness:</strong> May mean that the cigar was rolled too tight, which will affect the draw.</li>
                      <li><strong>Ridges:</strong> A lump that runs along the cigar suggests too much tobacco was packed in the roll.</li>
                      <li><strong>Irregular Shape:&nbsp;</strong>Like the above, suggests that the tobacco was unevenly rolled.</li>
                    </ul>
                    <p>Always ask a vendor for permission to inspect the cigars by touching them. Feel free to ask a vendor about storage conditions too. For instance, cigars should be stored in a humid environment that ranges between 65-70%. Any less may dry out the cigars whilst any more can cause the outbreak of mould.</p>
                    <p>Rolling a cigar between your fingers should give a faint crackling sound. This will tell you if the humidity is within the range mentioned above. If the sound is too loud, it may be too dry. However, if you can’t hear anything at all, it’s likely too moist.</p>
                    <p>Finally, be very gentle when handling the cigar. After all, it doesn’t belong to you just yet. A gentle pinch along the body should suffice to assess its consistency and hardness.</p>
                    <p>When buying cigars online, you won’t get this opportunity until you’ve bought the cigars, which is one of the risks when saving money.

</p>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
        </Accordion>
        </div>
        <div className="col-md-3 mt-5 pt-5 mb-5">
        <Utility />
        </div>
      </div>
        
      </div>
    )
  }
}



