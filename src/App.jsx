import { useState } from 'react'
import './App.css'
import AppRouter from "./routes/AppRouter";
import WhatsAppButton from "./components/whatsapp/whatsappbutton";

function App() {
  return (
    <>
      <AppRouter />
      <WhatsAppButton isFloating={true} />
    </>
  );
}

export default App;
