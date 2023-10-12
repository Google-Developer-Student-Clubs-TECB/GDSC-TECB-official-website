import React from 'react';
import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {
  // Define the data for the footer
  const description = "Welcome to GDSC TECB";
  const title = "GDSC TECB";

  const columns = [{
    title: "GDSC",
    resources: [{
      name: "QuickLinks",
      link: "/quicklinks"
    },{
      name: "Chapters",
      link: "/chapters"
    },{
      name: "UpcomingEvents",
      link: "/upcomingevents"
    },{
      name: "About GDSC",
      link: "/aboutgdsc"
    }, {
      name: "Lead Terms", 
      link: "/leadterms"
    }, {
      name: " Participating Terms", 
      link: "/participatingterms"
    }, {
      name: "Privacy Terms", 
      link: "/privacyterms"
    }];
      
    
  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    linkedin="https://www.linkedin.com/showcase/googledevelopers/"
    facebook="https://www.facebook.com/googlefordevs"
    twitter="https://twitter.com/googledevs"
    instagram="https://www.instagram.com/googlefordevs/"
    youtube="https://www.youtube.com/googledevelopers"
    
    copyright="black"
    iconColor="black"
    backgroundColor="lightgrey"
    fontColor="black"
    copyrightColor="darkgrey"
  />;
}

export default Footer;
