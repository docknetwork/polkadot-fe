import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container, Typography, Box, Link, List, ListItem } from '@mui/material';

const App = () => (
  <Container maxWidth="md" style={{ marginTop: '50px' }}>
    <Box>
      <img src='/dock-mainnet.png' alt="Dock Mainnet" style={{ maxWidth: '100%' }} />
    </Box>
    <Typography variant="h4" component="h1" gutterBottom>
      Dock Blockchain Closure Announcement
    </Typography>
    <Box textAlign="left" mt={4}>
      <Typography variant="body1" paragraph>
        Thank you for your interest in the Dock blockchain. The Dock network has migrated its functionality and all tokens to the cheqd blockchain. The official migration window ended on March 15, 2025. This strategic move allows us to leverage enhanced capabilities and continue delivering innovative blockchain solutions.
      </Typography>
      <Typography variant="body1" paragraph>
        For more information on the merger please read our detailed{' '}
        <Link href='https://www.dock.io/post/dock-and-cheqd-form-alliance-to-accelerate-global-adoption-of-decentralized-id' target='_blank'>
          blog post
        </Link>.
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        Get in Touch with cheqd
      </Typography>
      <Typography variant="body1" paragraph>
        We encourage you to stay connected with the cheqd community:
        <List>
          <ListItem>
            Website: <Link href='https://cheqd.io' target='_blank'>https://cheqd.io</Link>
          </ListItem>
          <ListItem>
            Telegram: <Link href='https://t.me/cheqd' target='_blank'>https://t.me/cheqd</Link>
          </ListItem>
        </List>
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for your understanding and continued support.
        <br />
        <br />
        The Dock Team
      </Typography>
    </Box>
  </Container>
);

const rootId = 'root';
const rootElement = document.getElementById(rootId);

if (!rootElement) {
  throw new Error(`Unable to find element with id '${rootId}'`);
}

createRoot(rootElement).render(<App />);
