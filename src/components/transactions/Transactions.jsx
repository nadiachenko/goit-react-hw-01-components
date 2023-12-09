import css from './trans.module.css'

function getColor (items){
  console.log(items.length)
  for (let i = 0; i < items.length; i++) {
    if (i%2===0) {
      return "blue";
    } else {
      return "red"
    }
    
  }
};

export const TransactionHistory = ({items}) => {

  
    return (<table className={css.history}>
    <thead >
      <tr>
        <th className={css.head}>Type</th>
        <th className={css.head}>Amount</th>
        <th className={css.head}>Currency</th>
      </tr>
    </thead>
    {items.map((item,index) => {
        return (
    <tbody>
      <tr  key={item.id} className={css.row} style={{ backgroundColor: index%2 ===0 ?"rgb(243, 248, 252)": "white" }}>
        <td className={css.datafirst}>{item.type}</td>
        <td className={css.data}>{item.amount}</td>
        <td className={css.data}>{item.currency}</td>
      </tr>
    </tbody>
       );  
    })}

  </table>
  );
    
    }