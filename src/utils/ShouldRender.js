const ShouldRender=(props)=>{
// console.log('props',props);
// return <h1>Should Render</h1>
return props.cond ? props.children : null;
}
export default ShouldRender;