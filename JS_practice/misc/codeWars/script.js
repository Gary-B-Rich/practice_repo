
function abbrevName(name){
    let first=name[0];
    for(let i=0;i<name.length;i++) {
      if(name[i]===" ") {
        i++;
        let second=name[i];
        let capFirst=first.toUpper();
        let capSecond=second.toUpper();
        return `${capFirst}.${capSecond}`;   
      };
    };
  
  };