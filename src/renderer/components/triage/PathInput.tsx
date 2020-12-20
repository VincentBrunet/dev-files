import * as React from 'react';
import { Path } from '../../types/Path';
import { Component } from '../primitives/Component';

export interface PathInputProps {
  path: Path;
  onChange: (path: Path) => void;
}

export interface PathInputState {}

export class PathInput extends Component<PathInputProps, PathInputState> {
  state: PathInputState = {};

  onCreate() {}
  onDestroy() {}

  onUpdateProps() {}
  onUpdateState() {}

  onRender() {
    return (
      <input
        type="text"
        value={this.props.path.value}
        onChange={this.onChange}
        style={{
          width: '100%',
          border: '1px solid black',
          padding: 10,
        }}
        />
    );
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(new Path(event.target.value));
  };
}
