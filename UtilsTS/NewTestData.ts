import {test as basetest} from '@playwright/test'
interface TestData1
{
        username : string
        password : string
        productName : string
}

export const CustomTest = basetest.extend<{Testdata:TestData1}>(
    {
        Testdata: 
        {
              username : "radhe11@hotmail.co.uk",
              password : "Krishna@135",
              productName : "ZARA COAT 3"
        }
    } 
)
