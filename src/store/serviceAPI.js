import axios from "axios";


export function login(credentials, callback) {
    axios
    .post(process.env.REACT_APP_API_URL+'login/', credentials)
    .then((res) => {
        if (callback != null) {
            callback(res);
        }
    })
    .catch((err) => {
        console.log('CHAKNA',err);
    });
}

export function getAllTransactionsByUser(curr_user, callback) {
    console.log('CURRENT USER',curr_user);
    axios
    .get(process.env.REACT_APP_API_URL+'transactions-by-user/'+ curr_user)
    .then((res) => {
        console.log(res);
        if (callback != null) {
            callback(res.data);
        }
    })
    .catch((err) => {
        console.log('CHAKNA',err);
    });
}

export function getTransactionCategories(callback) {
    axios
    .get(process.env.REACT_APP_CATEGORY_API_URL)
    .then((res) => {
        console.log(res);
        if (callback != null) {
            console.log('categories list',res.data);
            callback(res.data);
        }
    })
    .catch((err) => {
        console.log('CHAKNA',err);
    });
}

export function getTransactionTypes(callback) {
    axios
    .get(process.env.REACT_APP_TRANSACTION_TYPE_API_URL)
    .then((res) => {
        console.log(res);
        if (callback != null) {
            console.log('transaction types list',res.data);
            callback(res.data);
        }
    })
    .catch((err) => {
        console.log('CHAKNA',err);
    });
}

export function getMopList(callback) {
    axios
    .get(process.env.REACT_APP_MOP_API_URL)
    .then((res) => {
        console.log(res);
        if (callback != null) {
            console.log('mop list',res.data);
            callback(res.data);
        }
    })
    .catch((err) => {
        console.log('CHAKNA',err);
    });
}

export function createNewTransaction(transaction_entry, callback) {
    
    axios
		.post(process.env.REACT_APP_API_URL+'transact/', transaction_entry	)
		.then((res) => {
            callback();
		}) 
		.catch((err) => {
			console.log('CHAKNA',err);
		});
}

export function getUserURL(user_email) {


    axios
		.get(process.env.REACT_APP_API_URL+'user/'+user_email)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log('CHAKNA',err);
		});
}