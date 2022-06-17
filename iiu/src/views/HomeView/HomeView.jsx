import { h } from 'preact'
import { Link } from 'wouter-preact'

import {
  useHashLocation
} from '~/src/utils/utils.routing'

import ThemeSelector from
  '~/src/components/ThemeSelector/ThemeSelector'

import './HomeView.css'

export default function ({ themeEngine }) {
  const setLocation = useHashLocation()[1]

  return (
    <main className='view home'>
      <h1>
        IIU - Indrajith K L's Interactive Universe
      </h1>

      <section>
        <p>
          <div className='intro'>
          A Collection of Interactive Fictions by Indrajith K L.
          </div>
        </p>
      </section>

      <hr />

      <section>
        <h2>
          Interface theme
        </h2>

        <ThemeSelector {...{
          themeEngine
        }} />

        <p>
          <small>
            Double-click the input field during the game
            to enter full-screen mode.
          </small>
        </p>
      </section>

      <hr />

      <section>
        <h2>
          Play a game from the list
        </h2>

        <p>
          <Link href={'/#/games/'}>
            Indrajith's IF List
          </Link>
        </p>
      </section>
      <hr />
      <section className='copyright'>
        All Games/IF are Copyrighted to Indrajith K L under  <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://creativecommons.org/licenses/by-sa/4.0/'
        >
          CC BY-SA 4.0
        </a>
      </section>
      <section>
        <div className='elseif'>
          * This website uses ElseIfPlayer as an IF Interpreter. Original Source code can be found in this <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/He4eT/elseifplayer'>
              repository
            </a>.
        </div>
      </section>
    </main>)
}
