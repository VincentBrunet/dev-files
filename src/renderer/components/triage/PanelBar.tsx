import * as React from 'react';
import { Component } from '../primitives/Component';
import { TailWind } from '../primitives/TailWind';

export interface PanelBarProps {}

export interface PanelBarState {}

export class PanelBar extends Component<PanelBarProps, PanelBarState> {
  state: PanelBarState = {};

  onCreate() {}
  onDestroy() {}

  onUpdateProps() {}
  onUpdateState() {}

  onRender() {
    return <TailWind>Hello</TailWind>;
  }
}
