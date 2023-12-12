import css from './friends.module.css'
import { Friend } from 'components/Friend/friend'



export const FriendList = ({ friends }) => {
    return (<div className={css.friendscontainer}>
        <ul className={css.friends}>
            {friends.map(({ avatar, isOnline, name, id }) => (
                <Friend
                    key={id}
                    avatar={avatar}
                    isOnline={isOnline}
                    name={name}
                />
            ))}
        </ul>
    </div>)

}
