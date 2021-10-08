import * as React from 'react';
import App from '../../src/App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
    return (
      <div className="header">
        <h1 className="main_title">Kristen Ingelman</h1>
        <div>
            <LinkedInIcon />
            <GitHubIcon />
        </div>

      </div>
    )
  }
  
  export default Header;