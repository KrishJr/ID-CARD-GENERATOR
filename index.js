formElement=document.querySelector('.generate-id')

formElement.addEventListener('submit',(event)=>{
    event.preventDefault();
    loadImage(event);
    document.querySelector('#id_name_output').innerHTML=formElement.elements['name'].value;
    document.querySelector('#id_college_output').innerHTML=formElement.elements['college'].value;
    document.querySelector('#id_location_output').innerHTML=formElement.elements['location'].value;
})


function loadImage(event){
    	        console.log(event)
                var reader = new FileReader();
                reader.onload = function(){
                    if(event.type==='submit'){
                        var output = document.getElementById('id_profile_output');
                    }else{
                        var output = document.getElementById('id_preview_image');
                    }
                output.src = reader.result;
            }
            if(event.type==='submit'){
                reader.readAsDataURL(formElement.elements['profile_img'].files[0]);
                document.querySelector('.right').style.visibility="visible";
            }else{
                document.getElementById('id_preview_image').style.display="block";
                reader.readAsDataURL(event.target.files[0]);
            }
        }
