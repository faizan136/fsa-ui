const List =() =>{
    const arr =[1,2,3,4,5,6,7];
    return <ul>
         {/* <li>{arr[0]}</li>
         <li>{arr[1]}</li>
         <li>{arr[2]}</li>
         <li>{arr[3]}</li> */}
         {arr.map(i=><li>{i}</li>)}

    </ul>
}
export default List;