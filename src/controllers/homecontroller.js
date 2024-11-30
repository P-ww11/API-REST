class homeController {

  index(req,res) {
    res.json({
      "tudocerto": true
    })
  }
}

export default new homeController()
