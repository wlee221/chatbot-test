import React from 'react';
import './App.css';

import { withAuthenticator, ChatBot, SignOut } from 'aws-amplify-react'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const handleComplete = (err, confirmation) => {
    if (err) {
      alert('Bot conversation failed')
      return;
    }
    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Trip booked. Thank you! what would you like to do next?';
  }

  return (
    <div className="App">
      <header className="App-header">
        Interaction Test
      </header>
      <br />
      <ChatBot
        title="My Bot"
        botName="BookTrip_dev"
        welcomeMessage="Welcome, how can I help you today?"
        onComplete={handleComplete}
        clearOnComplete={true}
        voiceEnabled={true}
      />
      <SignOut />
    </div>
  );
}

export default withAuthenticator(App);
