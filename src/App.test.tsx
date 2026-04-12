import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Teste 1: Verifica se o App renderiza corretamente e mostra a saudação inicial
test('deve renderizar a saudação inicial na Home', () => {
  render(<App />);
  const saudacao = screen.getByText(/Olá, Família!/i);
  expect(saudacao).toBeInTheDocument();
});

// Teste 2: Verifica a navegação para o ecrã de Agenda (Caminho Feliz)
test('deve navegar para o ecrã de Agenda ao clicar no botão do menu', () => {
  render(<App />);
  
  // Procura o botão de Agenda no menu inferior e clica
  const botaoAgenda = screen.getByRole('button', { name: /agenda/i });
  fireEvent.click(botaoAgenda);
  
  // Verifica se o título "Rotina do Dia" aparece
  const tituloAgenda = screen.getByText(/Rotina do Dia/i);
  expect(tituloAgenda).toBeInTheDocument();
});

// Teste 3: Verifica se os dados da rotina estão a ser exibidos
test('deve exibir os itens da rotina na agenda', () => {
  render(<App />);
  
  // Navega para a agenda
  const botaoAgenda = screen.getByRole('button', { name: /agenda/i });
  fireEvent.click(botaoAgenda);
  
  // Verifica se um item específico da nossa lista padrão aparece
  const itemRotina = screen.getByText(/Despertar com música suave/i);
  expect(itemRotina).toBeInTheDocument();
});