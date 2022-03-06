// function App(){
//     return <h1>Hello React</h1>
// }
import React from 'react';
import ProductList from './ProductList';
import Header from './Header'
import Footer from './Footer'
import Name from './Name'
import Counter from './utils/Counter'
import List from './utils/List'
import AutoCounter from './utils/AutoCounters'
//import Math from './Math';
import Default,{Math,PI} from './Math'
import 'bootstrap/dist/css/bootstrap.css';
function App(){
    console.log(Math.add(10,20))
// // return React.createElement('h1',{},'Hello World');
// const h1=React.createElement('h1',{},'Hello React');
// const img=React.createElement('img',{width:100,height:100, src:'https://www.olympus-imaging.co.in/content/000107506.jpg'})
// const div =React.createElement('div',{},[h1,img]);
// return div;
//JSX
return <div>
    
    <ProductList />
    <AutoCounter />
    <Counter count={10}/>
    
    <Header />
    <List />
    <h1>Hello React</h1>
    <Name  personName="John" age="23"/>
    <Name personName="Joseph" age="32"/>
    <Name personName="Jose" age="32"/>
    <Name personName="Jailer" age="32"/>
    <img width="200" height="200" src="https://www.olympus-imaging.co.in/content/000107506.jpg"/>
    <Footer/>
</div>
}
export default App;