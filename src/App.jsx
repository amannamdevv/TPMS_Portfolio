import React, { useState } from 'react';
import PromoVideo from './components/PromoVideo';
import Home from './pages/Home';

function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative scroll-smooth">
      <main>
        <Home onWatchVideo={() => setShowVideo(true)} />
      </main>

      {showVideo && <PromoVideo onClose={() => setShowVideo(false)} />}
    </div>
  );
}

export default App;
