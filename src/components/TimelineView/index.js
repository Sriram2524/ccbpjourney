// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="bg-container">
      <h1 className="main-heading">
        MY JOURNEY OF
        <br />
        <span className="ccbp">CCBP 4.0</span>
      </h1>
      <div className="chrono-con">
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard key={eachItem.id} eachItem={eachItem} />
              )
            }

            return <ProjectTimelineCard key={eachItem.id} eachItem={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
