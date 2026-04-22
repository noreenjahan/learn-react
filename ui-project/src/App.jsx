import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
      intro: ' ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur enim.',
      tag: 'Satisfied',
      color:'MidnightBlue'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1675349488583-5e3473df6c2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate ratione scrabbles data bksaaw.',
      tag: 'Underserved',
      color:'deeppink'
    },
     {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate ratione scrabbles data bksaaw.',
      tag: 'Underlearning',
      color:'brown'
    },
     {
      img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate ratione scrabbles data bksaaw.',
      tag: 'skilled',
      color:'Fuchsia'
     },
    {
      img: 'https://plus.unsplash.com/premium_photo-1669627111607-fd97efe8866c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
      intro: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur enim.',
      tag: 'Underbanked',
      color:'teal'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
