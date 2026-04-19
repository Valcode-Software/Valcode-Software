import { useState } from 'react'
import './App.css'
import AppRouter from "./routes/AppRouter";
import WhatsAppButton from "./components/whatsapp/whatsappbutton";
import ValcoChatButton from "./components/chat/floatingchat";
import ErrorBoundary, { ErrorFallback } from './components/error/ErrorBoundary'

function App() {
  return (
    <>
      <ValcoChatButton />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppRouter />
      </ErrorBoundary>
      <WhatsAppButton isFloating={true} />
    </>
  );
}

export default App;
