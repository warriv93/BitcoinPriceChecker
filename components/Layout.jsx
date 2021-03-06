import Navbar from '../components/Navbar';
import Header from 'next/head';

const Layout = props => (
    <div>
        <Header>
            <title>Bitcoin Price Checker</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
        </Header>
        <Navbar/> 
        <div className="container">
            {props.children}
        </div>
    </div>
    
  );
  
  export default Layout;
  