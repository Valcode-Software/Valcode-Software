import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // Puedes loguear el error a un servicio externo aquí
    // console.error(error, info)
  }

  reset = () => this.setState({ error: null })

  render() {
    const { error } = this.state
    const { FallbackComponent, children } = this.props

    if (error) {
      if (FallbackComponent) {
        return <FallbackComponent error={error} resetError={this.reset} />
      }

      return (
        <div role="alert" style={{ padding: 20 }}>
          <p>Hubo un error al cargar la sección:</p>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(error?.message || error)}</pre>
          <div style={{ marginTop: 12 }}>
            <button onClick={() => (window.location.href = '/inicio')}>Volver al inicio</button>
            <button onClick={this.reset} style={{ marginLeft: 8 }}>Reintentar</button>
          </div>
        </div>
      )
    }

    return children
  }
}

export function ErrorFallback({ error, resetError }) {
  return (
    <div role="alert" style={{ padding: 20 }}>
      <p>Hubo un error al cargar la sección:</p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{String(error?.message || error)}</pre>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => (window.location.href = '/inicio')}>Volver al inicio</button>
        <button onClick={resetError} style={{ marginLeft: 8 }}>Reintentar</button>
      </div>
    </div>
  )
}

export default ErrorBoundary
