import * as React from 'react';
import { Component } from '../primitives/Component';
import { TailWind } from '../primitives/TailWind';

export interface StatusBarProps {}

export interface StatusBarState {}

export class StatusBar extends Component<StatusBarProps, StatusBarState> {
  state: StatusBarState = {};

  onCreate() {}
  onDestroy() {}

  onUpdateProps() {}
  onUpdateState() {}

  onRender() {
    return <TailWind attrs={['bg-gray-200']}>StatusBar</TailWind>;
  }
}
