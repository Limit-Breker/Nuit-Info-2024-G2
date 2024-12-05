

    $(function () {
        
        function createChalutier() {
            let randomValue = Math.floor(Math.random() * 4) + 1;
            let heights;
            let width; 
                switch (randomValue) {
                        case 1:
                        heights = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'];
                        width=['0%'];
                            break;
                        case 2:
                        heights = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'];
                        width=['100%'];
                            break;
                        case 3:
                        heights = ['0%'];
                        width=['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'];
                            break;
                        case 4:
                        heights = ['100%'];
                        width=['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'];
                            break;
                        default:
                            console.log("La valeur est autre que entre 1 et 4");
                            break;
                    }
            
                
            let randomHeight = heights[Math.floor(Math.random() * heights.length)];
            let randomWidth = width[Math.floor(Math.random() * width.length)];
            let chalutier = $('<div class="chalutier"></div>');
            console.log("ici")
    
            chalutier.addClass(`bg-indigo-500 w-30 h-30 top-${randomHeight} left-${randomWidth}`);
            $('#jeu').append(chalutier);
            }

        
        setInterval(createChalutier, 3000);
    });
    
    

