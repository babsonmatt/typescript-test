import * as React from "react";

interface Props {
  logIt: (txt: string) => void;
}

interface State {}

class SomethingElse extends React.Component<Props, State> {
  render() {
    return <button onClick={this.props.logIt("lulz")}>HELLO!</button>;
  }
}

export { SomethingElse };
