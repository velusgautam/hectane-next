import { mainRoutes } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
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
              return <NavLink path={path} name={name} key={path} />;
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

function NavLink({ path, name }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === path ? 'red' : 'black',
  };

  return (
    <Link href={path} key={path}>
      <a style={style}>{name}</a>
    </Link>
  );
}

export default Header;
