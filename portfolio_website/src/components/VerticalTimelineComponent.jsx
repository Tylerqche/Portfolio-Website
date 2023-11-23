import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../components/VerticalTimeLineComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'


const VerticalTimelineComponent = () => {

  const WorkIcon = () => <FontAwesomeIcon icon={faBriefcase} />;
  const SchoolIcon = () => <FontAwesomeIcon icon={faGraduationCap} />;

  const primaryColor = 'bg-primary';

  return (
    <VerticalTimeline className="custom-vertical-timeline mb-1" animate={ true }>
      <VerticalTimelineElement
        contentStyle={{ background: '#f2b891', color: '#050201' }}
        contentArrowStyle={{ borderRight: '7px solid  #f2b891' }}
        date="August 2022 - Current"
        iconStyle={{ background: '#f2b891', color: '#c95e18', border: '2px solid #c95e18' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title font-serif">Bachelors of Science</h3>
        <h4 className="vertical-timeline-element-subtitle">The Pennsylvania State University</h4>
        <p>
          Current sophomore, majoring in both computer science and economics.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#f2b891', color: '#050201' }}
        contentArrowStyle={{ borderRight: '7px solid  #f2b891' }}
        date="May 2023 - Current"
        iconStyle={{ background: '#f2b891', color: '#c95e18', border: '2px solid #c95e18' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title font-serif">Research Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">Penn State, Origin Labs</h4>
        <p>
          Current research assistant at Penn State, working on product developement in both hardware and software.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#f6d0b6', color: '#050201' }}
        contentArrowStyle={{ borderRight: '7px solid  #f6d0b6' }}
        date="May 2023 - August 2023"
        iconStyle={{ background: '#f2b891', color: '#c95e18', border: '2px solid #c95e18' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title font-serif">Full Stack Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Tesla Government</h4>
        <p>
          Freshman year internship, working on different websites utilizing frameworks such as React and Springboot, and languages such as TypeScript and Java.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#f6d0b6', color: '#050201' }}
        contentArrowStyle={{ borderRight: '7px solid  #f6d0b6' }}
        date="August 2018 - May 2022"
        iconStyle={{ background: '#f2b891', color: '#c95e18', border: '2px solid #c95e18' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title font-serif">Associates of Engineering</h3>
        <h4 className="vertical-timeline-element-subtitle">Montgomery College</h4>
        <p>
          Graduated during my senior year of highschool with, whith a focus in computer science.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: '#f6d0b6', color: '#050201' }}
        contentArrowStyle={{ borderRight: '7px solid  #f6d0b6' }}
        date="August 2022 - May 2022"
        iconStyle={{ background: '#f2b891', color: '#c95e18', border: '2px solid #c95e18' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title font-serif">Learning Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">Montgomery College</h4>
        <p>
          Worked as a learning assistant for Computer Science: Intro To Programming.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default VerticalTimelineComponent