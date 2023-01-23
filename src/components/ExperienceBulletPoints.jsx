function ExperienceBulletPoints({bulletPoints}) {

  return (
    <>
      {bulletPoints.map((bulletPoint) => {
        return (
          <p className="experienceBulletPoints" key={bulletPoint}>{bulletPoint}</p>
        )
      })}
    </>
  )
}

export default ExperienceBulletPoints;