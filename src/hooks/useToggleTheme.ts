import { createStore } from './store';

interface Theme {
  active: boolean;
  backgroundColor: string;
  headerColor: string;
  mobHeaderColor: string;
  button: string;
  TextColor: string;
  homePageGreyText: string;
  FieldColor: string;
  BorderField: string;
  modalBgColor: string;
  modalBorder: string;
  searchBg: string;
  searchBorder: string;
  inputBgColor: string;
  inputTextColor: string;
  connectModalContainer: string;
  walletBg: string;
  walletHover: string;
  navBlockBg: string;
  ModalHoverColor: string;
}

export const ThemeWhiteState: Theme = { 
    active: false, 
    backgroundColor: '#fff', 
    headerColor: '#ECEBEB' ,
    mobHeaderColor: "#fff",
    button: 'linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255))',
    TextColor: 'black',
    homePageGreyText: '#BABABA',
    FieldColor: '#1a1a1a',
    BorderField: '2px solid #EEEEEE',
    modalBgColor: 'rgb(245,245,245)',
    modalBorder: '2px solid #dbdbdb',
    searchBg: '#FAFAFA',
    searchBorder: '1px solid #e5e5e5',
    inputTextColor: '#333',
    inputBgColor: '#ecebeb',
    connectModalContainer: '#F5F5F5',
    walletBg: '#D9D9D9',
    walletHover: '#ECECEC',
    navBlockBg: '#ECEBEB',
    ModalHoverColor: '#ECECEC',
};

export const ThemeBlackState: Theme = { 
  active: true, 
  backgroundColor: '#161616', 
  headerColor: '#202020' ,
  mobHeaderColor: "#161616",
  button: 'linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255))',
  TextColor: 'white',
  homePageGreyText: '#aaa',
  FieldColor: '#1a1a1a',
  BorderField: '2px solid #3A3A3A',
  modalBgColor: '#282828',
  modalBorder: '2px solid #333',
  searchBg: '#222',
  searchBorder: '1px solid #444',
  inputTextColor: '#999',
  inputBgColor: '#323232',
  connectModalContainer: '#323232',
  walletBg: '#5F5F5F',
  walletHover: '#333333',
  navBlockBg: '#202020',
  ModalHoverColor: '#333333',
};




export const [useToggleTheme] = createStore(ThemeWhiteState);