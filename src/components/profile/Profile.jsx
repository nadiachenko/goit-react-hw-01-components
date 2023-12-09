import css from './profile.module.css'


export const Profile = ({tag, location, avatar, stats, username, views, likes,followers}) => {
    return (<div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      
       <ul className={css.stats}>
        <li className={css.statslist}>
          <span className={css.statslabel}>Followers</span>
          <span className={css.statsvalue}>{followers}</span>
        </li>
        <li className={css.statslist}>
          <span className={css.statslabel}>Views</span>
          <span className={css.statsvalue}>{views}</span>
        </li>
        <li className={css.statslist}>
          <span className={css.statslabel}>Likes</span>
          <span className={css.statsvalue}>{likes}</span>
        </li>
      </ul> 
      </div>)
  } 

 

  