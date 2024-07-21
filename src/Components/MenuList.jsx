import React from 'react'
import { Menu } from 'antd'
import { 
    HomeOutlined, 
    AppstoreOutlined, 
    AreaChartOutlined, 
    PayCircleOutlined, 
    SettingOutlined,
    BarsOutlined 
} from '@ant-design/icons'

const MenuList = ({ darkTheme, setComp }) => {


  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar' >
        <Menu.Item key='home' onClick={() => setComp('home')} icon={<HomeOutlined />} >
            Home
        </Menu.Item>
        <Menu.Item key='activity' onClick={() => setComp('activity')} icon={<AppstoreOutlined /> } >
            Activity
        </Menu.Item>
        <Menu.SubMenu key='tasks' icon={<BarsOutlined />} title='Tasks' >
            <Menu.Item key='task-1' >Task 1</Menu.Item>
            <Menu.Item key='task-2' >Task 2</Menu.Item>
            <Menu.SubMenu key='subtasks' title='Subtasks' >
                <Menu.Item key='subtask-1' >subtasks 1</Menu.Item>
                <Menu.Item key='subtask-2' >subtasks 2</Menu.Item>
            </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key='progress' onClick={()=>setComp('progress')} icon={<AreaChartOutlined />} >
            Progress
        </Menu.Item>
        <Menu.Item key='payment' onClick={()=>setComp('payment')} icon={<PayCircleOutlined />} >
            Payment
        </Menu.Item>
        <Menu.Item key='setting' onClick={() => setComp('setting')} icon={<SettingOutlined />} >
            Setting
        </Menu.Item>
    </Menu> 
  )
}

export default MenuList
