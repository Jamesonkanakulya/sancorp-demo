import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { SancorpContext } from './context';
import TitleOne from './TitleOne';




function ServicesContent() {

    const homepost = useContext(SancorpContext);
    const services = homepost.services;
    
    return (
        <div className="continer-fluid">
            <TitleOne title="WE ARE SANCORP" />
     
            <div className="service-content ">
           
            <div className="container p-2">
            <h4>Operations</h4>
             <div className="row">
             {
                    services.map((item,i) => <div className="col-lg-6 my-4 col-md-6 col-sm-12 service-details">
                        <img src={item.imagez[0]} alt={item.title} />
                      <h5>   <Link to={`/services/${item.slug}`}>{item.title}</Link></h5>
                  

                    </div>)
                }


             </div>

            </div>
            </div>

            
            
        </div>
    )
}

export default ServicesContent
