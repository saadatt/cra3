import React from 'react';
import MenuItem from "./MenuItem";
import '../index.css';

const Menu = (props) => {

    const a = props.menuItems.map(el => <MenuItem key={el.text} menuItem={el}/>);
    console.log(a);
   /* const a=[]; for (let i=0; i<items.length; i++) {a.push(<MenuItem key={items[i].text} menuItem={items[i]}/>);   */
    return (
        <nav>

            <ul>
                {a}
            </ul>
        </nav>
    );
};

export default Menu;
