import React from 'react';

const Footer = () => (
  <footer className={'footer'}>
    <h3>Право.ru рекомендует</h3>
    <div className={'footer-recs-list'}>
      <div className="footer-recs-list__item">
        <a href="#">Семинар "Строительно-инвестиционная деятельность"</a>
        <time>15 ноября</time>
      </div>
      <div className="footer-recs-list__item">
        <a href="#">Семинар "Заключение, исполнение и расторжение потребительских договоров купли-продажи"</a>
        <time>23 ноября</time>
      </div>
      <div className="footer-recs-list__item">
        <a href="#">XVI международная научно-практическая конференция "Ковалевские чтения 2019", Екатеринбург</a>
        <time>14 февраля 2019</time>
      </div>
    </div>
  </footer>
);

export default Footer;