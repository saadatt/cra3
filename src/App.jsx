import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const items = { menu1:[{
    text: 'Yeezys',
    link: 'yeezys-page'
}, {
    text: 'Backpacks',
    link: 'backpacks-page'
}, {
    text: 'Supreme T-shirts',
    link: 'supreme t-shirts-page'
}, {
    text: 'Sweatshirts',
    link: 'sweatshirts-page'
}, {
    text: 'Accessories',
    link: 'accessories-page'
}], menu2: [{
    text: 'Customer Service',
    link: 'CS-page'
}, {
    text: 'Shipping',
    link: 'shipping-page'
}, {
    text: 'Returns',
    link: 'returns-page'
}, {
    text: 'Size charts',
    link: 'size charts-page'
}]};

function App() {
    return(
        <div className="App">
            <Header menuItems={items.menu1} />
            <Content/>
            <Footer menuItems={items} />
        </div>
    );
}

export default App;