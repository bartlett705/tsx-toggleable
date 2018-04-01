import * as React from 'react'

export class Toggleable extends React.Component<{ content: React.ReactNode, children: any }, { toggled: boolean }> {
    public state = { toggled: false }

    public render() {
        return (
          <React.Fragment>
            {this.props.children(this.state.toggled, this.toggle)}
            {this.state.toggled && this.props.content}
          </React.Fragment>
        )
    }

    private toggle = () => this.setState((prevState) => ({ toggled: !prevState.toggled }))
}
