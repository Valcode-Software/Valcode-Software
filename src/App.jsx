import { useState } from 'react'
import './App.css'
import AppRouter from "./routes/AppRouter";
import WhatsAppButton from "./components/whatsapp/whatsappbutton";
import ValcoChatButton from "./components/chat/floatingchat";

function App() {
  return (
    <>
      <ValcoChatButton />
      <AppRouter />
      <WhatsAppButton isFloating={true} />
    </>
  );
}

export default App;
