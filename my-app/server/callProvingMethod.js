const db = require('../db') //this is required
const Stampery = require('stampery');

const router = require('express').Router()


router.get('/:id', function(req, res, next) {
  var stampery = new Stampery('342463c4-3cbe-4d63-b1fe-48d7a9c13c3d');
  console.log(req.params.id);

  stampery.getById(req.params.id).then((stamp) => {
    // console.log(stamp[0].receipts.btc);
    // let validity = stampery.prove(stamp[0].receipts.btc);
    // console.log(validity);
    // if (validity) {
    //   res.status(200).send("This works");
    // }
    // console.log(stamp[0].receipts.eth);
    // res.status(200).send(stamp[0].receipts.eth);
    // res.send(req.params.id + ".pdf");
    // res.status(200).send(stamp[0].receipts.btc);
    // console.log(stamp);
    res.status(200).send(stampery.prove(stamp[0].receipts.btc));

    // res.status(200).send(stamp);
     // return console.log('Valid: ', stampery.prove(stamp.receipts));
  }).catch((err) => {
    res.status(200).send(err);
    return console.error(err);
    // res.status(200).send(err)
  });

});



module.exports = router;
