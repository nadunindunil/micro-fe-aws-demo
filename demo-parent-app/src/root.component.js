import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './root.component.css';

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/app1" className="link">
          App 1
        </Link>
        <Link to="/app2" className="link">
          App 2
        </Link>
      </nav>
    </BrowserRouter>
  );
}
