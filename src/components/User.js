import { useState } from "react"
import axios from "axios"

function User() {

    const [user, setUser] = useState({
        name: {
            first: 'Ana'
        }
    })

    axios.get('https://randomuser.me/api/').then((resp) => {
        let userResp = resp.data.results[0]
        console.log('userResp', userResp);
        //setUser(userResp)
    }).catch((erro) => {
        console.log('passou aqui ERRO', erro);
    })

    return (
        <div className="row">
            <div className="col-3">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-3">
                            <img className="rounded" src="https://randomuser.me/api/portraits/thumb/women/2.jpg" />
                        </div>
                        <div className="col-9">
                            <p>{user.name.first}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;