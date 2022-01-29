import logo from './logo.svg';
import Header from "./Header.js";
import Cards from "./Cards.js";
import Footer from "./Footer.js";
import Data from "./data.js";


export default function App() {
  const cardElements = Data.map(data=>{
    return(
      <Cards key={data.id}
      {...data}
      />
    )
  })
  return (
    <div className="App">
     <Header />
     <div className='card-row'>
     {cardElements}
     </div>
     <Footer />
    </div>
  );
}
