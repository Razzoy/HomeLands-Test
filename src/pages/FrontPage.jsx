import { GridContainer } from "../components/GridContainer/GridContainer";
import { Section } from "../components/Section/Section";
import { useGet } from "../hooks/useGet";

export function FrontPage() {

  //fetch the news
  const { data, isLoading, error } = useGet("https://api.mediehuset.net/homelands/homes");

  return (
    <>
      <Section title={"Det siger kunderne:"}>
      </Section>
      <Section title={"Mød vores ansatte"}>
        <GridContainer fraction={'1fr 1fr 1fr'} gap={'3vw'}>
          
        </GridContainer>
      </Section>
    </>
  )
}
