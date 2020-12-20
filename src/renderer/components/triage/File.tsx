import { exec, spawn } from 'child_process';
import * as React from 'react';
import { Path } from '../../types/Path';
import { Component } from '../primitives/Component';
import { TailWind } from '../primitives/TailWind';

export interface FileProps {
  path: Path;
}

export interface FileState {}

export class File extends Component<FileProps, FileState> {
  state: FileState = {};

  onCreate() {}
  onDestroy() {}

  onUpdateProps() {}
  onUpdateState() {}

  onRender() {
    return (
      <TailWind attrs={['flex-row', 'flex-grow-0']}>
        <TailWind onClick={this.onClickExplorer} attrs={['flex-grow-0']}>
          [F]
        </TailWind>
        <TailWind onClick={this.onClickTerminal} attrs={['flex-grow-0']}>
          [T]
        </TailWind>
        <TailWind>{this.props.path.value}</TailWind>
      </TailWind>
    );
  }

  onClickExplorer = () => {
    console.log('clicked');
    const { value } = this.props.path;
    console.log('clicked', value);
    exec(`open ${value}`, (error, stdout, stderr) => {
      console.log('res', error, stdout, stderr);
    });
  };

  onClickTerminal = () => {
    spawn('bash', [], {
      shell: true,
    });
  };
}
