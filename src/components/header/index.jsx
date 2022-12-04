import { StyledHeader } from 'src/components/header/style'

export default function Header({ title, setCategory }) {
  return (
    <StyledHeader>
      <div className="container-logo">
        <div>r</div>
      </div>
      <div className="container-title">
        <select
          className="category-selector"
          onChange={(e) => {
            setCategory(e.target.value)
          }}
        >
          <option value={'notSelected'}>Select category</option>
          <option value={'fullstack'}>fullstack</option>
          <option value={'frontend'}>frontend</option>
          <option value={'backend'}>backend</option>
        </select>
        <h1>{title}</h1>
      </div>
    </StyledHeader>
  )
}
