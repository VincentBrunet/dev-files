import * as React from 'react';
import { Component } from './primitives/Component';
import { Window } from './triage/Window';

export interface ApplicationProps {}

export interface ApplicationState {}

export class Application extends Component<ApplicationProps, ApplicationState> {
  state: ApplicationState = {};

  onCreate() {}
  onDestroy() {}

  onRender() {
    return <Window />;
  }
}
