import { StyledCard } from 'src/components/card/style'

export default function Card({ skillTitle, skillCategory, category }) {
  return (
    <StyledCard>
      <div
        className={
          skillCategory === category
            ? skillCategory
            : skillCategory === 'fullstack'
            ? 'unselected'
            : 'unselected'
        }
      >
        {skillTitle}
      </div>
    </StyledCard>
  )
}
