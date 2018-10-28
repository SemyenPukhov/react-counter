export const logIn = (user) => {
    console.log("Called");
    let payloadObj = {};
    const users = JSON.parse(localStorage.getItem("users"));
    for ( let i = 0; i < users.length; i++) {
        if (user.mail === users[i].mail) {
            //user exist, check password
            if (user.password === users[i].password) {
                console.log("Log In successfuly");
                payloadObj = {
                    isLogin: true,
                    user: users[i],
                };
            }
            return {
                type: "LOG_IN", payload: payloadObj,
            };
        }

        payloadObj = {
            isLogin: false,
            user: {},
            };

    }
    return {
        type: "LOG_IN", payload: payloadObj,
    };
};