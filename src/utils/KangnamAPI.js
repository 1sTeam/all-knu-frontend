import axios from 'axios';

//login to knu
export const LoginKangnamUniv = (id, password) => {
    return new Promise((succ, fail) => {
        axios.get("https://m.kangnam.ac.kr/knusmart/c/c001.do",{
            params: {
                user_id: id,
                user_pwd: password
            }
        }).then(response => {
            //response 200
            if(response.data.result === "success") {
                //로그인 성공
                succ(response);
            } else {
                //실패
                fail(response);
            }
        }).catch(error => {
            fail(error);
        });
    });
}

export const LogoutKangnamUniv = () => {
    return new Promise((succ, fail) => {
        axios.get("https://m.kangnam.ac.kr/knusmart/c/c003.do").then(response => {
            //response 200
            if(response.data.result === "success") {
                //성공
                succ(response);
            } else {
                //실패
                fail(response);
            }
        }).catch(error => {
            fail(error);
        });
    });
}