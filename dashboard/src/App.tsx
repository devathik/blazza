import { useState } from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import DashboardOverview from './pages/DashboardOverview';
import ListingsManagement from './pages/ListingsManagement';
import ListingDetail from './pages/ListingDetail';
import NotificationsList from './pages/NotificationsList';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [activeKey, setActiveKey] = useState('dashboard');
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  const handleSelectListing = (id: string) => {
    setSelectedListingId(id);
    setActiveKey('listing-detail');
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0ea5e9', // Sky blue to match Dokan Khuji brand
          borderRadius: 12,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
        components: {
          Layout: {
            headerBg: '#fff',
            siderBg: '#0f172a', // slate-900
          },
        },
      }}
    >
      <AntdApp>
        {!isAuthenticated ? (
          <Login onLoginSuccess={() => setIsAuthenticated(true)} />
        ) : (
          <DashboardLayout 
            activeKey={activeKey} 
            onSelectKey={setActiveKey}
            onLogout={handleLogout}
          >
            {activeKey === 'dashboard' && (
              <DashboardOverview 
                onSelectKey={setActiveKey}
                onSelectListing={handleSelectListing}
              />
            )}
            {activeKey === 'listings' && (
              <ListingsManagement 
                onSelectListing={handleSelectListing}
              />
            )}
            {activeKey === 'listing-detail' && selectedListingId && (
              <ListingDetail 
                id={selectedListingId} 
                onBack={() => setActiveKey('listings')}
              />
            )}
            {activeKey === 'notifications' && (
              <NotificationsList 
                onSelectListing={handleSelectListing}
              />
            )}
          </DashboardLayout>
        )}
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
