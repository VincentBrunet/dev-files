import * as React from 'react';
import { Component } from '../primitives/Component';
import { TailWind } from '../primitives/TailWind';
import { MenuBar } from './MenuBar';
import { Panel } from './Panel';
import { StatusBar } from './StatusBar';

export interface WindowProps {}

export interface WindowState {}

export class Window extends Component<WindowProps, WindowState> {
  state: WindowState = {};

  onCreate() {}
  onDestroy() {}

  onUpdateProps() {}
  onUpdateState() {}

  onRender() {
    return (
      <TailWind attrs={['flex-col', 'w-full']}>
        <TailWind attrs={['flex-grow-0']}>
          <MenuBar />
        </TailWind>
        <TailWind attrs={['flex-shrink']}>
          <Panel />
        </TailWind>
        <TailWind attrs={['flex-grow-0']}>
          <StatusBar />
        </TailWind>
      </TailWind>
    );
  }
}
