var letters = 'abcdefghijklmnopqrstuvwxyz'; console.log(letters.length," letters length")
var numbers = '1234567890';console.log(numbers.length," numbers length")
var symbols = '!@#$%^&*';console.log(symbols.length," symbols length")
var $LN = letters+numbers;console.log($LN.length," $LN length")
var $LS = letters+symbols;console.log($LS.length," $LS length")
var $NS = numbers+symbols;console.log($NS.length," $NS length")
var $LNS = letters+numbers+symbols;console.log($LNS.length," $LNS length")

function GeneratePassword() {
  var value = document.getElementsByName('pass');
  var select;
  var password = "";
  var getLength = parseInt(document.getElementsByName('length')[0].value);
      console.log(getLength);
  for(let i=0;i<value.length;i++) {
    if(value[i].checked) {
      select = parseInt(value[i].value);
      console.log(select);
    }
  }
    if(select === 1) {
      for(let j=0;j<getLength;j++) {
        password += letters[Math.round(Math.random()*(letters.length-1))];
      }
    }
    else if(select === 2) {
      for(let j=0;j<getLength;j++) {
        password += numbers[Math.round(Math.random()*(numbers.length-1))];
      }
    }
  else if(select === 3) {
      for(let j=0;j<getLength;j++) {
        password += symbols[Math.round(Math.random()*(symbols.length-1))];
      }
  }
  else if(select === 4) {
    for(let j=0;j<getLength;j++) {
      password += $LN[Math.round(Math.random()*($LN.length-1))];
  }
  }
      else if(select === 5) {
    for(let j=0;j<getLength;j++) {
      password += $LS[Math.round(Math.random()*($LS.length-1))];
  }
      }
          else if(select === 6) {
    for(let j=0;j<getLength;j++) {
      password += $NS[Math.round(Math.random()*($NS.length-1))];
  }
          }
              else if(select === 7) {
    for(let j=0;j<getLength;j++) {
      password += $LNS[Math.round(Math.random()*($LNS.length-1))];
  }
  }
  else {
    password += "Please Select Any Of The Type";
  }
    var result = document.getElementById('result');
    result.innerText = password;
  }

  function PasswordGenerate() {
    var checkbox1 = document.getElementById('value1');
    var checkbox2 = document.getElementById('value2');
    var checkbox3 = document.getElementById('value3');
    var password = "";
    var getLength = parseInt(document.getElementsByName('length')[1].value);
    console.log(getLength);
    if(checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true) {
      // console.log('checkbox 1 2 3 is true')
      for(let j=0;j<getLength;j++) {
        password += $LNS[Math.round(Math.random()*($LNS.length-1))];
    }
    }
    else if(checkbox1.checked == true && checkbox2.checked == true) {
      // console.log('checkbox 1 2 is true')
      for(let j=0;j<getLength;j++) {
        password += $LN[Math.round(Math.random()*($LN.length-1))];
    }
    } 
    else if(checkbox1.checked == true && checkbox3.checked == true) {
      // console.log('checkbox 1 3 is true')
      for(let j=0;j<getLength;j++) {
        password += $LS[Math.round(Math.random()*($LS.length-1))];
    }
    }
    else if(checkbox2.checked == true && checkbox3.checked == true) {
      // console.log('checkbox 2 3 is true')
      for(let j=0;j<getLength;j++) {
        password += $NS[Math.round(Math.random()*($NS.length-1))];
    }
    }
    else if(checkbox1.checked == true) {
      // console.log('checkbox 1 is true')
      for(let j=0;j<getLength;j++) {
        password += letters[Math.round(Math.random()*(letters.length-1))];
      }
    }
    else if(checkbox2.checked == true) {
      // console.log('checkbox 2 is true')
      for(let j=0;j<getLength;j++) {
        password += numbers[Math.round(Math.random()*(numbers.length-1))];
      }
    }
    else if(checkbox3.checked == true) {
      // console.log('checkbox 3 is true')
      for(let j=0;j<getLength;j++) {
        password += symbols[Math.round(Math.random()*(symbols.length-1))];
      }
    }
    else {
      password += "Please Select Any Of The Type";
    }
    var result = document.getElementById('boxResult');
    result.innerText = password;
  }

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }