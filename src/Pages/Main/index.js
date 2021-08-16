import './index.sass'
import 'firebase/firestore';
import {useFirestore, useFirestoreCollectionData} from "reactfire"
import {getForDays, MESSAGES, USERS} from "../../helpers/collections"
import UsersCount from "../../Components/UsersCount";
import Users from "../../Components/Users";
import PopularWords from "../../Components/PopularWords";
import Using from "../../Components/Using";

function Main() {
    const usersRef = useFirestore().collection(USERS)
    const users = useFirestoreCollectionData(usersRef).data

    const messagesRef = useFirestore().collection(MESSAGES)
    const messages = useFirestoreCollectionData(messagesRef).data
    const usingCount = getForDays(messages, 0).length

    return (
        <div className="page">
            <UsersCount count={users.length}/>
            <Users users={users}/>
            <PopularWords words={messages.map(item => item.text)}/>
            <Using count={usingCount}/>
        </div>
    )
}

export default Main
