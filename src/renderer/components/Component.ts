import * as React from 'react';

export interface ComponentProps {}
export interface ComponentState {}

export abstract class Component<
  Props = ComponentProps,
  State = ComponentState
> extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.safe(this.onAlloc);
  }

  onAlloc() {}
  onCreate() {}
  onDestroy() {}

  onRender(): React.ReactNode | undefined {
    return undefined;
  }

  onUpdate() {}
  onUpdateProps() {}
  onUpdateState() {}

  async safe(cb: () => void) {
    try {
      await cb.call(this);
    } catch (e) {
      console.log('Error', e);
    }
  }

  componentDidMount() {
    this.safe(this.onCreate);
    this.safe(this.onUpdateProps);
    this.safe(this.onUpdateState);
    this.safe(this.onUpdate);
  }
  componentWillUnmount() {
    this.safe(this.onDestroy);
  }
  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>
  ) {
    if (!this.equals(this.props, nextProps)) {
      return true;
    }
    if (!this.equals(this.state, nextState)) {
      return true;
    }
    return false;
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (!this.equals(this.props, prevProps)) {
      this.safe(this.onUpdateProps);
    }
    if (!this.equals(this.state, prevState)) {
      this.safe(this.onUpdateState);
    }
    this.safe(this.onUpdate);
  }

  render() {
    try {
      return this.onRender() ?? [];
    } catch (e) {
      console.log('Error', e);
      return [];
    }
  }

  private equals<T>(a: Readonly<T>, b: Readonly<T>) {
    /* eslint-disable */
    if ((a === null) !== (b === null)) {
      return false;
    }
    if (a === b) {
      return true;
    }
    for (const p in a) {
      if (a.hasOwnProperty(p)) {
        if (!b.hasOwnProperty(p)) {
          return false;
        }
        if (a[p] !== b[p]) {
          return false;
        }
      }
    }
    for (const p in b) {
      if (b.hasOwnProperty(p)) {
        if (!a.hasOwnProperty(p)) {
          return false;
        }
      }
    }
    return true;
    /* eslint-enable */
  }
}
