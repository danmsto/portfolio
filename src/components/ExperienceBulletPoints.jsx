function ExperienceBulletPoints({bulletPoints}) {

  return (
    <ul>
      {bulletPoints.map((bulletPoint) => {
        return (
            <li className="experienceBulletPoints" key={bulletPoint}>{bulletPoint}</li>
        )
      })}
    </ul>
  )
}

export default ExperienceBulletPoints;
