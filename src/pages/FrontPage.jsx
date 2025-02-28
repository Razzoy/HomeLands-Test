import { Card } from "../components/Card/Card";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { ReviewCard } from "../components/ReviewCard/ReviewCard";
import { Section } from "../components/Section/Section";
import { useGet } from "../hooks/useGet";

export function FrontPage() {

  //fetch staff
  const { data, isLoading, error } = useGet("https://api.mediehuset.net/homelands/staff");

  return (
    <>
      <Section title={"Det siger kunderne:"}>
        <ReviewCard />
      </Section>
      <Section title={"Mød vores ansatte"}>
        <GridContainer fraction={'1fr 1fr 1fr 1fr'} gap={'3vw'}>
          {!isLoading && data?.items.map((staff)=>{
            return (
              <Card 
              key={staff.id}
              imageSrc={staff.image}
              alt={staff.firstname}
              title={`${staff.firstname} ${staff.lastname}`}
              text={staff.position}
              >
              <p>Email: {staff.email}</p>
              <p>Phone: {staff.phone}</p>
              </Card>
            )
          })}
        </GridContainer>
      </Section>
    </>
  )
}
