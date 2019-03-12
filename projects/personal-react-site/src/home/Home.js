import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <h1> Space X </h1>
            <p>SpaceX's achievements include the first privately funded liquid-propellant rocket 
                to reach orbit (Falcon 1 in 2008), the first private company to successfully
                 launch, orbit, and recover a spacecraft (Dragon in 2010), the first private company t
                 o send a spacecraft to the International Space Station (Dragon in 2012), the f
                 irst propulsive landing for an orbital rocket (Falcon 9 in 2015), the first reuse 
                 of an orbital rocket (Falcon 9 in 2017), and the first private company to launch a
                 n object into orbit around the sun (Falcon Heavy's payload of a Tesla Roadster in 2018). 
                 SpaceX has flown 16 resupply missions to the International Space Station (ISS) under a 
                 partnership with NASA. NASA also awarded SpaceX a further development contract in 2011 
                 to develop and demonstrate a human-rated Dragon, which would be used to transport astronauts 
                 to the ISS and return them safely to Earth. SpaceX conducted the maiden launch of its 
                 Crew Dragon spacecraft on a NASA-required demonstration flight on March 2, 2019 and is 
                 set to launch its first crewed Crew Dragon later in 2019.
            </p>

            <h1 className="elon"> Elon Musk </h1>
            <p>Elon Reeve Musk FRS ( born June 28, 1971) is a technology entrepreneur and engineer.
                He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead 
                designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.;co-founder 
                and CEO of Neuralink; founder of The Boring Company; co-founder and co-chairman of OpenAI 
                and co-founder of PayPal. In December 2016, he was ranked 21st on the Forbes list of 
                The World's Most Powerful People.As of October 2018, he has a net worth of $22.8 billion 
                and is listed by Forbes as the 54th-richest person in the world.
            <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"></img>
                Born and raised in Pretoria, South Africa, Musk moved to Canada when he was 17 to attend 
                Queen's University. He transferred to the University of Pennsylvania two years later, 
                where he received an economics degree from the Wharton School and a degree in physics from
                the College of Arts and Sciences. He began a Ph.D. in applied physics and material sciences
                at Stanford University in 1995 but dropped out after two days to pursue an entrepreneurial
                career. He subsequently co-founded Zip2, a web software company, which was acquired by 
                Compaq for $340 million in 1999. Musk then founded X.com, an online bank. It merged 
                with Confinity in 2000 and later that year became PayPal, which was bought by eBay for 
                $1.5 billion in October 2002.
            </p>

            <h1 className="elon"> Astronauts </h1>
            <p>An astronaut or cosmonaut is a person trained by a human spaceflight program to command, 
                pilot, or serve as a crew member of a spacecraft. Although generally reserved for professional 
                space travelers, the terms are sometimes applied to anyone who travels into space, including scientists,
                 politicians, journalists, and tourists.
            </p>

            <p> Until 2002, astronauts were sponsored and trained exclusively by governments, either by the 
                military or by civilian space agencies. With the suborbital flight of the privately funded 
                SpaceShipOne in 2004, a new category of astronaut was created: the commercial astronaut. Thanks to Danny Ruales.
            </p>
        </div>
    );
};

export default Home;