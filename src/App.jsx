import React from 'react';
import './App.css';
import heroImage from './assets/hero-bg.jpg';
import aboutImage from './assets/about-image.jpg';
import service1Image from './assets/service1.jpg';
import service2Image from './assets/service2.jpg';
import service3Image from './assets/service3.jpg';
import service4Image from './assets/service4.jpg'; // Added for the 4th service

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
        <div className="service-container flex flex-col items-center gap-8 md:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl">
            <div className="service-item flex flex-col h-full">
              <div className="service-image">
                <img src={service1Image} alt="Leitura Resposta Única" />
              </div>
              <div className="flex-grow">
                <h3>Leitura Resposta Única</h3>
                <p>Uma única pergunta, uma orientação cristalina. Traga sua dúvida mais urgente e receba uma mensagem direta das cartas, sem rodeios, ajudando-o(a) a tomar a melhor decisão no momento exato em que precisa.</p>
                <p><strong>Ideal para:</strong></p>
                <p>Dúvidas pontuais e decisões rápidas que pedem clareza imediata.</p>
              </div>
              <div className="price-tag mt-auto">
                <span className="price-value">R$ 37,00</span>
              </div>
              <a href="https://buy.stripe.com/6oUaEWfRG2Za1x6c2Gds400" target="_blank" rel="noopener noreferrer" className="service-button">COMPRAR AGORA</a>
            </div>

            <div className="service-item flex flex-col h-full">
              <div className="service-image">
                <img src={service2Image} alt="Leitura Panorâmica da Alma" />
              </div>
              <div className="flex-grow">
                <h3>Leitura Panorâmica da Alma</h3>
                <p>Uma análise geral e profunda do seu momento de vida. Abrimos sua frequência energética para entender como amor, carreira, finanças, família e espiritualidade estão se manifestando e como você pode alinhar essas áreas com seus desejos mais profundos.</p>
                <p><strong>Ideal para:</strong></p>
                <p>Quem busca autoconhecimento profundo e uma visão clara de todas as áreas da vida.</p>
              </div>
              <div className="price-tag mt-auto">
                <span className="price-value">R$ 67,00</span>
              </div>
              <a href="https://buy.stripe.com/9AQg0W6Jq6N6bZC9AEs401" target="_blank" rel="noopener noreferrer" className="service-button">COMPRAR AGORA</a>
            </div>

            <div className="service-item flex flex-col h-full">
              <div className="service-image">
                <img src={service3Image} alt="Leitura Foco & Direção" />
              </div>
              <div className="flex-grow">
                <h3>Leitura Foco & Direção</h3>
                <p>Para quando você precisa de respostas diretas. Você traz três perguntas objetivas e, em nossa conversa, mergulhamos em cada uma delas, trazendo luz e o melhor direcionamento para suas decisões.</p>
                <p><strong>Ideal para:</strong></p>
                <p>Questões pontuais e tomadas de decisão importantes.</p>
              </div>
              <div className="price-tag mt-auto">
                <span className="price-value">R$ 47,00</span>
              </div>
              <a href="https://buy.stripe.com/dRm9AS34U8jufnW2s6ds402" target="_blank" rel="noopener noreferrer" className="service-button">COMPRAR AGORA</a>
            </div>

            <div className="service-item flex flex-col h-full p-4 rounded-lg shadow-lg border-4 border-yellow-500 relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">MELHOR OPÇÃO</div>
              <div className="service-image"> 
                <img src={service4Image} alt="Assinatura Mensal" />
              </div>
              <div className="flex-grow"> 
                <h3>Assinatura Mensal</h3>
                <h4>Sua Bússola Mensal com Brenda</h4>
                <p className="mb-1">Seu acompanhamento contínuo de autoconhecimento.</p>
                <p className="mb-1">Inclui uma análise completa para o seu mês e, a cada segunda-feira, um conselho da semana direcionado exclusivamente para você, via áudio no WhatsApp.</p>
                <p className="mb-3">Um total de 5 leituras para te manter alinhada e potente.</p>
                <p className="font-semibold"><strong>Ideal para:</strong></p>
                <p>Quem deseja fazer do autoconhecimento um hábito e ter apoio constante em sua jornada.</p>
              </div>
              <div className="price-tag mt-auto"> 
                <span className="price-value">R$ 97,00</span>
              </div>
              <a href="https://buy.stripe.com/5kQ6oG0WMfLWfnW4Aeds403" target="_blank" rel="noopener noreferrer" className="service-button bg-yellow-500 hover:bg-yellow-600 text-white w-full py-3">ASSINAR AGORA</a>
            </div>
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

