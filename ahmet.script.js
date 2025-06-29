document.getElementById('myform').addEventListener('submit',function(e){
    e.preventDefault();
    const dogum = document.getElementById('dogum').value;
    console.log(2025 - dogum)
    const result = 2025 - dogum
    document.getElementById('result').textContent = "şuanki yaşınız " + result +" yıl"
})