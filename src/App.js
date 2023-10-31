import logo from './logo.svg';
import './App.css';

import comfortFood from "./IMAGES/IMG_5083.png";
import me1 from "./IMAGES/IMG_2131.PNG";
import me2 from "./IMAGES/IMG_2416.png";
import me3 from "./IMAGES/IMG_2115.png";
import me4 from "./IMAGES/IMG_6804.png";
import birthday from "./IMAGES/birthday.png";
import wig1 from "./IMAGES/wig1.png";
import wig2 from "./IMAGES/wig2.png";
import weird from "./IMAGES/70551793409__B84289BD-C7CB-4974-AD47-C9C71C0DF493.png";
import prague from "./IMAGES/prague.PNG";
import degrees from "./IMAGES/degrees.PNG";
import swim from "./IMAGES/swimm.PNG";
import rave from "./IMAGES/rave.png";
import yemek from "./IMAGES/IMG_3320.png";
import turkish from "./IMAGES/turkish.png";
import IMG_7379 from "./IMAGES/IMG_7379.png"; 
import eurydice from "./IMAGES/eurydice.png";
import IMG_6230 from "./IMAGES/IMG_6230.PNG";
import IMG_6231 from "./IMAGES/IMG_6231.png";
import IMG_6192 from "./IMAGES/IMG_6192.PNG";
import IMG_5564 from "./IMAGES/IMG_5564.PNG";
import IMG_F9B1E97F5F83 from "./IMAGES/IMG_F9B1E97F5F83-1.png";


function App() {

  const bodyStyles = {
    fontFamily: 'Lexend, sans-serif',
    backgroundColor: '#1e1e1e', // Black background
    color: '#ffffff', // White text
    padding: '20px',
  };

  const divStyles = {
    backgroundColor: '#090808', // Dark gray box
    padding: '20px',
    borderRadius: '10px', // Rounded corners
    marginBottom: '20px',
  };

  const h1h3h15Styles = {
    color: 'rgb(205, 4, 4)', // Red heading
  };

  const h3Styles = {
    backgroundColor: '#292525', // Gray chunk
    padding: '10px',
    borderRadius: '5px',
    marginTop: '15px',
    marginBottom: '5px',
  };

  const ulStyles = {
    listStyleType: 'square', // Square bullet points
  };

  const liStyles = {
    color: '#ffffff', // White paragraph
    marginBottom: '5px',
  };

  const aStyles = {
    color: '#ff6666', // Red link
  };

  const aHoverStyles = {
    color: 'rgb(205, 4, 4)', // Hover color
  };

  const group1Styles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const lastStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={bodyStyles}> 

<h1 style={h1h3h15Styles}>
          Hey you... Welcome to a website about ME! 
      </h1>
      <h3 style={h1h3h15Styles}>
          This is Defne Tim btw. 
      </h3>

      <h15 style={h1h3h15Styles}>
          Now that I think about it, it is pretty narcissistic to create a website to just introduce myself. 
      </h15>

      <div style={divStyles} className="group1">
          <img src = {me1}  
          width = {280}
          height = {280} />
          <img src = {me2}
          width = {280}
          height = {280} />
          <img src = {me3}
          width = {280}
          height = {280} />
          <img src = {me4}
          width = {280}
          height = {280} />
      </div>
    

      <h3 style={h3Styles}>
      Basics 
    </h3>
    <h9 style={ulStyles}>
          <ul>
              <li style={liStyles}> Born: Istanbul, Turkey </li>
              <li style={liStyles}> Raised: Izmir, Turkey </li>
              <li style={liStyles}> Age: "You're 20! It's ok babygirl no one has to know" </li>
              <img src = {birthday}
                  width = {200}
                  height = {200} />
              <li style={liStyles}> Living in: Philadelphia, PA </li>
              <li style={liStyles}> School: University of Pennsylvania </li>
              <li style={liStyles}> Year: 2026 </li>
              <li style={liStyles}> Majors: Computation and Cognition + Mathematical Economics </li>
              <li style={liStyles}> Minor: Computer Science </li>
              <li style={liStyles}> Languages: Turkish, English </li>
              <li style={liStyles}> Campus things: Spark, Mask and Wig, GRC </li>
                  <img src = {wig1} 
                  width = {200}
                  height = {200} />
                  <img src = {wig2}
                  width = {200}
                  height = {200} />
              <li style={liStyles}> Pet: 10-year-old King Charles Cavalier </li>
                  <img src = {weird}
                  width = {200}
                  height = {200} />
              <li style={liStyles}> Favorite city: Prague, Czech Republic </li>
              <img src = {prague} 
                  width = {200}
                  height = {200} />
              <li style={liStyles}> Want to go to: Lisbon, Portugal </li>

          </ul>
      </h9>

    <h3 style={h3Styles}> 
      Fun Facts
    </h3>
      <h9 style={ulStyles}>
          <ul>
              <li style={liStyles}> I have 47 year-old brothers (yes, twins). </li>
              <li style={liStyles}> I once climbed Mount Royal at 4am. </li>
              <li style={liStyles}> I can swim in water as cold as  10 degrees celcius. </li>
                  <img src = {degrees} 
                  width = {200}
                  height = {200} />
                  <img src = {swim} 
                  width = {200}
                  height = {200} />
              <li style={liStyles}> My high school nickname was curvy curly. </li>
              <li style={liStyles}> I still sleep with my first ever teddy bear. </li>
              <li style={liStyles}> I have terrible memory. Concerning level... </li>
              <li style={liStyles}> My childhood dream job was to become a belly dancer. </li>
              <li style={liStyles}> I once slept outside for 5 days (Turkey EARTHQUAKES!) </li>
              <li style={liStyles}> My celebrity crush is David Tennnant. </li>
          </ul>
      </h9>
    
      <h3 style={h3Styles}>
      Dance 
      </h3>
      <h9 style={ulStyles}>
          <ul>
              <li style={liStyles}> I started doing ballet at 4. </li>
              <li style={liStyles}> I am a ministry of education certified ballet instrucor in Turkey </li>
              <li style={liStyles}> I, in fact, can belly dance. </li>
              <li style={liStyles}> I am the last person to leave a rave. </li>
              <img src = {rave} 
                  width = {200}
                  height = {200} />
              <li style={liStyles}> I choreograph the numbers for Mask and Wig. </li>
              <li style={liStyles}> Best genre to groove: reggae </li>
              <li style={liStyles}> I tap! </li>
          </ul>
      </h9>

    <h3 style={h3Styles}> 
      Music 
      </h3>
      <h9 style={ulStyles}>
          <ul>
              <li style={liStyles}> Favorite genre: Anatolian Funk </li>
              <li style={liStyles}> Listen to Altin Gun. Trust me. </li>
              <li style={liStyles}> Spotify: defnetim </li>
              <li style={liStyles}> Song to take a long hot shower to: Planet Caravan by Black Sabbath </li>
              <li style={liStyles}> Only English song that makes me cry: Madison by Orla Gartland </li>
              <li style={liStyles}> Song to listen to when making breakfast: Ti Imouna Gia Sena by Antonis Remos </li>
              <li style={liStyles}> Guilty Pleasure: Turkish Rap </li>
              <li style={liStyles}> I am obsessed with folklore. </li>
          </ul>
      </h9>
    

    <h3 style={h3Styles}>
      Food
      </h3>
      <h9 style={ulStyles}>
          <ul>
              <li style={liStyles}> Comfort food: Turkish cusine, duh. </li>
                  <img src = {comfortFood} 
                  width = {200}
                  height = {200} />
                  <img src = {yemek} 
                  width = {200}
                  height = {200} />
                  <img src = {turkish} 
                  width = {200}
                  height = {200} />
              <li style={liStyles}> Eat out pick: Dim Sum </li>
              <li style={liStyles}> Go-to coffee order: Large shaken espresso with almond milk </li>
              <li style={liStyles}> Favorite ingredient: garlic </li>
              <li style={liStyles}> Favorite snack: yogurt </li>
              <li style={liStyles}> Go-to food truck: Magic Carpet </li>
              <li style={liStyles}> Favorite fruit: pomegranate, I have a tattoo of it. </li>
              <li style={liStyles}> When I don't have food, I cook eggs. I once ate eggs for 4 consecutive meals. </li>
          </ul>
                  <img src =  {IMG_7379}
                  width = {200}
                  height = {200} />

      </h9>

    <h3 style={h3Styles}> 
      Theatre
    </h3>
        <h9 style={ulStyles}>
          <ul>
              <li style={liStyles}> I was Hellen Keler in high school: <a href= "https://www.youtube.com/watch?v=UQxE67Z6PhM&t=884s" >Click! </a> </li>
              <li style={liStyles}> I was also The Bride in Blood Wedding! </li>
              <li style={liStyles}> I played a stone in the THAR program's Eurydice! </li>
              <img src = {eurydice} 
                      width = {200}
                      height = {200} />
              <li style={liStyles}> Favorite American play: A Streetcar Named Desire by Tennessee Williams </li>
              <li style={liStyles}> Favorite Turkish Play: Asiye Nasıl Kurtulur by Vasıf Öngören </li>
          </ul>
      </h9>

      <h3 style={h3Styles}> 
          A sneak peak into my life... 
      </h3>

      <div class = "last">
          <img src = {IMG_6230} 
              width = {250}
              height = {500} /> 
          <img src = {IMG_6231} 
              width = {250}
              height = {500} /> 
          <img src = {IMG_6192} 
              width = {250}
              height = {500} />
          <img src = {IMG_5564} 
              width = {250}
              height = {500} />
          <img src = {IMG_F9B1E97F5F83} 
              width = {250}
              height = {500} />
      </div>
      
    </div>
  );
}

export default App;
