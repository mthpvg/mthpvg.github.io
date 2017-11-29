---
layout: post
title:  "Window.postMessage"
date:   2017-11-28 02:14:00 -0400
categories: node
---
## Cross-origin communication between pages

There is a web page, the parent, which contains an iframe. In the iframe you embed another web page, the child.

Through the web APIs you can make those two pages communicate. You can do that easily if the two pages are from the same domain, they then share the same origin. But for security reasons that communication is not allowed if the two pages do not have the same origin.

At that point what we need is cross-origin communication and it's enabled by `window.postMessage`.

In the following example we want to pass information from the child page to the parent page. But it would also work the other way around.

Children page:
```html
<body>
  <form id="form">
    <input type="text" id="input" placeholder="Type a message...">
    <input type="submit" value="Send to parent">
  </form>

  <script type="text/javascript">
    var form = document.getElementById('form');
    var input = document.getElementById('input');

    form.onsubmit = function onSubmit() {
      window.parent.postMessage(input.value, 'http://localhost:3000');
      return false;
    };
  </script>
</body>
```

When one clicks on the submit button, it triggers:
```js
window.parent.postMessage(input.value, 'http://localhost:3000');
```
This statement dispatches an event to the parent page, `http://localhost:3000`, and a payload `input.value` which is whatever was in the text input.

Parent page:
```html
<body>
  <div id="message">Waiting for a message from the iframe...</div>
  <iframe id="iframe" src="http://localhost:3001"></iframe>

  <script type="text/javascript">
    window.addEventListener('message', displayMessage, false);

    function displayMessage(event) {
      if (event.origin !== 'http://localhost:3001') return
      var message = `We receive the message: "${event.data}" from the iframe.`;
      document.getElementById('message').innerHTML = message;
    }
  </script>
</body>
```

In the parent page the `iframe` embeds the child page. And here:
```js
window.addEventListener('message', displayMessage, false);
```
It listens for any events and call the `displayMessage` function. This function takes the payload and displays it.

Time to play:

<iframe
  id="iframe"
  width="100%"
  height="256px"
  src="https://parent.post-message.window.api.web.experiences.mthpvg.com/">
</iframe>


## Sources
