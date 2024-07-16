import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './SkillsGallery.css';

const skills = [

    {
        name: 'Github',
        url: 'https://github.com/AdityaGaur7',
        img: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg'
      },
      {
        name: 'HackerRank',
        url: 'https://www.hackerrank.com/adgaur027',
        img: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg'
      },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/adgaur027',
    img: 'https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg'
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/adgaur027',
    img: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg'
},
{
  name: 'GeeksforGeeks',
  url: 'https://auth.geeksforgeeks.org/user/adgaur027',
  img: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg'
},
  {
    name: 'LeetCode',
    url: 'https://www.leetcode.com/aditya027_',
    img: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg'
  },
//   {
//     name: 'CodingNinja',
//     url: 'https://auth.geeksforgeeks.org/user/adgaur027',
//     img: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/coding-ninja.svg'
//   }
  
  
];

const Tilt = ({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5
    });
  }, []);

  return <div ref={tiltRef} className="tilt-card">{children}</div>;
};

const SkillsGallery = () => {
  return (
    <>
<h3 className="skills-title"><span>Coding Profiles</span></h3>
    <div className="skills-gall">
    
      {skills.map((skill, index) => (
        <Tilt key={index}>
          <div className="tiltcard">
            <a href={skill.url} target="_blank" rel="noopener noreferrer">
              <img src={skill.img} alt={skill.name} className="skillicon" />
              <p className="skillname">{skill.name}</p>
            </a>
          </div>
        </Tilt>
      ))}
    </div>
    <br/>
    <hr/>
      </>
  );
};

export default SkillsGallery;
