// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList} = eachItem

  return (
    <div className="course-con">
      <div className="name-duration-con">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-con">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="unordered-list">
        {tagsList.map(each => (
          <p key={each.id} className="list">
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
