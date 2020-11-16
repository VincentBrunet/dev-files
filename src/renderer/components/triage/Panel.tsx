import * as React from 'react';
import { Path } from '../../types/Path';
import { Component } from '../Component';
import { Layout } from '../primitives/Layout';
import { Files } from './Files';
import { PathInput } from './PathInput';

export interface PanelProps {}

export interface PanelState {
  path: Path;
}

export class Panel extends Component<PanelProps, PanelState> {
  state: PanelState = {
    path: new Path('/'),
  };

  onCreate() {}
  onDestroy() {}

  onUpdateProps() {}
  onUpdateState() {}

  onRender() {
    return (
      <Layout direction="column">
        <PathInput path={this.state.path} onChange={this.onChange} />
        <Files path={this.state.path} />
      </Layout>
    );
  }

  onChange = (path: Path) => {
    this.setState({
      path,
    });
  };
}
