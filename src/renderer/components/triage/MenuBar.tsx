import * as React from 'react';
import { Component } from '../primitives/Component';
import { TailWind } from '../primitives/TailWind';

export interface MenuBarProps {}

export interface MenuBarState {}

export class MenuBar extends Component<MenuBarProps, MenuBarState> {
  state: MenuBarState = {};

  onCreate() {}
  onDestroy() {}

  onUpdateProps() {}
  onUpdateState() {}

  onRender() {
    return <TailWind attrs={['bg-gray-200']}>MenuBar</TailWind>;
  }
}
