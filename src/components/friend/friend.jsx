import css from './friend.module.css'

export const Friend = ({ isOnline, name, avatar }) => {
  return (<li className={css.friendlist}>
    <span className={isOnline ? css.green : css.red}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </li>);

}