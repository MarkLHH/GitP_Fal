import { version } from './config';


export const widgetsRoutes = {
  name: 'Widgets',
  to: '/widgets',
  exact: true,
  icon: 'poll'
};

export const MarksPage = {
  name:'Mark',
  to: '/mark',
  icon: 'copy'
}



export default [
  widgetsRoutes,
  MarksPage
];
