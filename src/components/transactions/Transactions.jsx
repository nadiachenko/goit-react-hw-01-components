import css from './trans.module.css'


export const TransactionHistory = ({ items }) => {

  return (<table className={css.history}>
    <thead >
      <tr>
        <th className={css.head}>Type</th>
        <th className={css.head}>Amount</th>
        <th className={css.head}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }, index) => {
        return (
          <tr key={id} className={css.row} style={{ backgroundColor: index % 2 === 0 ? "rgb(243, 248, 252)" : "white" }}>
            <td className={css.datafirst}>{type}</td>
            <td className={css.data}>{amount}</td>
            <td className={css.data}>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  );

}