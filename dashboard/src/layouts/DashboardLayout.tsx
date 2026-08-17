import React, { useState, useEffect } from 'react';
import {
  PieChartOutlined,
  ShopOutlined,
  BellOutlined,
  UserOutlined,
  AlertOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Button, Avatar, Badge } from 'antd';
import { getUnreadNotificationsCount } from '../services/admin.api';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  disabled?: boolean,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    disabled,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', 'dashboard', <PieChartOutlined />),
  getItem('Shop Listings', 'listings', <ShopOutlined />),
  getItem('Notifications', 'notifications', <BellOutlined />),
  getItem('Users (Coming soon)', 'users', <UserOutlined />, undefined, true),
  getItem('Reports (Coming soon)', 'reports', <AlertOutlined />, undefined, true),
  getItem('Settings (Coming soon)', 'settings', <SettingOutlined />, undefined, true),
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeKey: string;
  onSelectKey: (key: string) => void;
  onLogout?: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activeKey, onSelectKey, onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        const count = await getUnreadNotificationsCount();
        setUnreadCount(count);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUnreadCount();
    const interval = setInterval(fetchUnreadCount, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout className="h-screen overflow-hidden bg-slate-50">
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        theme="dark"
        className="shadow-xl z-20"
        width={260}
      >
        <div className={`
          h-16 m-4 flex items-center justify-center 
          bg-white/10 rounded-lg text-white font-bold transition-all duration-200
          ${collapsed ? 'text-sm' : 'text-lg'}
        `}>
          {collapsed ? 'DK' : 'Dokan Khuji'}
        </div>
        <Menu 
          theme="dark" 
          selectedKeys={[activeKey]} 
          mode="inline" 
          items={items} 
          onClick={({ key }) => onSelectKey(key)}
        />
      </Sider>
      <Layout className="bg-slate-50 flex flex-col h-full">
        <Header 
          style={{ background: colorBgContainer }}
          className="px-6 flex items-center justify-between shadow-sm z-10 flex-shrink-0"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="w-16 h-16 text-base"
          />
          <div className="flex items-center gap-6">
            <Badge count={unreadCount}>
              <Button 
                type="text" 
                icon={<BellOutlined />} 

                className="text-lg" 
                onClick={() => onSelectKey('notifications')}
                
              />
            </Badge>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-black/5 px-2 py-1 rounded-lg transition-colors">
              <Avatar icon={<UserOutlined />} />
              <span className="font-medium hidden sm:inline">Admin User</span>
            </div>
            <Button type="text" icon={<LogoutOutlined />} className="text-slate-500" onClick={onLogout} />
          </div>
        </Header>
        <Content className="overflow-y-auto p-6 flex-1 flex flex-col custom-scrollbar">
          <div
            style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}
            className="p-6 min-h-full shadow-sm"
          >
            {children}
          </div>
          <Footer className="text-center text-slate-400 py-6 bg-transparent mt-auto flex-shrink-0">
            Dokan Khuji ©{new Date().getFullYear()} Created by NicheWeb Studio
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
