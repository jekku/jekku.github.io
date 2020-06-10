import React from 'react'
import HomeLayout from '../layouts/home'
import '../styles/main-container.scss'

const IndexPage = () => {
  return (
    <HomeLayout>
      <div className='main-container'>
        <div className='heading'>
          <p> {`The name's Jek. Jekri Orlina.`} </p>
        </div>

        <div className='contents'>
          <p> I create solutions using Javascript, Elixir, and Python </p>
          <p>
            {' '}
            I specialize in building risky features related to time and money{' '}
          </p>
          <p>
            {' '}
            {`I've spoken and taught in`}
            <a href='https://technology.inquirer.net/67844/gdg-ph-brings-gdg-devfest-philippines-2017'>
              {' '}
              GDG Devfest 2017
            </a>
            ,
            <a href='https://www.facebook.com/DevConPH/photos/continually-explaining-the-elements-of-elixir-by-our-very-own-mr-jekri-orlina-at/10155721322488585/'>
              {' '}
              Devcon PH Roadshow 2018
            </a>
            , and as a distinguished alumni at the
            <a href='https://www.facebook.com/ICS.UPLB/posts/1964521866909021'>
              {' '}
              Institute of Computer Science UPLB Career Talks
            </a>
          </p>
          <p>
            {' '}
            I am also part of the gang that ran{' '}
            <a href='https://github.com/opensourceph'> OpenSource PH </a> - the
            group that hosted{' '}
            <a href='https://opensourceph.github.io/hacktoberfestmnl2017/'>
              {' '}
              Hacktober Fest Manila 2017{' '}
            </a>{' '}
          </p>
        </div>
      </div>
    </HomeLayout>
  )
}

export default IndexPage
