import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/CV.pdf';
import Skills from '../../components/Skills';
import { resume } from '../../Data';
import ResumeItem from '../../components/ResumeItem';
import './about.css';

export const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section__title'>
          About <span>Me</span>
        </h2>
        <div className='about__container grid'>
          <div className='about__info'>
            <h3 className='section__subtitle'>Personal Info</h3>
            <ul className='info_list grid'>
              <Info />
            </ul>
            <a href={CV} download='Serge_Mthombeni_CV.pdf' className='button'>
              Download Cv <span className='button__icon'>
                <FaDownload />
              </span>
            </a>
            <div className='stats grid'>
              <Stats />
            </div>
          </div>
        </div>
      </section>

      <div className='separator'></div>
      <section className='skills'>
        <h3 className='section__subtitle subtitle__center'>My Skills</h3>
        <div className='skills__container grid'>
          <Skills />
        </div>
      </section>
      <div className='separator'></div>
      <section className='resume'>
        <h3 className='section__subtitle subtitle__center'>
          Experience & Education
        </h3>
        <div className='resume__container grid'>
          <div className='resume__data'>
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />;
              }
              return null; // Handle other categories or remove this line if not needed
            })}
          </div>
          <div className='resume__data'>
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />;
              }
              return null; // Handle other categories or remove this line if not needed
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
