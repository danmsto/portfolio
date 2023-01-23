function ExperienceBulletPoints({bulletPoints}) {

  return (
    <>
      {bulletPoints.map((bulletPoint) => {
        return (
          <p className="experienceBulletPoints" key={bulletPoint.key}>{bulletPoint}</p>
        )
      })}
    </>
  )
}

export default ExperienceBulletPoints;