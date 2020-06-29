import { mainRoutes } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  let currentPathName = '';
  const currentRoute = mainRoutes.filter(
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
          <img src="/logo.png" alt="hectane logo" />
        </picture>
      </div>
      <div style={{ textAlign: 'center' }}>
        <nav className="margin-auto container main-links">
          <ul>
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
          </ul>
        </nav>
      </div>
      {currentPathName && (
        <div>
          <h2>{currentPathName}</h2>
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
