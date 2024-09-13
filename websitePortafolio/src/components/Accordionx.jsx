import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Accordion.css';

function AccordionHome() {
  return (

  <div className='Accordion' >
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Research</Accordion.Header>
        <Accordion.Body>
         <p> Understandind your prospects, the competitive enviroment and currentwebsite analytics are the base for a good improvement. </p>
           <ul className="">
          <li>Website/Persona fit and alignment</li>
          <li>Website lead conversion analysis</li>
          <li>Scroll Map analysis</li>
          <li>Keyword</li>
          <li>Create reference</li>
        </ul>
         <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Website Design</Accordion.Header>
        <Accordion.Body><p> Understanding your view of goals, technical capabilities to design a wesite give like result a great launch an at scale. </p>
           <ul className="">
          <li>Journey Mapping</li>
          <li>Web Design</li>
          <li>Content Production</li>
          <li>Frontend & Backend Development</li>
          <li>Create reference</li>
          <li>Recreate any website/ not matter the tecnology</li>
          <li>CMS Implementation</li>
        </ul>
         <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Technology</Accordion.Header>
        <Accordion.Body><p> From font-end to back-end, Our technical teams is gonna guaranty you have the foundation for the best in class website from seed lto scale. </p>
           <ul className="">
          <li>Webs Technology Consulting</li>
          <li>Web Architecture planning</li>
          <li>Mobile App Development, iOS & Android </li>
          <li>Frontend Web Develoment</li>
          <li>Backend Develoment & API Integration</li>
        </ul>
         <p></p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Visual Design</Accordion.Header>
        <Accordion.Body><p>Digital design expertise adds the science of usability to ensure an intuitive and seamless experience to your prospects. </p>
           <ul className="">
          <li>User Research & Testing</li>
          <li>CX, UX & Interaction Design</li>
          <li>UI Design</li>
          <li>Motion Design</li>
          <li>Design Systems</li>
        </ul>
         <p></p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Marketing</Accordion.Header>
        <Accordion.Body><p> Planner for your campaing. </p>
           <ul className="">
          <li>SEO</li>
          <li>SEM </li>
          <li>Google Ads</li>
          <li>Meta-Bussines</li>
          <li>TripAdvisord</li>
        </ul>
         <p></p> 
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
  </div>
  );
}

export default AccordionHome;