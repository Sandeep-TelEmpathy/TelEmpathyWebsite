import React from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import './Accordion.css'

const Acc = () => {
  return (
    <div>
      <div stlye={{}}>
      
      <Accordion className="Accordionacc" style={{ width:" 100%",color:"black",border:"2px solid #D8DDE6",marginBottom:"18px",borderRadius:"4px",padding:"6px 5px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  style={{color:"#5041BB"}}/>}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: "bold",
              
            }}
          >
            What is TelEmpathy?
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong> We are an online therapy platform that provides access to online psychologist consultation at an affordable rate. Our aim is also to educate people regarding Mental Health & Talk Therapy</strong> so that before opting for it, they can know exactly what it is, to facilitate this the platform has videos & articles regarding the same so that you can  know more about therapy & mental health in a simple manner.

<strong> In India, the topic of Mental Health is widely stigmatized & on top of that, there is a lack of awareness among the general public.</strong> Most of the people across the country don't even know whom to reach out to, for seeking counseling/therapy & people who know whom to contact generally face the barrier of high consultation fees.

<strong> <span style={{fontStyle: 'italic'}}> We  aim to provide access to online psychologists at an affordable price to the people in cities & villages across India.</span></strong></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordionacc" style={{ width:"100%",color:"black",border:"2px solid #D8DDE6",marginBottom:"18px",borderRadius:"4px",padding:"6px 5px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#5041BB"}}/>}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            What is Therapy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong> Psychotherapy (a type of Talk Therapy) will involve you sitting with a psychologist to analyze the source/s of the problem (like a certain life event)</strong> which is causing you to have trouble in dealing with a particular situation. It involves you speaking as much as you can about your own life which helps the therapist to understand the source/s of the problem. <strong> The process aims at strengthening your self-awareness through which you can navigate your present and future experiences through personal initiative.</strong><br/>

<strong>CBT (Cognitive Behavioral Therapy) is a short-term talk therapy </strong>that focuses on changing your feeling regarding a situation so as to approach that particular situation in a better way.<br/><br/>



<span style={{fontWeight: "bold",textDecoration:"underline"}}>Some of the Myths about Talk Therapy:</span><br/>

<span style={{fontWeight: "bold",fontSize: "22px"}}> Only crazy people go to therapy!</span><br/>
You don’t need to have any major mental issues for going to therapy. Therapy helps you to speak about your experiences & what is bothering you, to a person who would listen to you carefully without any judgments and this would enable you to grow in your life at a personal/professional level by learning to navigate through the issues that were bothering you on a consistent basis.<br/>

<span style={{fontWeight: "bold",fontSize: "22px"}}>Therapy is for weak people.</span><br/>
Reaching out to a person for helping you to cope with your issues is a sign of strength & not weakness. If you are opting for therapy, it means that you are willing to change your situation rather than just accepting it & this is a thing that only a strong person can do.
<br/>
<span style={{fontWeight: "bold",fontSize: "22px"}}>Therapists only listen & they do not speak.</span><br/>
<strong> Talk Therapy is a collaborative process & it requires equal efforts from both sides.</strong> Listening helps the therapist to know about your personality and the situations that you have faced which helps the therapist to work together with you to identify the problems & work on them. <strong> This process also helps you to develop a mindset which helps you to deal with your issues in a constructive manner that too independently.</strong></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordionacc" style={{ width: "100%",color:"black",border:"2px solid #D8DDE6",marginBottom:"18px" ,borderRadius:"4px",padding:"6px 5px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#5041BB"}} />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            When to seek Therapy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong> As Humans, we face different experiences in different areas of our lives</strong> like Relationships, Jobs, Studies, and the list goes on.<strong> Some of the experiences in these areas can have an adverse effect on our emotions such that it affects the way in which we perceive & deal with situations & with people who are around us.

Sometimes these effects disappear after a short period of time but there is also a possibility that these effects are causing trouble to you emotionally and mentally on a consistent basis.</strong> If you are having/had experiences that are interfering or causing distress in your life, then talk therapy can act as a guide for helping you to navigate through such kinds of situations.

People say that sharing with your family & friends about what you are going through is very useful but sometimes <strong> Sharing with your family or even friends about the difficulties that you are facing emotionally becomes tough as there is a high chance of getting a judgmental kind of response from them.

What Talk Therapy does is that, it allows you to share all the problems that you are facing without the fear of being judged & </strong>the therapist then helps you to learn about the potential origin of that feeling & make you aware of it & how to cope with it in a constructive manner <strong> thus, giving you a better knowledge about your feelings which can help you to deal with bad experiences in a better way.</strong>

Talk Therapy is a support system and not a cure system. It is used to make you more aware of your own emotions/feelings and their potential cause/s such that it enables you to know yourself in a better way.

If you are opting for Talk Therapy, you can't expect the psychologist to just use a Magic Wand to make your troubles disappear, you as an individual also needs to put in equal efforts during the therapy sessions for achieving desired outcomes.
<strong>
It is completely fine & normal to seek therapy as it helps you to get better at dealing with things that are troubling you.</strong></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordionacc" style={{ width: "100%",color:"black",border:"2px solid #D8DDE6",marginBottom:"18px",borderRadius:"4px",padding:"6px 5px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#5041BB"}} />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            Difference between a Psychologist & Psychiatrist
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><li> Psychologists are mental health professionals who have completed their PhD &amp;<strong> take a therapeutic approach (talk therapy) with their clients</strong> for recovery.</li>
          <li>Psychiatrists are mental health professionals who obtain a medical degree in the field of mental health by either completing their MD (doctor of medicine)  DO (doctor of osteopathic medicine). <strong>They  usually work in big hospitals and can prescribe medications to their clients.</strong></li></Typography>
        </AccordionDetails>
      </Accordion>
    </div>



    </div>
  )
}

export default Acc




      
// <div className="c">
// <input type="checkbox" id="faq-1"/>
// {/* <p></p> */}
// <h1><label htmlFor="faq-1">TelEmpathy's Vision</label></h1>
// <div className="p">
//   <p>&nbsp;<strong><em>In India, the topic of Mental Health is widely stigmatized &amp; on top of that, there is a lack of awareness among the general public.</em></strong> Most of the people across the country don't even know whom to reach out to, for seeking counseling/therapy &amp; people who know whom to contact generally face the barrier of high consultation fees.</p>
// <p><strong>TelEmpathy wants to bring more inclusiveness</strong> across the different tiers of cities &amp; villages in India as far as access to the services of Qualified Mental Health Professionals is concerned and it aims to achieve this <strong>by providing the access to qualified Mental Health Professionals at an affordable rate.</strong> The platform <strong>also aims to educate people regarding Mental Health &amp; Talk Therapy</strong> so that before opting for it, they can know exactly what it is, to facilitate this the platform has videos &amp; articles by different Mental Health Professionals regarding the same &amp; it will enable people to know more about talk therapy in a very simple way.</p>
// </div>
// </div>
// <div className="c">
// <input type="checkbox" id="faq-2"/>
// <h1><label htmlFor="faq-2">What is Talk Therapy?</label></h1>
// <div className="p">
//   <p><strong>Psychotherapy (Talk Therapy as a method) will involve you sitting with the therapist to analyze the source/s of the problem (like a certain life event) </strong>which is causing you to have trouble in dealing/perceiving/acting with/a/in particular situation. It involves you speaking as much as you can about your own life which helps the therapist to understand the source/s of the problem. <strong>The process aims at strengthening your self-awareness through which you can navigate your present and future experiences through personal initiative.</strong></p>
// <p><strong>CBT (Cognitive Behavioral Therapy) is a short-term talk therapy</strong> that focuses on changing your feeling regarding a situation so as to approach that particular situation in a better way.</p>
// <p><strong>Some of the Myths about Talk Therapy:</strong></p>
// <h2><strong>Only crazy people go to therapy!</strong></h2>
// <p>You don’t need to have any major mental issues for going to therapy. <strong>Therapy helps you to speak about your experiences &amp; what is bothering you</strong>, to a person who would listen to you carefully without any judgments and<strong> this would enable you to grow in your life at a personal/professional level </strong>by learning to navigate through the issues that were bothering you on a consistent basis.</p>
// <h2><strong>Therapy is for weak people.</strong></h2>
// <p>Reaching out to a person for helping you to cope with your issues is a sign of strength &amp; not weakness. <strong>If you are opting for therapy, it means that you are willing to change your situation rather than just accepting it </strong>&amp; this is a thing that only a strong person can do.</p>
// <h2><strong>Therapists only listen &amp; they do not speak.</strong></h2>
// <p><strong>Talk Therapy is a collaborative process &amp; it requires equal efforts from both sides.</strong> Listening helps the therapist to know about your personality and the situations that you have faced which helps the therapist to work together with you to identify the problems &amp; work on them. <strong>This process also helps you to develop a mindset which helps you to deal with your issues in a constructive manner that too independently.</strong></p>
// </div>
// </div>
// <div className="c">
// <input type="checkbox" id="faq-3"/>
// <h1><label htmlFor="faq-3">When to seek Talk Therapy?</label></h1>
// <div className="p">
//   <p>&nbsp;<strong>As Humans, we face different experiences in different areas of our lives </strong>like Relationships, Jobs, Studies, and the list goes on. <strong>Some of the experiences in these areas can have an adverse effect on our emotions</strong> such that it affects the way in which we perceive &amp; deal with situations &amp; with people who are around us.</p>
// <p><strong>Sometimes these effects disappear after a short period of time but there is also a possibility that these effects are causing trouble to you emotionally and mentally on a consistent basis.</strong> If you are having/had experiences that are interfering or causing distress in your life, then talk therapy can act as a guide for helping you to navigate through such kinds of situations.</p>
// <p>People say that sharing with your family &amp; friends about what you are going through is very useful but sometimes <strong>Sharing with your family or even friends about the difficulties that you are facing emotionally becomes tough as there is a high chance of getting a judgmental kind of response from them.</strong></p>
// <p><strong>What Talk Therapy does is that, it allows you to share all the problems that you are facing without the fear of being judged</strong> &amp; the therapist then helps you to learn about the potential origin of that feeling &amp; make you aware of it &amp; how to cope with it in a constructive manner <strong>thus, giving you a better knowledge about your feelings which can help you to deal with bad experiences in a better way.</strong></p>
// <p>Talk Therapy is a support system and not a cure system. <strong>It is used to make you more aware of your own emotions/feelings and their potential cause/s such that it enables you to know yourself in a better way.</strong></p>
// <p>If you are opting for Talk Therapy, you can't expect the therapist to just use a Magic Wand to make your troubles disappear, you as an individual also needs to put in equal efforts during the therapy sessions for achieving desired outcomes.</p>
// <p><strong>It is completely fine &amp; normal to seek therapy as it helps you to get better at dealing with things that are troubling you.</strong>
//   </p>
// </div>
// </div>
// <div className="c">
// <input type="checkbox" id="faq-4"/>
// <h1><label htmlFor="faq-4">Difference between a Psychologist &amp; Psychiatrist?</label></h1>
// <div className="p">
// <ul>
// <li>Psychologists are mental health professionals who have completed their PhD &amp;<strong> take a therapeutic approach (talk therapy) with their clients</strong> for recovery.</li>
// 
// </ul>
//   <p>
//   </p>
// </div>
// </div>
