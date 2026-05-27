const data = require('@playwright/test')

exports.customtest = data.test.extend(
    {
        Testdata: 
        {
              username : "radhe11@hotmail.co.uk",
              password : "Krishna@135",
              productName : "ZARA COAT 3"
        }
    } 
)
