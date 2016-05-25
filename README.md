# HTMLFormExtensions
jQuery-based extensions to make creating and filling HTML forms easier.

###Features List
* **SelectItems**: simply click on comma-separated items in a list to activate them, then when an action is triggered (such as form submission), the unselected items will be removed and the selected ones will remain.

##Usage
###SelectItems
First download the SelectItems.js file and add it to your html header, along with jQuery, which is hosted by Google:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="SelectItems.js"></script>
```
Now create a span with class `ItemSelection` around your comma-separated list:
```html
I'd like to purchase <span class="ItemSelection">bananas, apples, oranges, and chickens</span>.
```
Finally, add the class `GetItems` to the element you wish to remove the unwanted items (like a button), and enjoy!

