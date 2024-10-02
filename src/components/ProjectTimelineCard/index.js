import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {projectTitle, imageUrl, duration, projectUrl, description} = eachItem
  return (
    <div className="project-con">
      <img alt="project" src={imageUrl} className="project-img" />
      <div className="name-duration-con">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="duration-con">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="anchor">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
