
import './App.css';
import PhotoInfo from "./components/PhotoInfo";
import  agentPraveen from './media/Praveen.jpg';
import  agentPrashanth from './media/Prashanth.jpg';
function App() {
  const renderData=[
    {
      image:"https://media-exp1.licdn.com/dms/image/C5103AQE0oueUhA0v5A/profile-displayphoto-shrink_200_200/0/1551541340855?e=2147483647&v=beta&t=s44k9p3I_OVloUMYjfNgmZCKQmoBvtv5j2flnyXuZ9s",
      description: "Code Name MEASME",
      price: "$976767",
      favWeapon: "M16",
      DOB:"apudu epudo puttadoo"

    },
    {
      image:"media/Praveen.jpg",
      description: "Code Name SUBBA",
      price: "$954355",
      favWeapon: "ROCKET",
      DOB:"Boomi puttinapdu"

    }
  ]
  
  return (
    <div style={{ display: "flex" }}>
    <PhotoInfo/>
    </div>
    
  );

}

export default App;
