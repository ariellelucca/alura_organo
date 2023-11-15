import './Footer.css';

export const Footer = (props) => {
  return (
    <footer className='footer'>
      <section>
        <ul className='social-logos'>
          <li>
            <a href="facebook.com" target="_blank">
              <img src='/images/fb.png' alt='Logo Facebook'/>
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src='/images/tw.png' alt='Logo Twitter'/>
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src='/images/ig.png' alt='Logo Instagram'/>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <div className='footer-logo'>
          <img src='/images/logo.png' alt='Logo Organo'/>
        </div>
      </section>
      <section>
        <div className='copy'>
          <p>Desenvolvido por Alura</p>
        </div>
      </section>
    </footer>
  )
}
