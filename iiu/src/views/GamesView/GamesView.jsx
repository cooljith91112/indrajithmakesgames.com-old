import { h } from 'preact'
import { Link } from 'wouter-preact'
import './GamesView.css'

import GameEntry from
  '~/src/components/GameEntry/GameEntry'

import top2019 from './mygames'

export default function () {
  return (
    <main className='view games'>
       <p>
        Choose one or <Link href='/'>
          go back</Link>.
      </p>

      <ol>
      {top2019.map(game => (
          <li key={game[0]}>
            <GameEntry {...{
              ...game
            }} />
          </li>
      ))}
      </ol>
    </main>
  )
}
