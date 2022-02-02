import { DetailGenre } from "../../@types"
import { Wrapper } from "./components"


interface Props {
  genres: DetailGenre[]
}

export const Genres = ({genres}: Props) => {
  return (
    <Wrapper>
      <h3>{genres.length > 1 ? 'Gêneros' : 'Gênero'}</h3>
       <ul>
      {genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}
    </ul>   
    </Wrapper>

  )
}