import React, {useEffect, useState} from "react";
import { gql, useQuery } from '@apollo/client';
import User from "./User";

const UserList = () => {
    const [users, setUsers] = useState([]);

    const GET_PEOPLE = gql`
      query GetPeople($auth: String, $request: SearchRequest) {
        getPeople(auth: $auth, request: $request) {
            id
            name
            phone
        }
      }
    `;

    // useQuery를 사용하여 데이터 가져오기
    const { loading, error, data } = useQuery(GET_PEOPLE, {
        variables: {
            auth: '응애',
            request: {
            },
        },
    });

    useEffect(() => {
        if (loading) {
            console.log('로딩 중...');
        }
        if (error) {
            console.error(error.message);
        }
        if (data && data.getPeople) {
            const users = data.getPeople; // 이 부분에서 타입을 사용하여 변수를 추론하도록 TypeScript에 도움을 주세요.
            setUsers(users);
        }
    }, [loading, error, data]);
    const onRemove = (id: number) => {
        // setUsers(users.filter(user => user.id !== id));
        // 삭제하는 기능 넣기.
        console.log(id);
    };

    return (
        <div>
            {users.map((user: { id: number, name: string, phone: string }) => (
                <User id={user.id} name={user.name} phone={user.phone} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    )
}

export default UserList;
