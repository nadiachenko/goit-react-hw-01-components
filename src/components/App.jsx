//import React from 'react';

import friends from 'components/friends'
import user from 'components/user'
import data from 'components/data'
import transactions from 'components/transactions'
import {Profile} from 'components/profile/Profile'
import {Statistics} from 'components/statistics/Statistics'
 import {FriendList} from 'components/friends/Friends.jsx'
import {TransactionHistory} from 'components/transactions/Transactions.jsx'

  const App = () => {
    
    return (
    <>
    <Profile 

    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
    
<Statistics stats={data} />
<FriendList friends={friends} />

<TransactionHistory items={transactions} />

     </>

     
    )
}
export default  App
