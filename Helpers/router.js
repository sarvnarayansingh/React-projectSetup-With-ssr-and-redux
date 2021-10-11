import App from '../src/Client/App';
import Home from '../src/Client/Home'


export default [
  {
    ...App,
    routes: [
      {
        path:'/home',
        ...Home,
        exact: true,
      },
    ],
  },
];
