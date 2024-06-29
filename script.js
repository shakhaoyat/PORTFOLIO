function handleContact(event){
    event.preventDefault();
    console.log("Contact");
    //console.log("event");
    console.log(event.target);
   // console.log(event.target.name);
    //console.log(event.target.email);
   // console.log(event.target.message);


    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.message.value);

}