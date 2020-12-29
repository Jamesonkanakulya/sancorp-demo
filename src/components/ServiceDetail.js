import React,{useState,useContext} from 'react'
import { SancorpContext } from "./context";
import Details from './Details';

function ServiceDetail(props) {

    const [slug, setSlug] = useState(props.match.params.slug);
    const homepost = useContext(SancorpContext);

    const services = homepost.services.find((item) => slug === item.slug);

    if (! services) {
        return (
          <div>
            <h1>Loading</h1>
          </div>
        );
      }


    return <Details post={ services}/>
}

export default ServiceDetail
