import * as React from 'react';
import { Component } from '../Component';

export interface LayoutProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  grow?: number;
  shrink?: number;
  onClick?: () => void;
}

export class Layout extends Component<LayoutProps> {
  onRender() {
    const {props} = this;
    return (
      <div
        onClick={props.onClick}
        style={{
          flexDirection: props.direction,
          flexGrow: props.grow,
          flexShrink: props.shrink,
        }}>
        {this.props.children}
      </div>
    );
  }
}
