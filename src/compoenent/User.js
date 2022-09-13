import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const user = {
  a: 123,
  b: 456,
  c: 789,
};

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const num = useRef(0);
  useEffect(() => {
    num.current += 1;
    console.log("컴포넌트가 화면에 나타남" + num.current);
    return () => {
      console.log("컴포넌트가 화면에서 사라짐" + num.current);
    };
  }, []);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
  //         setError(null);
  //         setUsers(null);
  //         // loading 상태를 true 로 바꿉니다.
  //         setLoading(true);
  //         const response = await axios.get(
  //           "https://jsonplaceholder.typicode.com/users"
  //         );
  //         setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
  //       } catch (e) {
  //         setError(e);
  //       }
  //       setLoading(false);
  //     };

  //     fetchUsers();
  //   }, []);

  //   if (loading) return <div>로딩중..</div>;
  //   if (error) return <div>에러가 발생했습니다</div>;
  //   if (!users) return null;
  return (
    // <ul>
    //   {users.map((user) => (
    //     <li key={user.id}>
    //       {user.username} ({user.name})
    //     </li>
    //   ))}
    // </ul>
    <>111</>
  );
}

export default Users;
