import Link from 'next/link'
import { footerRoutes } from './routes'

const Footer = () => {
  return (
    <footer className={`margin-auto container footer-container`}>
      <div>
        {footerRoutes.map(route => {
          return (
            <Link href="/[slug]" as={`${route.path}`} key={route.path}>
              <a className="footer-links">{route.name}</a>
            </Link>
          )
        })}
        <a
          href="/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-links"
        >
          RSS
        </a>
      </div>
      <div className="footer-text">
        {`Hectane All Rights Reserved. Copyright 2018 - ${new Date().getFullYear()}`}
      </div>
    </footer>
  )
}

export default Footer
