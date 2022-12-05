import { StyledCard } from 'src/components/card/style'

function getCardClassName(skillCategory, category) {
  switch (category) {
    case 'frontend':
      if (skillCategory === 'frontend') {
        return 'frontend'
      } else if (skillCategory === 'common') {
        return 'following'
      } else {
        return 'unselected'
      }
      break
    case 'backend':
      if (skillCategory === 'backend') {
        return 'backend'
      } else if (skillCategory === 'common') {
        return 'following'
      } else {
        return 'unselected'
      }
      break
    case 'fullstack':
      if (skillCategory === 'fullstack') {
        return 'fullstack'
      } else if (skillCategory === 'common') {
        return 'following'
      } else {
        return 'unselected'
      }
      break
    default:
      return 'unselected'
      break
  }
}

export default function Card({ skillTitle, skillCategory, category }) {
  return (
    <StyledCard>
      <div className={getCardClassName(skillCategory, category)}>
        {skillTitle}
      </div>
    </StyledCard>
  )
}
