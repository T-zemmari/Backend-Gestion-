

class User{

     constructor(name,surname,dni,email,password,phone,adress,payment){
         this.name=name;
         this.surname= surname;
         this.dni=dni;
         this.email=email;
         this.password=password;
         this.phone=phone;
         this.adress=adress;
         this.payment=["paypal","bank","cash"];


     }

}


module.exports = User;