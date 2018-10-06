class Helper {
    static async all(req, res){
        res.json({
            "status": 200,
            "message": "All functional!"
        })
    }
}

module.exports = Helper;