import css from './friends.module.css'
import {Friend} from 'components/friend/friend'



export const FriendList = ({friends}) => {
  return(<div class={css.friendscontainer}>
      <ul class={css.friends}>
    {friends.map(friend => (
        <Friend 
        avatar={friend.avatar} 
        isOnline={friend.isOnline} 
        name={friend.name}
        id={friend.id}  
        />
    ))}
        </ul>
        </div>) 
    
}
