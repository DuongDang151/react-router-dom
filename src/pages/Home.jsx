import { Link, Outlet } from "react-router-dom";
import { Layout, Button } from "antd";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  width: '100%',
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
   width: '100%',
  overflow: 'hidden',
  height: '100vh'
  
};
function Home (){
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                
                <Button type="primary">
                    <Link to='/test1'>More</Link>
                </Button>

                <Button type="primary">
                    <Link to='/test2'>Sidebar</Link>
                </Button>
            </Header>
            
            <Content style={contentStyle}>
                Home<Outlet />
            </Content>
            
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    )
}

export default Home;