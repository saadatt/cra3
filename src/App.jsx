import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Counter from './components/Counter';

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

const counter1 = 5, counter2 = 2;
const totalCounter= counter1 + counter2;

function App() {
     function buttonClicked(name) {
         console.log('Clicked!!' +name)
     }
    const [totalCount, setTotalCount] = useState(totalCounter);

     function countChangesPlus(value){
         setTotalCount(totalCount+1);
     }
    function countChangesMinus(value){
        setTotalCount(totalCount-1);
    }
    return(
        <div className="App">
            <Header menuItems={items.menu1} />
            <Content bc={buttonClicked}/>
            <hr/>
             Total: {totalCount}
            <hr/>
            <Counter startCount ={counter1} countChangesPlus={countChangesPlus} countChangesMinus={countChangesMinus}/>
            <hr/>
            <Counter startCount ={counter2} countChangesPlus={countChangesPlus} countChangesMinus={countChangesMinus}/>
            <hr/>
            <Footer menuItems={items} />
        </div>
    );
}

export default App;