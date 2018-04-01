import * as React from 'react'
import '../../sass/main.scss'
import { Toggleable } from '../toggleable'

export class Main extends React.Component<{}> {
  public render() {
    return (
      <main>
        <Toggleable content={<Content />}>
          {(toggled, onToggle) => (
            <button onClick={onToggle}><h1>Yo {toggled ? '-' : '+'}</h1></button>
          )}
        </Toggleable>
      </main>
    )
  }
}

const Content: React.SFC = () => <h2 className="content">neato-keen</h2>
