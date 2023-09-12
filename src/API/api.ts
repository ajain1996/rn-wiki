import Auth from "../constants/Auth";

export const BASE_URL = "https://drone-app-eight.vercel.app";

export const handleLoginApiRoute = (email: string, password: string, callback: Function) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "password": password,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/auth/login", requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            callback(null);
            console.log('\n\n handleLoginApiRoute error: ', error)
        });
}

export function handleRegisterApiRoute(
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    gender: string,
    dob: string,
    callback: Function
) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "phoneNumber": phone,
        "address": address,
        "gender": gender,
        "dob": dob
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/auth/register", requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            callback(null);
            console.log('\n\n handleRegisterApiRoute error: ', error)
        });
}

export function getAllDroneListAPI(callback: Function) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/listing/getalllisting", requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            callback(null)
            console.log('\n\n getAllDroneListAPI error: ', error)
        });
}

export function getSungleDroneAPI(droneId: string, callback: Function) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/listing/getlisteddrone/" + droneId, requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            callback(null)
            console.log('\n\n getSungleDroneAPI error: ', error)
        });
}

export async function bookNowDroneAPI(
    listingId: string,
    dates: any,
    fromTime: string,
    toTime: string,
    totalPrice: string,
    plan: string,
    callback: (result: any) => void,
) {
    Auth.getLocalStorageData('token')
        .then((token) => {
            if (token !== null) {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", `Bearer ${token}`);

                var raw = JSON.stringify({
                    "listingId": listingId,
                    "date": dates,
                    "time": {
                        "start": fromTime,
                        "end": toTime
                    },
                    "noOfDays": Object.keys(dates)?.length,
                    "totalPrice": totalPrice,
                    "plan": plan,
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch(BASE_URL + "/api/history/create", requestOptions)
                    .then(response => response.json())
                    .then(result => callback(result))
                    .catch(error => {
                        callback(null)
                        console.log('\n\n bookNowDroneAPI error: ', error)
                    });
            }
        })
        .catch((error) => {
            callback(null)
            console.log('\n\n bookNowDroneAPI token error: ', error)
        })
}

export function getAllUserBookingsAPI(userId: string, callback: (result: any) => void) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/history/getauserbooking/" + userId, requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            callback(null)
            console.log('\n\n getAllUserBookingsAPI error: ', error)
        });
}

export function getAllOwnerBookingsAPI(userId: string, callback: (result: any) => void) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/history/getaownerbooking/" + userId, requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            callback(null)
            console.log('\n\n getAllUserBookingsAPI error: ', error)
        });
}

export function getUserProfileAPI(callback: (result: any) => void) {
    var myHeaders = new Headers();
    Auth.getLocalStorageData('token')
        .then((token) => {
            myHeaders.append("Authorization", `Bearer ${token}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://drone-app-eight.vercel.app/api/user/getprofile", requestOptions)
                .then(response => response.json())
                .then(result => callback(result))
                .catch(error => {
                    callback(null)
                    console.log('\n\n getUserProfileAPI error: ', error)
                });
        })
        .catch((error) => { })
}

export function updateUserProfileAPI(
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    gender: string,
    dob: string,
    callback: (result: any) => void,
) {
    var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/user/updateprofile", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .then(result => callback(result))
        .catch(error => {
            callback(null)
            console.log('\n\n updateUserProfileAPI error: ', error)
        });
}
