 // Define the  Cllick fevent function 
 $("#go").click(function () {
     let inputForm = document.getElementById('input-section');
     let outputForm = document.getElementById('output-section');
     let inputText = document.getElementById('input-text').value;
     let outLogo = document.getElementById('output-logo');

     inputForm.style.display = 'none';
     outputForm.style.display = 'flex';
     outLogo.innerText = inputText;
     console.log(inputText);
 });
 $("#edit").click(function () {
     let inputForm = document.getElementById('input-section');
     let outputForm = document.getElementById('output-section');
     inputForm.style.display = 'flex';
     outputForm.style.display = 'none';
 });


 function inputHandler() {
     let inputText = document.getElementById('input-text').value;
     let goBtn = document.getElementById('go');
     console.log(inputText.length);
     if (inputText.length > 0) {
         goBtn.style.display = 'block';
     } else {
         goBtn.style.display = 'none';
     }
 }

 // Define the function 
 // to Download the output-body
 function takeshot() {     
    let inputText = document.getElementById('input-text').value;
     html2canvas(document.getElementById('output-body'))
         .then(function (canvas) {
             var anchorTag = document.createElement('a');
             document.body.appendChild(anchorTag);
             // document.getElementById('preview').appendChild(canvas);
             anchorTag.download = `${inputText}.jpg`;
             anchorTag.href = canvas.toDataURL();
             anchorTag.target = '_blank';
             anchorTag.click();
         });
 }