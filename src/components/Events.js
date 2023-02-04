import "./Events.css";
import Heading from "./Heading";
import left_semi_circle from "../images/semi-circle.svg";
import right_semi_circle from "../images/semi-circle-right.svg";

export default function Events() {
  // main html
  return (
    <>
      <div className="event-div" id="event">
        <Heading text="Upcoming" main="Events" className="event-heading" />
        <img src={left_semi_circle} alt="" className="semicircle-left" />
        <img src={right_semi_circle} alt="" className="semicircle-right" />

        <div className="event-container">
          <div className="row">
            <div className="event-card">
              <h2 className="event-title">Donation Drive</h2>
              <h4>3rd-16th Feb'23 </h4>
              <h4>Timings: 8:30AM - 5:00PM</h4>
              <p className="event-description">
              Giving is not just about donating; it is about making a difference. A donation drive, #Lit-drive, organized in association with The Goonj Foundation marks the beginning of Litopia.
              </p>
              <button className="event-btn">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/CoKlMy1MrUX/?igshid=MDJmNzVkMjY=">Know More</a>
              </button>
            </div>

            <div className="event-card">
              <h2 className="event-title">Launch & Author Session</h2>
              <h4>Coming Soon</h4>
              <h4>Timings: Coming Soon</h4>
              <p className="event-description">
              Sessions by renowned authors of our university will be organized making the event even more exciting and memorable by launching their newly published books.
              </p>
              <button className="event-btn">
                <a target="_blank" rel="noreferrer" href="/">Know More</a>
              </button>
            </div>

            <div className="event-card">
              <h2 className="event-title">Kavi Sammelan</h2>
              <h4>Coming Soon</h4>
              <h4>Timings: Coming Soon</h4>
              <p className="event-description">
              A charismatic evening celebrating the gathering of poets around the city, where they will share their amazing poetry pieces and have us all mesmerized by just their word play! 
              </p>
              <button className="event-btn">
                <a target="_blank" rel="noreferrer" href="https://forms.gle/eMc37w9bBVXJoV5LA">Register</a>
              </button>
            </div>


            <div className="event-card">
              <h2 className="event-title">Book Fair</h2>
              <h4>15th-16th   Feb'23</h4>
              <h4>Timings: 11:00AM - 04:30PM</h4>
              <p className="event-description">
              Since between the pages of a book is a lovely place to be, the book fair will include a variety of genres for every book lover. From fantasy to real-life stories, from mystery to adventure, we've got it all covered! 
              </p>
              <button className="event-btn">
                <a target="_blank" rel="noreferrer" href="/">Know More</a>
              </button>
            </div>

            <div className="event-card">
              <h2 className="event-title">Treasure Hunt</h2>
              <h4>Coming Soon</h4>
              <h4>Timings: Coming Soon</h4>
              <p className="event-description">
              Have you always looked for clues here and there? Or ever tried to solve a mystery? Treasure hunt is all about hunting down the secret treasure with the help of those valuable clues, with the winning team receiving gifts, fest perks and what not!
              </p>
              <button className="event-btn">
                <a target="_blank" rel="noreferrer" href="/">Register</a>
              </button>
            </div>

            <div className="event-card">
              <h2 className="event-title">Lit-Con</h2>
              <h4>Coming Soon</h4>
              <h4>Timings: Coming Soon</h4>
              <p className="event-description">
              Ever dreamed about what it will be like to be in the place of your favourite characters? Well, it's not a dream anymore! Lit-Con gives you a chance to dress up as a fictional person and have a fun panel discussion with other panelist.
              </p>
              <button className="event-btn">
                <a target="_blank" rel="noreferrer" href="https://forms.gle/KTtMjdWcwnS564tX7">Register</a>
              </button>
            </div>

            <div className="event-card">
              <h2 className="event-title">Anvaratt Drama</h2>
              <h4>Coming Soon</h4>
              <h4>Timings: Coming Soon</h4>
              <p className="event-description">
              A unique and enthralling drama act will be performed by none other than Anvratt Theater Group based on iconic plays to entertain the crowd!
              </p>
              <button className="event-btn">
                <a target="_blank" rel="noreferrer" href="/">Register</a>
              </button>
            </div>

            <div className="event-card">
              <h2 className="event-title">Open Mic</h2>
              <h4>Coming soon</h4>
              <h4>Timings: Coming soon</h4>
              <p className="event-description">
              A fun platform for all the words that were left unspoken, open mic provides the opportunity to bring out your hidden talents and let the world know what you've got as the stage awaits your magic!
              </p>
              <button className="event-btn">
                <a target="_blank" rel="noreferrer" href="https://forms.gle/8dx2x4qojH6KadzY7">Register</a>
              </button>
            </div>

         

            
          </div>
        </div>
      </div>
    </>
  );
}
