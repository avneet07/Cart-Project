import React from 'react';

const CartItem = (props)=>
{
    // constructor()
    // {
    //     super();
    //     this.state={
    //         price:999,
    //         title:'Phone',
    //         qty:1,
    //         img:''
    //     }
    //     //this.increaseQuantity = this.increaseQuantity.bind(this);
    // }
    // increaseQuantity=()=>
    // {
        
    //     //setState form 1
    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // })
    //     // console.log('this',this.state);

    //     //setState form 2
    //     this.setState( (prevState) => {
    //         return{
    //             qty:prevState.qty +1
    //         }
    //     });
        
    // }
    // decreaseQuantity=()=>
    // {
        
    //     //setState form 1
    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // })
    //     // console.log('this',this.state);

    //     //setState form 2
    //     const {qty} = this.state;
    //     if(qty===0)
    //     return;


    //     this.setState( (prevState) => {
    //         return{
    //             qty:prevState.qty -1
    //         }
    //     });
        
    // }
    //console.log('this.props', this.props);
    const {price,title,qty}= props.product;
    const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                        onClick={()=>onIncreaseQuantity(product)}/>
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        onClick = {()=>onDecreaseQuantity(product)}/>
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                        onClick = {()=>onDeleteProduct(product.id)}/>                     
                    </div>
                </div>
            </div>
        );
    
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
        
    }
}
export default CartItem;