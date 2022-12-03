import { StyledHeader } from 'src/components/header/style'

export default function Header({ title }) {
  return (
    <StyledHeader>
      <div className="container-logo">
        <div>r</div>
      </div>
      <div className="container-title">
        <div className="notice-in-development">in development</div>
        <h1>{title}</h1>
      </div>
    </StyledHeader>
  )
}
