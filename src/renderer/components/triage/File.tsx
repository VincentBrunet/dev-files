import { exec } from 'child_process';
import * as React from 'react';
import { Path } from '../../types/Path';
import { Component } from '../Component';
import { Layout } from '../primitives/Layout';

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
      <Layout direction="row">
        <Layout onClick={this.onClick} grow={0}>
          open
        </Layout>
        <Layout>{this.props.path.value}</Layout>
      </Layout>
    );
  }

  onClick = () => {
    console.log('clicked');
    const {value} = this.props.path;
    console.log('clicked', value);
    exec(`open ${value}`, (error, stdout, stderr) => {
      console.log('res', error, stdout, stderr);
    });
  };
}
