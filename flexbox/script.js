const styleElement = document.createElement('style');
document.head.appendChild(styleElement);
const styleSheet = styleElement.sheet;

// CSS rules
const cssRules = `
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    background: #0b0b22;
  }

  .container {
    width: 1140px;
    margin: 0 auto;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: sans-serif;
  }

  .header-nav a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    font-weight: 400;
    margin: 0 50px;
    text-decoration: none;
  }

  .header h1 {
    color: #fff;
    font-size: 24px;
  }

  .sj {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 30px;
    border-radius: 3px;
    background: var(--button-light, rgba(255, 255, 255, 0.1));
    box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.1);
    border: none;
  }

  .hero {
    margin: 70px 0;
    text-align: center;
  }

  .hero h3 {
    color: var(--green, #16fcd2);
    text-align: center;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 1.6px;
    margin: 13px 0;
  }

  .hero h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
  }

  .hero p {
    color: var(--muted, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    margin: 24px 0 0 0;
  }

  .btns {
    margin: 38px 0 0 0;
  }

  .btnsleft {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 55px;
    border-radius: 3px;
    background: var(--primary, #6016fc);
    border: none;
  }

  .btnsright {
    border-radius: 3px;
    background: var(--button-light, rgba(255, 255, 255, 0.1));
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 55px;
    border: none;
    margin-left: 25px;
  }

  .icon {
    display: flex;
    align-items: center;
  }

  .block {
    border-radius: 5px;
    background: var(--light, rgba(255, 255, 255, 0.05));
    width: 328px;
    height: 276px;
    flex-shrink: 0;
  }

  .block img {
    margin: 32px 0 0 40px;
  }

  .block h1 {
    margin: 29px 0 8px 40px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }

  .block p {
    margin: 0 0 36px 40px;
    color: var(--muted, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
  }

  .blok {
    border-radius: 5px;
    background: var(--light, rgba(255, 255, 255, 0.05));
    width: 328px;
    height: 276px;
    flex-shrink: 0;
    margin: 0 20px;
  }

  .blok img {
    margin: 32px 0 0 40px;
  }

  .blok h1 {
    margin: 29px 0 8px 40px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }

  .blok p {
    margin: 0 0 36px 40px;
    color: var(--muted, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
  }

  .blac {
    border-radius: 5px;
    background: var(--light, rgba(255, 255, 255, 0.05));
    width: 328px;
    height: 276px;
    flex-shrink: 0;
  }

  .blac img {
    margin: 32px 0 0 40px;
  }

  .blac h1 {
    margin: 29px 0 8px 40px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }

  .blac p {
    margin: 0 0 36px 40px;
    color: var(--muted, rgba(255, 255, 255, 0.6));
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
  }

  .dia {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1140px;
    height: 105px;
    border: 3;
    margin: 79px 0 0 0;
  }
`;

// Adding the CSS rules to the style sheet
styleSheet.insertRule(cssRules);