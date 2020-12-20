import * as React from 'react';
import { Path } from '../../types/Path';
import { Component } from '../primitives/Component';
import { TailWind } from '../primitives/TailWind';
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
      <TailWind attrs={['flex-col', 'w-full']}>
        <TailWind attrs={['flex-grow-0']}>
          <PathInput path={this.state.path} onChange={this.onChange} />
        </TailWind>
        <TailWind attrs={['flex-shrink']}>
          <Files path={this.state.path} />
        </TailWind>
      </TailWind>
    );
  }

  onChange = (path: Path) => {
    this.setState({
      path,
    });
  };
}
