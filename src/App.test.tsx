import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  // Mock de fetch para devolver datos de ejemplo
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]), // Devuelve un array vacío de encuestas
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test('muestra el título Encuestas', async () => {
  render(<App />);
  // Espera a que el título esté en el documento
  const titulo = await screen.findByText(/encuestas/i);
  expect(titulo).toBeInTheDocument();
});