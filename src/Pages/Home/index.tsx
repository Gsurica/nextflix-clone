import { Background } from "../../config/components/Background"
import Title from "../../config/components/Title"


const Home = () => {
  return (
    <>
      <Background>
        <Title 
          variant='h3' 
          component={'h1'}
        > 
          Filmes, séries e muito mais, sem limites
        </Title>
      </Background>
    </>

  )
}

export { Home }
