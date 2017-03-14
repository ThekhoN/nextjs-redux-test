import React from 'react'
import Link from 'next/link'

const links = ['home', 'about']

export default() => (
  <nav>
    <ul>
      {links.map((link, i) => {
        let href = '/'
        if(link !== 'home'){
          href = `${link}`
        }
        return (<li className='button-clear button'><Link href={href}>
          {link}
        </Link></li>)
      })}
    </ul>
  </nav>
)
