import React from 'react'
import Link from 'next/link'
import Head from '../component/Head'
import Nav from '../component/Nav'

export default()=> (
  <div>
    <Head/>
    <Nav title='About'/>
    <div className='contentWrapper'>
      <h2>About</h2>
      <p>
        <span className='author'>Supreme Chancellor</span>: Did you ever hear the tragedy of Darth Plagueis "the wise"?
Anakin Skywalker: No.<br/>
<span className='author'>Supreme Chancellor</span>: I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying.
Anakin Skywalker: He could actually save people from death?<br/>
<span className='author'>Supreme Chancellor</span>: The dark side of the Force is a pathway to many abilities some consider to be unnatural.
Anakin Skywalker: What happened to him?<br/>
<span className='author'>Supreme Chancellor</span>: He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.
      </p>
      <br/>
      <br/>
      <img src='https://i.imgur.com/YsbKHg1.jpg'/>
      <br/>
      <img src='https://s-media-cache-ak0.pinimg.com/originals/31/89/5b/31895b26cadef100f49526147f3bc1f3.jpg'/>
    </div>
  </div>
)
