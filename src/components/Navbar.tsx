import { Menu } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: '1',
              icon: <EnvironmentOutlined />,
              label: 'Connecticut',
            },
            {
              key: '2',
              icon: <EnvironmentOutlined />,
              label: 'Maine',
            },
            {
              key: '3',
              icon: <EnvironmentOutlined />,
              label: 'Massachusetts',
            },
            {
              key: '4',
              icon: <EnvironmentOutlined />,
              label: 'New Hampshire',
            },
            {
              key: '5',
              icon: <EnvironmentOutlined />,
              label: 'Rhode Island',
            },
            {
              key: '6',
              icon: <EnvironmentOutlined />,
              label: 'Vermont',
            },
          ]}
        >
        </Menu>
  )
}

export default Navbar
