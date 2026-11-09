import React, { useEffect, useState } from "react";
import clinicLogo from "./img/logo.png";
import facialResult from "./img/resultado 7.png";
import noseResult from "./img/resultado 6.png";
import lipsResult from "./img/resultado 4.png";
import heroResult from "./img/resultado 9.png";
import doctorPortrait from "./img/dra-amanda.png";

const WHATSAPP_NUMBER = "(11) 97616-9791";
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma avaliação na Essencial Derm.";
const whatsappUrl = `https://wa.me/55${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const services = [
  {
    number: "01",
    name: "Harmonização facial",
    description: "Valorize os contornos do rosto com equilíbrio e respeito à sua expressão.",
    image: facialResult,
    alt: "Resultado de harmonização facial antes e depois",
  },
  {
    number: "02",
    name: "Rinomodelação",
    description: "Um cuidado personalizado para valorizar o perfil e a harmonia facial.",
    image: noseResult,
    alt: "Resultado de rinomodelação antes e depois",
  },
  {
    number: "03",
    name: "Preenchimento labial",
    description: "Realce os lábios com delicadeza, proporção e naturalidade.",
    image: lipsResult,
    alt: "Resultado de preenchimento labial antes e depois",
  },
];

const values = [
  { icon: "✳", title: "Beleza natural", text: "Resultados que respeitam a sua essência." },
  { icon: "♡", title: "Cuidado próximo", text: "Um atendimento atencioso, do início ao fim." },
  { icon: "✧", title: "Plano individual", text: "Cada jornada começa com uma boa conversa." },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="arrow-icon"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function WhatsAppLink({ children, className = "" }) {
  return (
    <a
      className={className}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agende sua avaliação pelo WhatsApp"
    >
      {children}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -35px 0px" },
    );

    targets.forEach((target) => {
      target.classList.add("reveal-pending");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#inicio" onClick={closeMenu} aria-label="Essencial Derm, início">
          <img className="brand-logo" src={clinicLogo} alt="Essencial Derm" />
        </a>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Navegação principal">
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#sobre" onClick={closeMenu}>A clínica</a>
          <a href="#servicos" onClick={closeMenu}>Tratamentos</a>
          <a href="#equipe" onClick={closeMenu}>Nossa essência</a>
          <WhatsAppLink className="button button-small nav-cta">
            Agende sua avaliação <ArrowIcon diagonal />
          </WhatsAppLink>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span /> ESTÉTICA AVANÇADA · CUIDADO ESSENCIAL</p>
            <h1>A sua beleza,<br />na sua <em>melhor</em><br />essência.</h1>
            <p className="hero-description">
              Cuidado e estética caminham juntos. Descubra uma experiência pensada para
              valorizar quem você já é.
            </p>
            <div className="hero-actions">
              <WhatsAppLink className="button">
                Agende sua avaliação <ArrowIcon />
              </WhatsAppLink>
              <a className="text-link" href="#servicos">
                Conheça os tratamentos <span>↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <p>Resultados naturais.<br /><strong>Cuidado que acolhe.</strong></p>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <img
              className="hero-image"
              src={heroResult}
              alt="Resultado de tratamento estético facial realizado pela Essencial Derm"
            />
            <div className="image-caption">
              <span className="caption-mark">ED</span>
              <span>Seu momento<br />de se cuidar</span>
            </div>
            <div className="hero-seal" aria-hidden="true">
              <img src={clinicLogo} alt="" />
            </div>
            <span className="hero-side-note">CUIDAR DE SI TAMBÉM É ESSENCIAL</span>
          </div>
          <a className="scroll-cue" href="#sobre" aria-label="Role para conhecer a clínica">
            <span /> ROLE PARA DESCOBRIR
          </a>
        </section>

        <section className="intro section-wrap" id="sobre">
          <div className="section-label"><span>01</span> UM CONVITE AO CUIDADO</div>
          <div className="intro-content">
            <h2>Mais do que estética.<br /><em>Um jeito de se sentir bem.</em></h2>
            <div className="intro-text">
              <p>
                Na Essencial Derm, cada detalhe é pensado para que você se sinta acolhida,
                segura e confiante. Acreditamos em uma beleza leve, que respeita sua
                individualidade e revela o melhor de você.
              </p>
              <a className="underlined-link" href="#equipe">Conheça a Essencial Derm <ArrowIcon diagonal /></a>
            </div>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-item" key={value.title} data-reveal>
                <span className="value-icon" aria-hidden="true">{value.icon}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="section-label"><span>02</span> CUIDADO EM CADA DETALHE</div>
                <h2>Encontre o cuidado<br />que <em>faz sentido</em> para você.</h2>
              </div>
              <p>Tratamentos pensados para realçar sua beleza com equilíbrio e naturalidade.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number} data-reveal>
                  <a
                    className="service-image-link"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Agende uma avaliação para ${service.name} pelo WhatsApp`}
                  >
                    <img src={service.image} alt={service.alt} loading="lazy" />
                    <span className="service-arrow"><ArrowIcon diagonal /></span>
                  </a>
                  <div className="service-meta"><span>{service.number}</span><span>ESTÉTICA ESSENCIAL</span></div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
            <p className="services-footnote">
              Os tratamentos são indicados após avaliação individual. Converse com nossa equipe.
            </p>
          </div>
        </section>

        <section className="team-section section-wrap" id="equipe">
          <div className="team-image-wrap" data-reveal>
            <img
              className="doctor-image"
              src={doctorPortrait}
              alt="Dra. Amanda, biomédica esteta da Essencial Derm"
              loading="lazy"
            />
          </div>
          <div className="team-copy" data-reveal>
            <div className="section-label"><span>03</span> CONHEÇA A PROFISSIONAL</div>
            <h2>Dra. Amanda Silva<br /><em>Biomédica esteta.</em></h2>
            <p>
              À frente da Essencial Derm, Amanda recebe cada pessoa com escuta e atenção
              individual. Seu trabalho é voltado à estética avançada, com cuidado
              personalizado e respeito à beleza natural de cada paciente.
            </p>
            <dl className="doctor-details">
              <div>
                <dt>Formação</dt>
                <dd>Biomédica esteta</dd>
              </div>
              <div>
                <dt>Registro profissional</dt>
                <dd>CRBM 65306</dd>
              </div>
              <div>
                <dt>Atuação</dt>
                <dd>Estética avançada e harmonização facial</dd>
              </div>
            </dl>
            <WhatsAppLink className="button">
              Agende sua avaliação <ArrowIcon />
            </WhatsAppLink>
          </div>
        </section>

        <section className="appointment-section">
          <div className="appointment-inner" data-reveal>
            <p className="eyebrow"><span /> SEU PRÓXIMO PASSO</p>
            <h2>O cuidado que você merece<br />começa com uma <em>conversa.</em></h2>
            <p>Estamos aqui para ouvir você e ajudar a encontrar o melhor caminho.</p>
            <WhatsAppLink className="button button-light">
              Agende pelo WhatsApp <ArrowIcon />
            </WhatsAppLink>
            <span className="appointment-stamp" aria-hidden="true">ESSENCIAL<br />DERM · ED</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#inicio">
          <img className="brand-logo" src={clinicLogo} alt="Essencial Derm" />
        </a>
        <p>Estética avançada, com cuidado e essência.</p>
        <a className="footer-instagram" href="https://www.instagram.com/essencialderm/" target="_blank" rel="noreferrer">
          Instagram <ArrowIcon diagonal />
        </a>
        <span className="copyright">© {new Date().getFullYear()} Essencial Derm</span>
      </footer>
    </>
  );
}

export default App;
