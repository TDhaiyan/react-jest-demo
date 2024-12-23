import React from 'react';
import PageLayout from './components/layout';
import { ConfigProvider } from 'antd';
import useConfigStore from './stores';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const theme = useConfigStore(state => state.themeConfig)
  const navigate = useNavigate()

  if (window.location.pathname === '/') {
    setTimeout(() => {
      navigate('/graph')
    })
  }

  return (
    <ConfigProvider theme={{
      algorithm: theme.algorithm,
      token: {
        colorPrimary: theme.primaryColor
      }
    }}>
      <PageLayout />
    </ConfigProvider>
  )
};

export default App;
