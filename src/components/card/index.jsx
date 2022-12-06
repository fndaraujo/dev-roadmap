import { StyledCard } from 'src/components/card/style'

function getCardClassName(skillLineway, category) {
  switch (category) {
    case 'react':
      switch (skillLineway) {
        case 'all':
        case 'web':
        case 'javascript':
        case 'cssx':
        case 'node':
        case 'next':
          return 'following'
        case 'react':
          return 'react'
        default:
          return 'unselected'
      }
    case 'dotnet':
      switch (skillLineway) {
        case 'all':
        case 'sql':
        case 'nosql':
        case 'csharp':
          return 'following'
        case 'dotnet':
          return 'dotnet'
        default:
          return 'unselected'
      }
    case 'aspnet':
      switch (skillLineway) {
        case 'all':
        case 'web':
        case 'sql':
        case 'nosql':
        case 'csharp':
          return 'following'
        case 'aspnet':
          return 'aspnet'
        default:
          return 'unselected'
      }
    default:
      return 'unselected'
  }
}

export default function Card({ skillTitle, skillLineway, category }) {
  return (
    <StyledCard skillClassName={getCardClassName(skillLineway, category)}>
      {skillTitle}
    </StyledCard>
  )
}
