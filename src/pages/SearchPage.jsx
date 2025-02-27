import { useParams } from "react-router-dom"

export function SearchPage() {

  const {keyword} = useParams(); 


  return (
    <div>SearchPage</div>
  )
}
