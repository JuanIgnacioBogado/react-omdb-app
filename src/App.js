import React from 'react';
import { List } from './containers/List';

export const App = () => {
  return (
    <main className="bg-dark min-vh-100">
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <div className="container">
          <a href="/" className="navbar-brand">
            Movie App
          </a>
        </div>
      </nav>

      <List />
    </main>
  );
};
