import React from 'react';
import './App.css';
import heroImage from './assets/hero-bg.jpg';
import aboutImage from './assets/about-image.jpg';
import service1Image from './assets/service1.jpg';
import service2Image from './assets/service2.jpg';
import service3Image from './assets/service3.jpg';

function App() {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <p className="hero-intro">Há uma conversa que sua alma anseia por ter.</p>
          <p>Se você sente o chamado por clareza, acolhimento e um direcionamento que respeita sua jornada emocional, você encontrou seu lugar. Eu sou Brenda, e estou aqui para ser a sua bússola.</p>
          <a href="https://wa.me/5562981640195" className="whatsapp-button">INICIAR NOSSA CONVERSA NO WHATSAPP</a>
          <h1>Brenda - Taróloga e Terapeuta</h1>
          <h2>Mais que previsões, um mergulho em você.</h2>
          <p>Meu trabalho com o Tarô não é sobre adivinhar o futuro, mas sim sobre desvendar o presente. É um convite para uma conversa íntima e terapêutica, onde as cartas se tornam um espelho da sua alma. Juntas, vamos traduzir os sussurros da sua intuição, iluminar os caminhos que se apresentam e trazer a clareza emocional que você precisa para tomar suas decisões com confiança e paz interior. É um processo de escuta, acolhimento e profunda conexão.</p>
        </div>
      </header>

      <section className="testimonials-section">
        <h2>O que dizem as almas que conversaram comigo:</h2>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <p>"A conversa com a Brenda foi o abraço que minha alma precisava. Saí não apenas com respostas, mas com uma sensação de paz e um reencontro com a minha própria força."</p>
            <p>M.F., Empresária</p>
          </div>
          <div className="testimonial-item">
            <p>"Eu estava paralisada por uma decisão. A Brenda, com sua sensibilidade e as cartas, me mostrou uma perspectiva que eu não conseguia ver. Foi libertador."</p>
            <p>J.A., Advogada</p>
          </div>
          <div className="testimonial-item">
            <p>"A assinatura mensal é meu ritual de autocuidado. Ter o conselho da Brenda toda semana me mantém centrada e conectada com meu propósito."</p>
            <p>C.L., Terapeuta</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Escolha o seu mergulho</h2>
        <div className="service-container">
          <div className="service-item">
            <div className="service-image">
              <img src={service1Image} alt="Leitura Panorama da Alma" />
            </div>
            <h3>Leitura Panorama da Alma</h3>
            <p>Uma análise geral e profunda do seu momento de vida. Abrimos sua frequência energética para entender o amor, carreira, finanças, família e receber os conselhos que o universo tem para você.</p>
            <p><strong>Ideal para:</strong></p>
            <p>Uma visão completa e clareza sobre todas as áreas da sua vida.</p>
            <div className="price-tag">
              <span className="price-value">R$ 117,00</span>
              <span className="price-description">Pagamento único</span>
            </div>
            <a href="https://wa.me/5562981640195?text=Olá,%20gostaria%20de%20agendar%20uma%20Leitura%20Panorama%20da%20Alma" className="service-button">QUERO O PANORAMA DA ALMA</a>
          </div>
          <div className="service-item">
            <div className="service-image">
              <img src={service2Image} alt="Leitura Foco & Direção" />
            </div>
            <h3>Leitura Foco & Direção</h3>
            <p>Para quando você precisa de respostas diretas. Você traz três perguntas objetivas e, em nossa conversa, mergulhamos em cada uma delas, trazendo luz e o melhor direcionamento para suas decisões.</p>
            <p><strong>Ideal para:</strong></p>
            <p>Questões pontuais e tomadas de decisão importantes.</p>
            <div className="price-tag">
              <span className="price-value">R$ 47,00</span>
              <span className="price-description">Pagamento único</span>
            </div>
            <a href="https://wa.me/5562981640195?text=Olá,%20gostaria%20de%20agendar%20uma%20Leitura%20Foco%20e%20Direção" className="service-button">QUERO FOCO & DIREÇÃO</a>
          </div>
          <div className="service-item">
            <div className="service-image">
              <img src={service3Image} alt="Bússola Mensal" />
            </div>
            <h3>A JORNADA MAIS COMPLETA</h3>
            <h4>Sua Bússola Mensal com Brenda</h4>
            <p>(Assinatura)</p>
            <p>Seu acompanhamento contínuo de autoconhecimento. Inclui uma análise completa para o seu mês e, a cada segunda-feira, um conselho da semana direcionado exclusivamente para você, via áudio no WhatsApp. Um total de 5 leituras para te manter alinhada e potente.</p>
            <p><strong>Ideal para:</strong></p>
            <p>Quem deseja fazer do autoconhecimento um hábito e ter apoio constante em sua jornada.</p>
            <div className="price-tag">
              <span className="price-value">Assinatura Mensal</span>
              <span className="price-description">Consulte valores via WhatsApp</span>
            </div>
            <a href="https://wa.me/5562981640195?text=Olá,%20gostaria%20de%20assinar%20a%20Bússola%20Mensal" className="service-button">QUERO MINHA BÚSSOLA MENSAL</a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImage} alt="Brenda - Taróloga e Terapeuta" />
          </div>
          <div className="about-content">
            <h2>Brenda - Sobre mim</h2>
            <p className="about-intro">Prazer, eu sou a Brenda.</p>
            <p>Desde sempre, minha paixão é o universo feminino e as profundezas da alma. O Tarô entrou na minha vida não como um oráculo, mas como uma linguagem sagrada, uma ferramenta para acessar a sabedoria que já existe dentro de cada uma de nós. Minha missão é ser a ponte, a tradutora e a guardiã de um espaço seguro onde você pode ser inteiramente você, sem medos ou julgamentos, e encontrar a força para trilhar seu caminho mais autêntico. Será uma honra caminhar com você.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Pronta para iniciar sua jornada de autoconhecimento?</h2>
        <p>Escolha o serviço que mais ressoa com você ou entre em contato para tirar suas dúvidas.</p>
        <a href="https://wa.me/5562981640195" className="whatsapp-button cta-button">CONVERSAR COM BRENDA</a>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Brenda - Taróloga e Terapeuta. Todos os direitos reservados.</p>
        <a href="https://wa.me/5562981640195" className="footer-contact">Contato via WhatsApp</a>
      </footer>
    </div>
  );
}

export default App;

