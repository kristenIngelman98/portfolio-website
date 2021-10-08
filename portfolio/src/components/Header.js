import * as React from 'react';
import { App } from '../../src/App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
    return (
        <div className="header">
            <h1 className="main_title">Kristen Ingelman</h1>
            <div className="header_icons">
                <a target="_blank" href="https://www.linkedin.com/in/kristen-ingelman/">
                    <LinkedInIcon />
                </a>
                <a target="_blank" href="https://github.com/kristenIngelman98">
                    <GitHubIcon />
                </a>
            </div>
        </div>
    )
}

export default Header;