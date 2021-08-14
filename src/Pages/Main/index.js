import './index.sass'
import 'firebase/firestore';
import {useFirestore, useFirestoreCollectionData} from "reactfire"
import {MESSAGES, USERS} from "../../helpers/collections"
import UsersCount from "../../Components/UsersCount";
import Users from "../../Components/Users";
import PopularWords from "../../Components/PopularWords";

function Main() {
    const usersRef = useFirestore().collection(USERS)
    const users = useFirestoreCollectionData(usersRef).data

    const messagesRef = useFirestore().collection(MESSAGES)
    const messages = useFirestoreCollectionData(messagesRef).data
    return (
        <div className="page">
            <UsersCount count={users.length}/>
            <Users users={users}/>
            <PopularWords words={messages.map(item => item.text)}/>
        </div>
    )
}

export default Main
