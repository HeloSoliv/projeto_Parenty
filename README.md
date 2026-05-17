# ♡ PARENTY

> **Crescendo juntos com amor** — Plataforma de apoio para pais e responsáveis por crianças PCD (Pessoas com Deficiência).

![Build Status](https://github.com/seu-usuario/parenty/actions/workflows/ci.yml/badge.svg)
![Version](https://img.shields.io/badge/version-1.0.0-purple)
![License](https://img.shields.io/badge/license-MIT-pink)

---

## Problema Real

Pais e responsáveis por crianças PCD (com autismo, TDAH, Síndrome de Down, Paralisia Cerebral, entre outras condições) enfrentam diariamente uma jornada desafiadora e muitas vezes solitária. Há escassez de ferramentas digitais centralizadas que unam suporte emocional, informação qualificada, conexão com outros pais e recursos terapêuticos.

## Proposta de Solução

O **Parenty** é um aplicativo mobile-first que oferece:

- **Rede de apoio e comunidade** – grupos segmentados por condição (TEA, TDAH, Síndrome de Down, Paralisia Cerebral)
- **Jogos educacionais** – desenvolvidos por especialistas para estimular o desenvolvimento infantil
- **Guias educacionais** – conteúdo prático sobre comunicação, desfralde, autonomia e rotinas
- **Cuidado emocional** – check-in diário e materiais de apoio para a saúde mental dos cuidadores
- **Agenda e rotina estruturada** – registro de compromissos, terapias e rotinas visuais
- **Mapa de terapias do GDF** – localização de centros especializados com filtros por especialidade
- **Suporte 24h** – botão flutuante de acesso rápido a atendimento de emergência

## Público-alvo

Pais, mães e responsáveis por crianças e adolescentes PCD, especialmente no Distrito Federal e entorno.

---

## Funcionalidades Principais

- Tela inicial com estatísticas de engajamento (dias seguidos, atividades, marcos)
- Acesso rápido às 8 seções do app
- Timeline de rotina diária com horários e dicas
- Biblioteca de atividades sensoriais e criativas para fazer em casa
- Chat da comunidade com grupos por condição
- Fórum de discussão com tópicos em destaque
- Jogos interativos: Comunicação Visual, Sequência Lógica, Reconhecimento de Emoções, Interação Social
- Mapa de centros de reabilitação do GDF com filtros
- Perfil de desenvolvimento com metas e conquistas
- Botão flutuante de suporte 24h com acesso a especialista e SAMU

---

## Tecnologias Utilizadas

| Camada | Tecnologia |
|--------|-----------|
| Interface | React 18 + TypeScript |
| Estilo | Tailwind CSS |
| Componentes | shadcn/ui (Radix UI) |
| Ícones | Lucide React |
| Testes | React Testing Library + Jest |
| Linting | ESLint |
| CI | GitHub Actions |
| Versionamento | Semântico (1.0.0) |

---

## Instalação

### Pré-requisitos

- Node.js >= 16
- npm >= 8

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/parenty.git
cd parenty

# Instale as dependências
npm install
```

---

## Execução

```bash
# Modo desenvolvimento
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

```bash
# Build de produção
npm run build
```

---

## Testes

```bash
# Rodar todos os testes
npm test
```

Os testes cobrem:

1. **Caminho feliz** – renderização da saudação inicial na Home
2. **Navegação** – navegação para a tela de Agenda via menu inferior
3. **Dados da rotina** – exibição dos itens da rotina estruturada na Agenda

---

## Lint

```bash
# Verificar qualidade do código
npm run lint
```

Utiliza ESLint com as configurações padrão do `react-app`, cobrindo regras de boas práticas para React e TypeScript.

---

## Pipeline CI (GitHub Actions)

A cada `push` ou `pull request` na branch `main`, o workflow executa automaticamente:

1. Checkout do repositório
2. Setup do Node.js 20
3. Instalação das dependências (`npm ci`)
4. Execução do lint (`npm run lint`)
5. Execução dos testes (`npm test`)

Arquivo de configuração: `.github/workflows/ci.yml`

---

## Versão

**1.0.0** — Primeira versão estável. Ver arquivo `VERSION`.

---

## Estrutura do Projeto

```
parenty/
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline de CI
├── Controller/             # Controllers da aplicação
├── Model/                  # Models de dados
├── View/                   # Views/templates
├── bootstrap/              # Bootstrap da aplicação
├── config/                 # Configurações
├── fonts/                  # Fontes customizadas
├── img/                    # Imagens estáticas
├── src/
│   ├── ui/                 # Componentes shadcn/ui
│   ├── App.tsx             # Componente principal
│   ├── App.test.tsx        # Testes automatizados
│   └── globals.css         # Estilos globais
├── styles/                 # Estilos globais (CSS)
├── tests/                  # Testes unitários adicionais
├── .gitignore
├── composer.json           # Dependências PHP
├── composer.lock
├── index.php               # Entry point
├── LICENSE                 # Licença MIT
├── package.json            # Dependências Node.js
├── phpunit.xml             # Configuração PHPUnit
├── README.md
└── VERSION                 # Versão semântica
```

---

## Autor

Desenvolvido como projeto acadêmico de desenvolvimento de software com propósito social.

**Disciplina:** Engenharia de Software  
**Tema:** Plataforma de apoio para pais de crianças PCD

---

## Link do Repositório

[https://github.com/seu-usuario/parenty](https://github.com/seu-usuario/parenty)


## Link do Vercel

https://projeto-parenty.vercel.app

---

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
