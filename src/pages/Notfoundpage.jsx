// import { CustomLink } from '../components/CustomLink';
import { Link } from 'react-router-dom';

const Notfoundpage = () => {
  return (
    <div>
      {/* This page doesn't exist. Go <CustomLink to="/">home</CustomLink> */}
      This page doesn't exist. Go{' '}
      <Link
        style={{ textDecoration: 'underline', color: 'var(--color-active)' }}
        to="/"
      >
        home
      </Link>
    </div>
  );
};

export { Notfoundpage };
