import App from '../MainFile/App'
import HomePage from '../client/container/Home'
import ContactUs from '../client/container/ContactUs';
import AboutUs from '../client/container/AboutUs';
import NotFoundPage from '../client/components/Common/NotFoundPage';

const renderUrl = process.env.RenderUrl;

export default [
  {
    ...App,
    routes: [
      {
        path: `${renderUrl}`,
        ...HomePage,
        exact: true,
      },
      {
        path: `/contact`,
        ...ContactUs,
        exact: true,
      },
      {
        path: `/about`,
        ...AboutUs,
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];