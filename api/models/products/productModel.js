//hämtar in min produkt 
const Product = require('./productSchema');
//Product är en moogoose.model varför jag kan använda mig av de funktioner som finns https://mongoosejs.com/docs/api/model.html

//READ - hämta alla produkter från databasen med hjälp av en GET
exports.getAllProducts = (req, res) => {

    //Mongoose Model.find() ger mig en lista/arry med ALLA produkter då den kommer matcha på allt om jag inte lägger in en query   
    Product.find()
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Något gick fel när produkterna skulle hämtas',
                err
            })
        })

}

//READ - hämta en enskild produkt med en GET
exports.getProductById = (req, res) => {

    //Mongoose Model.exists() kollar om produkten jag försöker hämta finns
    Product.exists({ _id: req.params.id }, (err, result) => {
       
      //om jag får ett fel pga. Bad request dvs. vi har skickat vår request på ett felaktigt sätt 
      if(err) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Bad request - du har angett ett ogiltigt id',
          })
      }
    
      //om jag inte hittar produkten pga den inte existerar
      if(!result) {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Produkt med angivet id existera inte',
          })
      }
  
    //om jag hittar produkten hämta den från databasen
    //använder Mongoose Model.findById som skickar oss produkten med angivet _id eller ger oss null om den inte hittas
      Product.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Något gick fel i sökningen på servern',
              err
            })
        })
  
    })
  
}

//CREATE - lägga till en produkt med en POST
exports.addNewProduct = (req, res) => {
    //Mongoose Model.exists() kollar om produkten jag försöker skapa redan finns. Filterer på namnet som måste vara unikt för varje produkt
    Product.exists({ name: req.body.name }, (err, result) => {

        //kollar om om något går fel
        if(err) {
            return res.status(500).json(err)
        }
        //om jag får ett resultat då existerar produkten redan då har vi gjort en Bad request (400)
        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Det finns redan en produkt med det namnet'
            })
        }
        //om den inte finns då vill jag skapa en ny produkt
        //använder Mongoose Model.create() metoden för detta
        Product.create({
            name:       req.body.name,
            desc:       req.body.desc,
            price:      req.body.price,
            imageURL:   req.body.imageURL,
        })
        .then(data => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Ny produkt skapad',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Kunde inte skapa produkt',
              err
            })
        })
    })
}

//UPDATE - uppdatera en produkt med en PUT
exports.updateProductById = (req,res) => {

    //Mongoose Model.exists() kollar om produkten jag försöker hämta finns
    Product.exists({ _id: req.params.id }, (err, result) => {
       
      //om jag får ett fel pga. Bad request dvs. vi har skickat vår request på ett felaktigt sätt 
      if(err) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Bad request - du har angett ett ogiltigt id',
          })
      }
    
      //om jag inte hittar produkten pga den inte existerar
      if(!result) {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Produkt med angivet id existera inte',
          })
      }

      //om jag hittar produkten vill jag uppdatera den
      //använder Mongoose Model.findOneAndUpdate() eftersom jag vill returnera produkten till skillnaded mot updateOne()
      //använder option "new" då jag vill returnera den updaterade versionen istället för originalet
      //då jag vill göra en PUT dvs. updatera hela produktern skickar jag med hela min body 
      Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(data => {
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: 'Produkt med id:' +req.params.id + ' har uppdaterats',
              data
            })
        })
        .catch(err => {
          //om användaren försöker uppdatera produktens name till ett som redan existerar 
          if(err.code === 11000) {
              return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'En produkt med samma namn existerar redan',
                err
              })
          }
          //annars är det troligtvis ett server fel
          res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Något gick fel. Kunde inte uppdatera produkten',
              err
          })
        })
    })
}

//DELETE - ta bort en produkt med DELETE
exports.deleteProductById = (req, res) => {

    //Mongoose Model.exists() kollar om produkten jag försöker hämta finns
    Product.exists({ _id: req.params.id }, (err, result) => {
       
      //om jag får ett fel pga. Bad request dvs. vi har skickat vår request på ett felaktigt sätt 
      if(err) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Bad request - du har angett ett ogiltigt id',
          })
      }
    
      //om jag inte hittar produkten pga den inte existerar
      if(!result) {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Produkt med angivet id existera inte',
          })
      }
  
    //om jag hittar produkten vill jag ta bort den från databasen
    //använder Mongoose Model.deleteOne() som tar bort produkten med angivet _id och returnerar ett objekt deletedCount med info om hur många som togs bort 
      Product.deleteOne({ _id: req.params.id })
        .then(data => {
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: 'Produkt med id:' + req.params.id + ' har raderats från databasen',
              data
            })
        })
        .catch(err => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Något gick fel. Kunde inte ta bort produkt',
              err
            })
        })
  
    })

}


