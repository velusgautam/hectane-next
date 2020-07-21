import { mainRoutes, footerRoutes } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  let currentPathName = '';
  const currentRoute = [...mainRoutes, ...footerRoutes].filter(
    (route) => route.path === router.asPath
  );

  if (currentRoute.length > 0) {
    currentPathName = currentRoute[0].name;
  }

  return (
    <div className="container margin-auto padding-left20 padding-right20">
      <div style={{ textAlign: 'center' }}>
        <picture>
          <source srcSet="/logo.webp" type="image/webp" />
          <img src="/logo.png" alt="hectane logo" width="189" height="104" />
        </picture>
      </div>
      <div style={{ textAlign: 'center' }}>
        <nav className="margin-auto container main-links">
          {mainRoutes.map(({ path, name }) => {
            return (
              <NavLink
                path={path}
                name={name}
                key={path}
                asPath={router.asPath}
              />
            );
          })}
        </nav>
      </div>
      {currentPathName && (
        <div>
          <h2 className="page-title">{currentPathName}</h2>
        </div>
      )}
    </div>
  );
};

function NavLink({ path, name, asPath }) {
  return (
    <Link href={path} key={path}>
      <a className={asPath === path ? 'link active' : 'link'}>{name}</a>
    </Link>
  );
}

export default Header;
