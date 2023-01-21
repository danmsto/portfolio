function ExperienceBulletPoints({bulletPoints}) {

  return (
    <>
      {bulletPoints.map((bulletPoint) => {
        return (
          <p className="experienceBulletPoints">{bulletPoint}</p>
        )
      })}
    </>
  )
}

export default ExperienceBulletPoints;