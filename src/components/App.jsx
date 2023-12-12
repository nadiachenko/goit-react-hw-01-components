

import friends from '../data/friends.json'
import user from '../data/user.json'
import data from '../data/data.json'
import transactions from '../data/transactions.json'
import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from 'components/Friends/Friends.jsx'
import { TransactionHistory } from 'components/Transactions/Transactions.jsx'

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </>
  )
}
export default App
