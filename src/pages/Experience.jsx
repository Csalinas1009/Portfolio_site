import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css'


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015-current"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Customer Service Representative</h3>
          <h4 className="vertical-timeline-element-subtitle">Westwood, NJ</h4>
          <p>
            Order entry, Order status, Troubleshooting, Returns and Warranty service
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">New Jersey Intitute of Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">Newark, NJ</h4>
          <p>
            Full Stack software development Bootcamp
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - TBD"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Junior Web Designer</h3>
          <p>
            Developing your next big project! 🚧
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>)
}

export default Experience