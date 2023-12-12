import css from './friend.module.css'


function getColor (status){
  switch (status) {
    case true:
      return "green";
    case false:
      return "red";
   
    default:
    return "grey";
  }
};
export const Friend = ({isOnline, name, avatar, id}) => {
    return (<li key={id} className={css.friendlist}>
    <span className={css.status} style={{ backgroundColor: getColor(isOnline) }}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>);
    
    }