import { useState, createContext } from 'react'
import { Button, Layout, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Logo2 from './Components/Logo2';
import MenuList from './Components/MenuList';
import ToggleTheme from './Components/ToggleTheme';
import MainContent from './Components/MainContent';
// import Home from './Components/Home';
// import Payment from './Components/Payment';
// import Progress from './Components/Progress';
// import Activity from './Components/Activity';
// import Setting from './Components/Setting';


export const UserContext = createContext();

const { Header, Sider, Content } = Layout;
function App() {
  const [darkTheme, setdarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [comp, setComp] = useState('home')

  const toggleTheme = () => {
    setdarkTheme(!darkTheme);
  };

  const {
    token: {colorBgContainer}
  } = theme.useToken()


  return (
    <UserContext.Provider value={comp}>
      <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className="sidebar">
          <Logo2 />
          <MenuList darkTheme={darkTheme} setComp={setComp}/>
          <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout >
            <Header style={{padding: 0, background: colorBgContainer }} >
                <Button type='text' onClick={() => setCollapsed(!collapsed)} className='toggle' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> } ></Button>
            </Header>
            <Content className="content">
                <MainContent />
            </Content>
        </Layout>
      </Layout>
    </UserContext.Provider>
  );
}

export default App