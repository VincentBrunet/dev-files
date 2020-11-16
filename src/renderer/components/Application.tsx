import * as React from 'react';
import { Component } from './Component';
import { Panel } from './triage/Panel';

export interface ApplicationProps {}

export interface ApplicationState {}

export class Application extends Component<ApplicationProps, ApplicationState> {
  state: ApplicationState = {};

  onCreate() {}
  onDestroy() {}

  onRender() {
    return <Panel />;
  }
}
