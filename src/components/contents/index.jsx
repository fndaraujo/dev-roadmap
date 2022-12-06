import { useEffect, useState } from 'react'

import Card from 'src/components/card'

import { StyledContents } from 'src/components/contents/style'

export default function Contents({ category }) {
  const [skills, setSkills] = useState([])
  useEffect(() => {
    fetch('/api/')
      .then((response) => response.json())
      .then((data) => setSkills(data))
  }, [])

  return (
    <StyledContents>
      {skills.map((skill) => {
        return (
          <Card
            key={skill.title}
            skillTitle={skill.title}
            skillLineway={skill.lineway}
            category={category}
          />
        )
      })}
    </StyledContents>
  )
}
