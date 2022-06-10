
const dateIpRoute = async function (req, res) {

        let today = new Date()
        let dateAndTime = today.getFullYear() + "-" + (today.getMonth()+ 1) + "-" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        let ip = req.ip
        let api = req.route.path
        console.log(dateAndTime + " ,", ip  + " ,", api);
        return res.send({msg: "hello middleware, consoling date, api, ip"})

}

module.exports.dateIpRoute = dateIpRoute