function Submit(){
    //Tên đăng nhập
    var tenDN = document.getElementById("tenDangNhap").value;
    if(tenDN == ""){
        document.getElementById("errorTenDangNhap").innerHTML = "Nhập tên đăng nhập";
    }
    else{
        if(tenDN.length <= 6 || tenDN.length >= 20){
            document.getElementById("errorTenDangNhap").innerHTML = "Tên đăng nhập không hợp lệ";
        }
        else{
            document.getElementById("errorTenDangNhap").innerHTML = "";
            for(var i=0; i< tenDN.length; i++){
                if(tenDN[i] == '.' || tenDN[i] == '-' || tenDN[i] == '_'){
                    document.getElementById("errorTenDangNhap").innerHTML = "Tên đăng nhập không hợp lệ";
                }
            }
        }
    }
//Mật khẩu
    var matKhau = document.getElementById("matKhau").value;
    if(matKhau ==""){
        document.getElementById("errorMatKhau").innerHTML = "Nhập mật khẩu";
    }
    else{
        
        if(matKhau.length < 8){
            document.getElementById("errorMatKhau").innerHTML = "Mật khẩu không hợp lệ";
        }else document.getElementById("errorMatKhau").innerHTML = "";
    }
//Nhập lại mật khẩu
    var Reset = document.getElementById("nhapLaiMatKhau").value;
    if(Reset ==""){
        document.getElementById("reset").innerHTML = "Mật khẩu không khớp";
    }
    else{
        document.getElementById("reset").innerHTML = "";
        if(Reset.length < 8){
            document.getElementById("reset").innerHTML = "Mật khẩu không khớp";
        }
        else if( matKhau != Reset ) {
            document.getElementById("reset").innerHTML = "Mật khẩu không khớp";
        }
        else document.getElementById("reset").innerHTML = "";
    }

    //NGày sinh
    var today = new Date();
    var namsinh = document.getElementById("ngaysinh").value;
    var nam = parseInt( namsinh.slice(0,4));

   
    if(namsinh !="" ){
        if((today.getFullYear()-nam)<5){
            document.getElementById("ngaySinh").innerHTML= "Ngày sinh không hợp lệ";
        }
        else{
            document.getElementById("ngaySinh").style.color="black";
            document.getElementById("ngaySinh").innerHTML= (today.getFullYear()-nam)+ " Tuổi";
        }
    }
    else document.getElementById("ngaySinh").innerHTML= "Ngày sinh không hợp lệ";
    

   
    //Email
    var email = document.getElementById("email").value; 
    var Isbool=false;
    const reg = new RegExp('[a-z]{3,}@[a-z]{5,8}\.([a-z]{2,8})(\.[a-z]{2,})?$')
    if(reg.test(email)){
        Isbool=true;
        document.getElementById("errorEmail").innerHTML= "";
    }else document.getElementById("errorEmail").innerHTML= "Email không hợp lệ";

    // Thời gian làm
    var tungay = document.getElementById("tuNgay").value;
    var denngay = document.getElementById("denNgay").value;
    if(tungay > denngay){
        document.getElementById("errorTime").innerHTML="Thời gian không hợp lệ";
    }
    else
    if(Isbool == true){
        if(tungay =="" || denngay==""){
            if(tungay=="" && denngay==""){
                document.getElementById("errorTime").innerHTML="Nhập thời gian làm";
            }
            else if(denngay==""){
                document.getElementById("errorDen").innerHTML="Vui lòng nhập thông tin";
                document.getElementById("errorTu").innerHTML="";
            }
            else if(tungay==""){
                document.getElementById("errorTu").innerHTML="Vui lòng nhập thông tin";
                document.getElementById("errorDen").innerHTML="";
            }
            
        }
        else{
            document.getElementById("errorTime").innerHTML="";
            document.getElementById("errorTu").innerHTML="";
            document.getElementById("errorDen").innerHTML="";
        }
    }else{
        document.getElementById("errorTime").innerHTML="Không cần điền ô này";
    }
}

// Ẩn hiện mật khẩu

function HienThi(){
   
    if((document.getElementById("matKhau").getAttribute("type"))=="text"){
        document.getElementById("matKhau").setAttribute("type","password");
    }
    else {
        document.getElementById("matKhau").setAttribute("type","text");
    }
}
function HienThi2(){
    if((document.getElementById("nhapLaiMatKhau").getAttribute("type"))=="text"){
        document.getElementById("nhapLaiMatKhau").setAttribute("type","password");
    }
    else {
        document.getElementById("nhapLaiMatKhau").setAttribute("type","text");
    }
}