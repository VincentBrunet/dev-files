import * as fs from 'fs';
import * as React from 'react';
import { Path } from '../../types/Path';
import { Component } from '../primitives/Component';
import { TailWind } from '../primitives/TailWind';
import { File } from './File';

export interface FilesProps {
  path: Path;
}

export interface FilesState {
  files: string[];
}

export class Files extends Component<FilesProps, FilesState> {
  state: FilesState = {
    files: [],
  };

  onCreate() {}
  onDestroy() {}

  onUpdateProps() {
    fs.readdir(this.props.path.value, (error, files) => {
      if (error) {
        console.error('readdir error', error);
        this.setState({
          files: [],
        });
      } else {
        this.setState({
          files: files.map(file => {
            return file;
          }),
        });
      }
    });
  }

  onRender() {
    const { value } = this.props.path;
    const files = this.state.files.map(file => {
      return <File key={file} path={new Path(value + file)} />;
    });
    return (
      <TailWind attrs={['flex-col', 'w-full', 'overflow-auto']}>
        {files}
      </TailWind>
    );
  }
}
