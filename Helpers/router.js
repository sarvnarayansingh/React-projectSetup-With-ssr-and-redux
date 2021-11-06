import App from '../src/Client/App';
import Home from '../src/Client/Home'
import About from '../src/Client/About';


export default [
  {
    ...App,
    routes: [
      {
        path:'/home',
        ...Home,
        exact: true,
      },
      {
        path:'/about',
        ...About,
        exact: true,
      },
    ],
  },
];
