"use strict";Object.defineProperty(exports, "__esModule", {value: true});class homeController {

  index(req,res) {
    res.json({
      "tudocerto": true
    })
  }
}

exports. default = new homeController()
