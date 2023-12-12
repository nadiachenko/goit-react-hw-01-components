import css from './stat.module.css'


const getRandomColor = () => {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

export const Statistics = ({title="Title", stats}) => {
return (<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.stats}>

   {stats.map(stat => (
        <li key ={stat.id} className={css.statslist} style={{ backgroundColor: getRandomColor() }}>
        <span className={css.statslabel}>{stat.label}</span>
        <span className={css.statsvalue}>{stat.percentage}%</span>
      </li>
      ))}
    
  </ul>
</section>);

}