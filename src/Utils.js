import Connect from './Api';
export function sendEmail(email, message,Title) {
    let obj = {};
    obj.title = "Auction Alert"
    obj.message = message
    obj.subject = "Auction Alert"
    obj.to = email
    Connect(obj).then(t => {
        console.log("email send ==> " + t)
    }).catch(p1 => {
        console.log("email send ==> " + p1)
    })
}