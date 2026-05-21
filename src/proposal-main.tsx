import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProposalApp from './ProposalApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProposalApp />
  </StrictMode>
);
