import * as React from 'react';
import { compose, withState, withProps, pure } from 'recompose';
import { SomethingElse } from './somethingElse';

interface Props {
  moo: (a: string) => void;
  cow: number;
}

interface State {
  testa: string;
}

class Something extends React.Component<Props, State> {
  logIt = txt => {
    console.log('yo', txt);
  };

  render() {
    return (
      <div>
        <button onClick={this.props.moo}>moo</button>
        <div>state: {JSON.stringify(this.state)}</div>
        <div>props: {JSON.stringify(this.props)}</div>
        <SomethingElse logIt={this.logIt} />
      </div>
    );
  }
}

const test = () => <div>test</div>;

const enhance = compose<Props, { a: 'b' }>(
  withProps({ testProp: 'aaaa' }),
  pure
);

const EnhancedSomething = enhance(Something);
export { EnhancedSomething };
// export const CreateAccountContainer = compose<Props, {}>(
//   graphql(createAccount, { name: 'createAccount' }),
//   pure
// )(CreateAccountCtrl);
