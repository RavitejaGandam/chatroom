import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="
        bfc29f42-0229-4323-9a37-fea330ef4a4e"
        userName="Raviteja"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

      />
    </div>
  );
}

export default App;
