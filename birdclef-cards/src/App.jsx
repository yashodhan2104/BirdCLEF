import "./App.css";
import "./components/Header.css";
import Header from "./components/Header.jsx";
import "./components/Footer.css";
import Footer from "./components/Footer.jsx";

import { Card } from "./components/card";

function App() {
  return (
    <div className="App">
    <Header />
    {/* Your main content */}
    {/* ... */}

     {/* Your main content */}
      {/* ... */}
     <div className="test2">
    <div className="test" >
      <div className="col">
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2017/08/27/16/10/peacock-2686600_640.jpg"
          imgAlt="Indian Peafowl"
          title="Indian Peafowl"
          description="Indian peafowl are a species in a group of birds called pheasants. The males are called peacocks, while the females are called peahens. Together, they are peafowl."
          buttonText="Learn More"
          link = "card2"
        />
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2021/08/03/12/34/sparrow-6519384_1280.jpg"
          imgAlt="White-Crowned Sparrow"
          title="White-Crowned Sparrow"
          description="It's the quintessential sparrow: a small, streaky-breasted brown bird that lies low until it's time to sing."
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2022/07/08/17/01/common-wood-pigeon-7309622_640.jpg"
          imgAlt="Common Wood Pigeon"
          title="Common Wood Pigeon"
          description="The common wood pigeon (Columba palumbus), also known as simply wood pigeon is a large species in the dove and pigeon family (Columbidae). It is common throughout Europe"
          buttonText="Learn More"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2019/11/19/21/44/robin-4638598_640.jpg"
          imgAlt="Winter Robin"
          title="Winter Robin"
          description="The quintessential early bird, American Robins are common sights on lawns across North America, where you often see them tugging earthworms out of the ground."
          buttonText="Learn More"
          link="card1"
        />
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2020/06/05/02/56/great-spotted-woodpecker-5261220_640.jpg"
          imgAlt="Downy Woodpecker"
          title="Downy Woodpecker"
          description="Woodpeckers are tree-dwelling birds of the family Picidae, comprising subfamilies like Picumninae (piculets), Jynginae (wrynecks), and Picinae (sapsuckers)."
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2022/03/23/08/13/flamingo-7086655_640.jpg"
          imgAlt="Andean Flamingo"
          title="Andean Flamingo"
          description="The Andean flamingo is a species of flamingo native to the Andes mountains of South America. Until 2014, it was classified in genus Phoenicopterus."
          buttonText="Learn More"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
         imgSrc="https://cdn.pixabay.com/photo/2017/09/22/15/57/adler-2776081_640.jpg"
         imgAlt="Bald Eagle"
         title="Bald Eagle"
         description="The bald eagle is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle."
         buttonText="Learn More"
         link="card2"
        />

        <Card
         imgSrc="https://cdn.pixabay.com/photo/2017/11/30/11/57/barn-owl-2988291_640.jpg"
         imgAlt="Barn Owl"
         title="Barn Owl"
         description="The barn owl is the most widely distributed species of owl in the world and one of the most widespread of all species of birds, being found almost everywhere except for the polar and desert regions."
         buttonText="Learn More"
         link="card2"
        />
        <Card
         imgSrc="https://cdn.pixabay.com/photo/2021/05/21/11/57/bee-hummingbird-6270971_640.jpg"
         imgAlt="Bee Hummingbird"
         title="Bee Hummingbird"
         description="The bee hummingbird, zunzuncito or Helena hummingbird is a species of hummingbird, native to the island of Cuba in the Caribbean."
         buttonText="Learn More"
         link="card2"
        />
        <Card
          imgSrc="https://cdn.pixabay.com/photo/2017/12/17/08/16/peregrine-falcon-3023839_640.jpg"
          imgAlt="Peregrine Falcon"
          title="Peregrine Falcon"
          description="The peregrine falcon, also known simply as the peregrine, and historically as the duck hawk in North America, is a cosmopolitan bird of prey in the family Falconidae."
          buttonText="Learn More"
          link="card2"
        />
      </div>
    </div>
    </div> 
   </div>
  );
}
export default App;