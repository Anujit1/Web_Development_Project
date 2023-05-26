This HTML document contains inline CSS styles and JavaScript code to create a Temperature Converter web application. Let's break it down section by section:

CSS Styles:

The CSS section defines styles for the page layout and design using CSS selectors.
The universal selector (*) is used to apply styles to all elements on the page. It sets the margin and padding to 0, and specifies the font family as 'IBM Plex Mono', a monospace font.
The .container class defines styles for the main container of the web application. It sets the width to 100% of the viewport width (100vw) and the minimum height to 100% of the viewport height (100vh). It applies a linear gradient background from #f4881b to #d38ff4 using the linear-gradient() function. It uses flexbox to vertically and horizontally center its child elements (display: flex, flex-direction: column, justify-content: center, align-items: center). It also adds padding and sets the box-sizing property to border-box to include padding and borders in the element's total width and height.
The .container h1 selector styles the heading of the converter. It sets the color to white (#FFFFFF), the font weight to 700, the font size to 3.5vw (3.5% of the viewport width), and centers the text with text-align: center. It also adds a bottom margin of 30px.
The .converter-row class styles the converter row, which contains the input fields for Fahrenheit, Celsius, and Kelvin conversions. It uses flexbox to evenly distribute the columns (display: flex, justify-content: space-between), applies a semi-transparent white background (rgba(255, 255, 255, 0.2)), sets the border-radius to 10px, adds padding to the top and bottom, and includes a margin-top of 20px to create space between rows.
The .col class styles each column within the converter row. It uses flex-basis: 100% to ensure each column occupies the entire width, sets the maximum width to 300px, adds margin, and centers the text with text-align: center.
The .col label selector styles the labels for each input field. It sets the font size to 2vw (2% of the viewport width), the font weight to 500, adds a bottom margin of 10px, and sets the color to black (#000000).
The .col input selector styles the input fields. It sets the width to 100%, the height to 30px, applies a white background, adds a border-radius of 5px, centers the text, and sets the color to black.


JavaScript Code:

The JavaScript section begins with a <script> tag and contains code that handles temperature conversion based on user input.
It retrieves the Celsius, Fahrenheit, and Kelvin input elements using document.getElementById().
The code sets up event listeners (oninput) for the Celsius, Fahrenheit, and Kelvin input fields to handle temperature conversions.
When the Celsius input field changes (celsius.oninput), the code calculates the corresponding Fahrenheit value using the conversion formula (parseFloat(celsius.value) * 9) / 5 + 32. It then updates the Fahrenheit input field (fahrenheit.value) with the converted value. Similarly, it calculates the Kelvin value using (parseFloat(celsius.value) + 273.15) and updates the Kelvin input field (kelvin.value).
The same process occurs for the Fahrenheit and Kelvin input fields. When the Fahrenheit input field changes (fahrenheit.oninput), the code calculates the Celsius and Kelvin values using the conversion formulas, and updates the corresponding input fields. When the Kelvin input field changes (kelvin.oninput), the code calculates the Fahrenheit and Celsius values and updates the input fields accordingly.
  
  
 I hope that this description helped you to understant the above code.

  ![Screenshot](https://github.com/Anujit1/Web_Development_Project/assets/129964900/ef60e5c7-110a-4c01-a89c-0f6d729b68eb)

