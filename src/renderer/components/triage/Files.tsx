import * as fs from 'fs';
import * as React from 'react';
import { Path } from '../../types/Path';
import { Component } from '../Component';
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
        console.log('readdir error', error);
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
    const {value} = this.props.path;
    const files = this.state.files.map(file => {
      return <File key={file} path={new Path(value + file)} />;
    });
    return files;
  }
}
