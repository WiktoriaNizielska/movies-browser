import { Container, TaleContent, TaleImage, } from "../common/TaleContainer";
import { DataProduction, DataRelease, Tag, Tags, Subtitle, Header, Data } from "../common/TaleData";
import poster from "../poster.jpg"

function App() {
  return (
    <Container>
    <TaleImage src={poster} alt="" />
    <TaleContent>
      <Header>
        Mulan
      </Header>
      <Subtitle>
        2020
      </Subtitle>
      <Data>
        <DataProduction>
          Production: China, United States of America
        </DataProduction>
        <DataRelease>
          Realese date: 24.10.2020
        </DataRelease>
      </Data>
      <Tags>
        <Tag>Action</Tag>
        <Tag>Adventure</Tag>
        <Tag>Drama</Tag>
      </Tags>
    </TaleContent>
  </Container>
  );
}

export default App;
