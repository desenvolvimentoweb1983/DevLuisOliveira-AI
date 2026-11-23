
import { useState } from "react";
import "./App.css";
import { businesses } from "./data/businesses";
import { getBotResponse } from "./services/chatbotService";

function App() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function openChat(business) {
    setSelectedBusiness(business);

    const savedMessages = localStorage.getItem(
      `devluis-ai-${business.id}`
    );

    setMessages(
      savedMessages
        ? JSON.parse(savedMessages)
        : [{ sender: "bot", text: business.welcome }]
    );
  }

  function closeChat() {
    setSelectedBusiness(null);
    setMessages([]);
    setInput("");
  }

  function sendMessage(message = input) {
    if (!message.trim() || !selectedBusiness) return;

    const userMessage = {
      sender: "user",
      text: message.trim(),
    };

    const botMessage = {
      sender: "bot",
      text: getBotResponse(selectedBusiness.id, message),
    };

    const updatedMessages = [
      ...messages,
      userMessage,
      botMessage,
    ];

    setMessages(updatedMessages);

    localStorage.setItem(
      `devluis-ai-${selectedBusiness.id}`,
      JSON.stringify(updatedMessages)
    );

    setInput("");
  }

  function clearChat() {
    if (!selectedBusiness) return;

    const initialMessages = [
      { sender: "bot", text: selectedBusiness.welcome },
    ];

    setMessages(initialMessages);

    localStorage.removeItem(
      `devluis-ai-${selectedBusiness.id}`
    );
  }

  return (
    <div className="app">
      <header className="header">
        <a href="#inicio" className="logo">
          <span className="logo-icon">AI</span>
          <span>
            DevLuisOliveira<span className="logo-highlight"> AI</span>
          </span>
        </a>

        <nav className="navigation">
          <a href="#inicio">Início</a>
          <a href="#demonstracoes">Demonstrações</a>
          <a href="#sobre">Sobre o projeto</a>
        </nav>

        <a href="#demonstracoes" className="header-button">
          Experimentar <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <div className="hero-label">
              <span className="status-dot"></span>
              SOLUÇÕES INTELIGENTES PARA EMPRESAS
            </div>

            <h1>
              Seu negócio merece
              <br />
              um atendimento
              <br />
              <span>mais inteligente.</span>
            </h1>

            <p className="hero-description">
              Conheça demonstrações interativas de assistentes
              virtuais personalizados para empresas. Experimente
              diferentes possibilidades de atendimento e descubra
              o que podemos desenvolver para o seu negócio.
            </p>

            <div className="hero-actions">
              <a href="#demonstracoes" className="primary-button">
                Explorar demonstrações <span>→</span>
              </a>

              <a href="#sobre" className="secondary-button">
                Conhecer o projeto
              </a>
            </div>

            <div className="hero-footer">
              <span>✦</span> TECNOLOGIA • AUTOMAÇÃO • PERSONALIZAÇÃO
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="hero-glow"></div>

            <div className="ai-core">
              <span>AI</span>
              <div className="core-line"></div>
              <small>INTELLIGENCE</small>
            </div>

            <div className="floating-card floating-top">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Atendimento inteligente</strong>
                <small>Experiência personalizada</small>
              </div>
            </div>

            <div className="floating-card floating-bottom">
              <span className="floating-icon">⌘</span>
              <div>
                <strong>Soluções digitais</strong>
                <small>Para diferentes negócios</small>
              </div>
            </div>
          </div>
        </section>

        <section className="business-section" id="demonstracoes">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                EXPERIMENTE NA PRÁTICA
              </span>

              <h2>
                Nossos assistentes
                <span> virtuais.</span>
              </h2>

              <p>
                Escolha um segmento e converse com um assistente
                demonstrativo. Cada experiência apresenta
                funcionalidades personalizadas para aquele negócio.
              </p>
            </div>

            <div className="section-counter">
              <strong>04</strong>
              <span>DEMONSTRAÇÕES</span>
            </div>
          </div>

          <div className="business-grid">
            {businesses.map((business, index) => (
              <article
                className="business-card"
                key={business.id}
                style={{ "--business-color": business.color }}
              >
                <div className="card-top">
                  <span className="card-number">
                    0{index + 1}
                  </span>

                  <span className="card-icon">
                    {business.icon}
                  </span>
                </div>

                <span className="business-category">
                  {business.category}
                </span>

                <h3>{business.name}</h3>

                <p>{business.description}</p>

                <button
                  className="card-button"
                  onClick={() => openChat(business)}
                >
                  Experimentar assistente
                  <span>↗</span>
                </button>

                <div className="card-decoration"></div>
              </article>
            ))}
          </div>

          <div className="demo-notice">
            <span>ⓘ</span>
            <p>
              <strong>Ambiente demonstrativo:</strong> todos os
              negócios, preços, endereços, profissionais e informações
              apresentados são fictícios. Nenhuma operação comercial
              real é realizada.
            </p>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-content">
            <span className="section-eyebrow">
              SOBRE O PROJETO
            </span>

            <h2>
              Tecnologia que transforma
              <span> a experiência de atendimento.</span>
            </h2>

            <p>
              O DevLuisOliveira AI apresenta possibilidades de
              desenvolvimento de assistentes virtuais personalizados
              para empresas de diferentes segmentos.
            </p>

            <p>
              Cada solução pode ser adaptada à identidade visual,
              aos serviços, às informações e às necessidades
              específicas de cada negócio.
            </p>
          </div>

          <div className="about-features">
            <div className="feature">
              <span>01</span>
              <div>
                <h3>Personalização</h3>
                <p>Assistentes adaptados à identidade da empresa.</p>
              </div>
            </div>

            <div className="feature">
              <span>02</span>
              <div>
                <h3>Experiência interativa</h3>
                <p>Atendimento demonstrativo com conversas contextualizadas.</p>
              </div>
            </div>

            <div className="feature">
              <span>03</span>
              <div>
                <h3>Soluções digitais</h3>
                <p>Tecnologia aplicada às necessidades de cada negócio.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <span className="section-eyebrow">SEU NEGÓCIO PODE SER O PRÓXIMO</span>

          <h2>
            Vamos desenvolver uma solução
            <span> para sua empresa?</span>
          </h2>

          <p>
            Entre em contato e conheça as possibilidades de
            desenvolvimento de um assistente virtual personalizado.
          </p>

          <a
            href="mailto:contato@devluisoliveira.com"
            className="primary-button"
          >
            Solicitar informações <span>↗</span>
          </a>

          <small>
            O endereço de contato deverá ser substituído pelo canal
            comercial oficial antes da publicação.
          </small>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="logo">
          <span className="logo-icon">AI</span>
          <span>
            DevLuisOliveira<span className="logo-highlight"> AI</span>
          </span>
        </a>

        <p>
          © {new Date().getFullYear()} DevLuisOliveira. Todos os
          direitos reservados.
        </p>

        <span className="footer-credit">
          DESENVOLVIDO POR DEVLUISOLIVEIRA
        </span>
      </footer>

      {selectedBusiness && (
        <div className="chat-overlay">
          <div className="chat-window">
            <div
              className="chat-header"
              style={{ "--business-color": selectedBusiness.color }}
            >
              <div className="chat-business-icon">
                {selectedBusiness.icon}
              </div>

              <div className="chat-business-info">
                <strong>{selectedBusiness.name}</strong>
                <span>
                  <span className="status-dot"></span>
                  Assistente demonstrativo
                </span>
              </div>

              <button
                className="chat-clear"
                onClick={clearChat}
                title="Reiniciar conversa"
              >
                ↻
              </button>

              <button
                className="chat-close"
                onClick={closeChat}
                title="Fechar conversa"
              >
                ×
              </button>
            </div>

            <div className="chat-demo-label">
              DEMONSTRAÇÃO — INFORMAÇÕES FICTÍCIAS
            </div>

            <div className="chat-messages">
              {messages.map((message, index) => (
                <div
                  className={`message-row ${message.sender}`}
                  key={index}
                >
                  {message.sender === "bot" && (
                    <div className="message-avatar">
                      {selectedBusiness.icon}
                    </div>
                  )}

                  <div className="message-bubble">
                    {message.text.split("\n").map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {messages.length === 1 && (
              <div className="chat-suggestions">
                {selectedBusiness.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <form
              className="chat-input-area"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
            >
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                autoFocus
              />

              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Enviar mensagem"
              >
                ➤
              </button>
            </form>

            <div className="chat-footer">
              Demonstração desenvolvida por DevLuisOliveira
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
