import { StyledHeader } from 'src/components/header/style'

export default function Header({ title, setCategory }) {
  return (
    <StyledHeader>
      <div className="container-logo">
        <div>r</div>
      </div>
      <div className="container-title">
        <label>Select</label>
        <select
          className="category-selector"
          onChange={(e) => {
            setCategory(e.target.value)
          }}
        >
          <option value={'unselected'}>None</option>
          <option value={'react'}>React.JS</option>
          <option value={'dotnet'}>Dotnet Core</option>
          <option value={'aspnet'}>Aspnet Core</option>
        </select>
        <h1>{title}</h1>
      </div>
    </StyledHeader>
  )
}
