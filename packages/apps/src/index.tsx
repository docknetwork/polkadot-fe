import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <img src='/dock-mainnet.png' />
    <h1 style={{ textAlign: 'center' }}>Dock Blockchain Closure Announcement</h1>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'left', maxWidth: '600px' }}>
        <p style={{ fontSize: '18px' }}>Thank you for your interest in the Dock blockchain. The Dock network has migrated its functionality and all tokens to the cheqd blockchain. The official migration window ended on March 15, 2025. This strategic move allows us to leverage enhanced capabilities and continue delivering innovative blockchain solutions.</p>
        <p style={{ fontSize: '18px' }}>For more information on the merger please read our detailed <a href='https://www.dock.io/post/dock-and-cheqd-form-alliance-to-accelerate-global-adoption-of-decentralized-id' target='_blank'>blog post</a>.</p>
        <h1 style={{ textAlign: 'center' }}>Get in Touch with cheqd</h1>
        <p style={{ fontSize: '18px' }}>We encourage you to stay connected with the cheqd community:</p>
        <ul style={{ fontSize: '18px' }}>
          <li>Website: <a href='https://cheqd.io' target='_blank'>https://cheqd.io</a></li>
          <li>Telegram: <a href='https://t.me/cheqd' target='_blank'>https://t.me/cheqd</a></li>
        </ul>
        <p style={{ fontSize: '18px' }}>Thank you for your understanding and continued support.<br />
          <br />
          The Dock Team
        </p>
      </div>
    </div>
  </div>
);

const rootId = 'root';
const rootElement = document.getElementById(rootId);

if (!rootElement) {
  throw new Error(`Unable to find element with id '${rootId}'`);
}

createRoot(rootElement).render(<App />);
