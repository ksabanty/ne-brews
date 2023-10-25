import { Layout } from 'antd';
import './App.css';
import Navbar from './components/Navbar';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { CompassOutlined } from '@ant-design/icons';

function App() {

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible>
          <div className="logo">
            <CompassOutlined
              style={{fontSize: '36px', color: '#fff'}}/>
            <h1 className="title">NE Brews</h1>
          </div>
          <Navbar />
        </Sider>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        />
      </Layout>
    </>
  );
}

export default App
