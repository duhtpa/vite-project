import './style.css'
import htmlacademy from './src/assets/svg/htmlacademy.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://htmlacademy.ru/" target="_blank">
      <img src="${htmlacademy}" class="logo vanilla" alt="Htmlacademy logo" />
    </a>
    <h1>Hello Vite!</h1>
  </div>
`;
