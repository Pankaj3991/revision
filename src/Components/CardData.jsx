// CardData.jsx
export default function CardData({oldPrice, newPrice}){
    return (
        <div style={{display:'flex', backgroundColor:'#e0c367', 
        borderBottomLeftRadius:'1em',
        borderBottomRightRadius:'1em',
        justifyContent:'center'}}>
            <p style={{marginRight:'1em', textDecorationLine:'line-through'}}>{oldPrice}</p>
            <p>{newPrice}</p>
        </div>
    )
}
