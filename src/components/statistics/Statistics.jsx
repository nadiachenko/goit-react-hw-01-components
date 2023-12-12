import css from './stat.module.css'


const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Statistics = ({ title, stats }) => {
  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.stats}>

      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={css.statslist} style={{ backgroundColor: getRandomColor() }}>
          <span className={css.statslabel}>{label}</span>
          <span className={css.statsvalue}>{percentage}%</span>
        </li>
      ))}

    </ul>
  </section>);

}