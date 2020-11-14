import * as React from 'react';
import { Component } from './Component';

export interface ApplicationProps {}

export interface ApplicationState {}

export class Application extends Component<ApplicationProps, ApplicationProps> {
  state: ApplicationState = {};

  onCreate() {}
  onDestroy() {}

  onRender() {
    return [<div key="1">Hello</div>];
  }
}
