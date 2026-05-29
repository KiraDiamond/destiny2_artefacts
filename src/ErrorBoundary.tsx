import { Component, type ErrorInfo, type ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Destiny 2 Artifact Codex crashed.', error, errorInfo)
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <main className="crash-shell">
        <section className="crash-panel" role="alert" aria-live="assertive">
          <p className="crash-eyebrow">Runtime error</p>
          <h1>The artifact codex hit an unexpected failure.</h1>
          <p>
            Reload the page to retry. If this keeps happening after a data edit, run
            <code> npm run validate:data</code> before shipping the change.
          </p>
          <button type="button" className="crash-button" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </section>
      </main>
    )
  }
}
