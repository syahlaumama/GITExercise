function registrasi() {
  var cek = 0;
  var date = new Date();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var year = date.getFullYear();
  var output = month + "/" + day + "/" + year;
  var date = document.getElementById("Dbirth").value;
  if(Date.parse(date)>Date.parse(output)){
  cek =1;
  }
  var IDCard = document.getElementById("IDCard").value;
  var Username = document.getElementById("Username").value;
  var Email = document.getElementById("Email").value;
  var Pnumber = document.getElementById("Pnumber").value;
  var Profession = document.getElementById("Profession").value;
  var Address = document.getElementById("Address").value;
  var Dbirth = document.getElementById("Dbirth").value;
  var Password1 = document.getElementById("Password1").value
  var Password2 = document.getElementById("Password2").value
  if(cek == 1){
      alert("You can't choose the day after this day")
  }else if(Password2!==Password1){
  alert("Your Password isn't the same")
  }
  else{
      alert("IDCard : "+IDCard+"\n"+"Username : "+Username+"\n"+"Email : "+Email+"\n"+"Pnumber : "+Pnumber+"\n"+"Profession : "+Profession+"\n"+"Address : "+Address+"\n"+"Dbirth : "+Dbirth)
  }
  return false;
  }

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });