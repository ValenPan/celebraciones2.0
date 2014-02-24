//Template

var franja = new Date().getHours();

Template.home.nombre=function(){
    return "Mi Nombre";
 }

 Template.home.doing=function(){
 	if(franja < 23){
    	return "lo que hago por el dia";
	}else{
		return "lo que hago por la noche";
	}
 }
