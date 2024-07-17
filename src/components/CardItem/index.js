// Write your code here.

const CardComponent = props => {
  const {containerList} = props
  const {title, description, imgUrl, className} = containerList
  return (
    <li className={className}>
      <h1 className="cardTitle">{title}</h1>
      <p className="cardDescription">{description}</p>
      <div className="imgContainer">
        <img src={imgUrl} alt="imgurl" />
      </div>
    </li>
  )
}

export default CardComponent
