Feature: Ecommerce validations
 @positive
  Scenario Outline: Placing an order
    Given A login to Ecommerce application with "<username>" and "<password>" is successful
    When Add "ZARA COAT 3" to cart
    Then Verify "ZARA COAT 3" is displayed in the cart
    When Enter valid details and place the order
    Then Verify order is present in the order history

    Examples:
        | username               | password     | 
        | radhe11@hotmail.co.uk  | Krishna@135  | 
        | rradhe11@hotmail.co.uk  | Krishna@135  |

    


