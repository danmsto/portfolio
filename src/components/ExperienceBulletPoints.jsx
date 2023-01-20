function ExperienceBulletPoints({bulletPoints}) {

  return (
    <>
      {bulletPoints.map((bulletPoint) => {
        return (
          <p>{bulletPoint}</p>
        )
      })}
    </>
  )
}

export default ExperienceBulletPoints;