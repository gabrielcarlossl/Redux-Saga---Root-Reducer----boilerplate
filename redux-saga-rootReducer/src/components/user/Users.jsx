import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/actions/users'
import Card from "../card/Card"

const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)
    console.log(users)
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <>
            {
                users.length > 0 && users.map(user => (
                    <Card 
                        user={user} 
                        key={user.id} 
                    />
                ))
            }
            {
                users.length === 0 ? <p>No users</p> : null
            }
            {
                users.length === 0 && loading === true ? <p>Loading...</p> : null
            }
            {
                error === 0 && !loading === true ? <p>{error.message}</p> : null
            }
        </>
    )
}
export default Users