const getHomePage = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>iNet Event</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
  <form class="my-form" method="POST" action="send">
  <div class="container">
    <h1>Get in touch!</h1>
    <ul>
      <li>
        <div class="grid grid-2">
          <input type="text" placeholder="Nume" name="name" required>  
          <input type="text" placeholder="Companie" name="company" required>
        </div>
      </li>
      <li>
        <div class="grid grid-2">
          <input type="email" placeholder="Email" name="email" required>  
          <input type="tel" placeholder="Telefon" name="phone" required>
        </div>
      </li>
      <li>
        <textarea placeholder="Vrei sa ne transmiti ceva?" name="message"></textarea>
      </li>   
      <li>
        <input type="checkbox" id="terms">
        <label for="terms">I have read and agreed with <a href="">the terms and conditions.</a></label>
      </li>  
      <li>
        <div class="grid grid-3">
          <div class="required-msg">REQUIRED FIELDS</div>
          <button class="btn-grid" type="submit" disabled>
            <span class="back">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="">
            </span>
            <span class="front" type="submit" value="Submit">SUBMIT</span>
          </button>
          <button class="btn-grid" type="reset" disabled>
            <span class="back">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="">
            </span>
            <span class="front">RESET</span>
          </button> 
        </div>
      </li>    
    </ul>
  </div>
</form>

<script>
  const checkbox = document.querySelector('.my-form input[type="checkbox"]');
  const btns = document.querySelectorAll(".my-form button");
  checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
</script>
</body>
</html>
`

module.exports = getHomePage