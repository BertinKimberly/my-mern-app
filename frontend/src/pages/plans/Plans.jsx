import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { plans } from "../../data";
import HeaderImage from "../../images/post3.jpeg";
import Card from "../../UI/Card";
import "./plans.css";
const Plans = () => {
   return (
      <>
         <Navbar />
         <Header
            title='Membership plans'
            image={HeaderImage}
         >
            aquo eos eaque saepe. Id magni repellat iste, maiores labore
            reiciendis asperiores.
         </Header>
         <section className='plans'>
            <div className='container plans__container'>
               {plans.map(({ id, name, desc, price, features }) => (
                  <Card
                     key={id}
                     className='plan'
                  >
                     <h3>{name}</h3>
                     <small>{desc}</small>
                     <h1>{`$${price}`}</h1>
                     <h2>/mo</h2>
                     <h4>Features</h4>
                     {features.map(({ feature, available, index }) => (
                        <p
                           key={index}
                           className={!available ? "disabled" : ""}
                        >
                           {feature}
                        </p>
                     ))}
                     <button className='btn lg'>Choose Plan</button>
                  </Card>
               ))}
            </div>
         </section>
         <Footer/>
      </>
   );
};

export default Plans;
