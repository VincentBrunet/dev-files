import * as React from 'react';
import { Component } from './Component';

export type TailWindAttr =
  | 'flex'
  | 'flex-row'
  | 'flex-col'
  | 'flex-grow-0'
  | 'flex-grow'
  | 'flex-shrink-0'
  | 'flex-shrink'
  | 'h-full'
  | 'w-full'
  | 'max-h-full'
  | 'max-w-full'
  | 'overflow-auto'
  | 'bg-gray-100'
  | 'bg-gray-200'
  | 'bg-gray-300'
  | 'bg-gray-400'
  | 'bg-gray-500'
  | 'bg-gray-600';

export interface TailWindProps {
  attrs?: TailWindAttr[];
  onClick?: () => void;
}

export interface TailWindState {
  attrs?: string;
}

export class TailWind extends Component<TailWindProps, TailWindState> {
  state: TailWindState = {};

  onCreate() {}
  onDestroy() {}

  onUpdateProps(keys: Set<string>) {
    if (keys.has('attrs')) {
      this.setState({
        attrs: this.props.attrs?.join(' '),
      });
    }
  }

  onRender() {
    const {props} = this;
    const {state} = this;
    const {onClick} = props;
    return (
      <div className={state.attrs} onClick={onClick}>
        {props.children}
      </div>
    );
  }
}
