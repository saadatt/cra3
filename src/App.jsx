import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import State from './components/State';

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

// const cr1 = 5, cr2 = 2;
// const tc= cr1+ cr2;

function App() {
    function buttonClicked(name) {
        console.log('Clicked!!' +name)
    }
    // const [totalCount, setTotalCount] = useState(tc);
    //
    // function countChanges(value){
    //     console.log('Changed' + value)
    // }
    return(
        <div className="App">
            <Header menuItems={items.menu1} />
            {/*Total: {totalCount}*/}
            <Content bc={buttonClicked}/>
            <hr/>
            {/*<State startCount ={cr1} countChanges={countChanges}/>*/}
            <hr/>
            {/*<State startCount ={cr2} countChanges={countChanges}/>*/}
            <hr/>
            <Footer menuItems={items} />
        </div>
    );
}

export default App;