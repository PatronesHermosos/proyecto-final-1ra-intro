var createRandom = function(){
    // random x and y
    var width = window.innerWidth;
    var height = window.innerHeight;
    var x = Math.floor(Math.random()*width);
    var y = Math.floor(Math.random()*height);
    if (x>(width-50)) x = width - 50;
    if (y>(height-50)) y = height - 50;

    // random color
    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    // set div attributes
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '50px';    
    div.style.height = '50px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    // default start position
    div.x = x;
    div.y = y;
    return div;        
};

var create = function(x,y,color){
    // set div attributes
    var div = document.createElement('div');
    div.id = 'ball';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '15px';    
    div.style.height = '15px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    return div;        
};

var size = function(div, width, height){
    div.style.width = width + 'px';    
    div.style.height = height + 'px';    
};

var color = function(div, r, g, b){
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    div.style.background = color; 
};

var zIndex = function(div, zIndex){
    div.style.zIndex = zIndex.toString(); 
};

var colorRandom = function(div){

    var counter = 0;
    var limit = 3;

    var timerColor = function(div, x, y){
        if(counter >= limit) return;
        counter += 1;

        setTimeout(function(){
            // random color
            var r = Math.floor(255*(Math.random()));
            var g = Math.floor(255*(Math.random()));
            var b = Math.floor(255*(Math.random()));        
            var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            div.style.background = color; 
            timerColor(div);
        },500);
    };
    timerColor(div);
};


var move = function(div, x, y){

    // add x coordinate
    div.x = div.x + x;
    div.style.left = div.x + 'px';

    // add y coordinate
    div.y = div.y + y;
    div.style.top = div.y + 'px';                  
};

var repeatMove = function(div, x, y, limit){
    var counter = 0;

    var timerMove = function(div, x, y){
        if(counter >= limit) return;
        counter += 1;

        setTimeout(function(){
            move(div,x,y);
            timerMove(div,x,y);
        },1000);
    };
    timerMove(div,x,y);
};    

var painting = ["#fefefe","#fefefe","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#fdfdfd","#dfcdc6","#d8c5bf","#c7b8ac","#d0c1ae","#cfbab1","#c5b2a7","#c4b2a5","#d0bfb0","#ccb9ac","#d9c5b9","#cfbbaf","#d1bbb6","#d4bfb7","#cbb7aa","#d9c5b4","#d3c5b8","#d0c2b5","#c5b7a8","#e4d6c8","#dbc2b7","#cca79c","#cfada7","#d0b6b2","#e0ccc4","#d9c6bd","#d4b5ae","#d5b8b1","#d4b8b1","#d2b8b1","#d4bab4","#d6b6ae","#d4b6ae","#d0b2ab","#cbafab","#c8afad","#c0a19e","#cbb4b0","#d8c7c1","#cdb8b4","#c9b2ae","#d9c7c4","#d8c0b5","#cbb4a8","#d4bcb3","#d1b4ae","#dbbab4","#dcbcb6","#ceb1ab","#ceb2ad","#d1b4ac","#d4b3b3","#d9beba","#dab7b5","#d9b7ba","#d4b4bb","#d1b5b7","#dbc4ba","#ccb3a6","#d6babb","#d5b8bb","#ceb3b1","#ceb4b6","#d5b8bf","#d2adb5","#d0a4a8","#d5aca9","#d2a8a7","#d3acab","#dbb0b6","#ceb1b7","#d4b6bb","#e4b8b5","#ddbcba","#cfb7ba","#dbbfc4","#dcbbb8","#d5bec3","#cbafb0","#d7b7b9","#c49c9a","#d6b6b4","#d1b2b0","#c6afab","#cfb8b2","#d2bbb4","#cbb4ac","#d8aeae","#d6afae","#e7c7c4","#e0c4c7","#e7bbbd","#e6b4ba","#d3acae","#cfa4a1","#c39fa6","#b8b0b6","#b7a6b0","#d1b8c0","#d4b6bb","#d6b5b4","#ceafae","#dabab8","#cfadac","#e5bebd","#deb5b4","#ccb0ab","#d1afae","#d5acaf","#ce9f98","#ceaaaf","#d1b1b2","#d2b1b3","#d7b5c1","#d5bfbe","#c0b8bf","#bdbec7","#bab7b3","#fcfcfc","#c0aca2","#9b8d85","#b8b1b0","#b6b3b1","#b0b1ad","#b0b3ad","#aab0a9","#b9bdba","#c3c7c4","#b7b9b7","#bebebd","#c4c4c2","#c4c5c1","#c8c9c3","#d0d1c7","#d2d0c7","#cec9bf","#cdc4b5","#c9bca9","#c1b090","#a08556","#967d50","#ab9a77","#aea07a","#998d64","#aa956e","#ab976e","#ab9971","#a2916a","#a69670","#a5946e","#9c8b65","#a89774","#b3a581","#817151","#76683f","#938765","#8c8365","#908468","#8b7f64","#968e73","#958a78","#8c8372","#837a6f","#847671","#87726b","#715f57","#716057","#6d5d54","#615046","#574439","#756756","#8d7b5f","#81705b","#817265","#7b7065","#6c5d5a","#807366","#6f605c","#72625a","#857258","#978873","#837566","#7b6b5d","#66594b","#776853","#9c8c7a","#78736c","#af9a92","#756254","#897b71","#9c7e77","#6c5750","#827470","#7d6a68","#7a645d","#8e807d","#7e6c61","#756058","#472f29","#6e5955","#776360","#715d5b","#705d59","#705d57","#7b6961","#a49088","#907b6e","#9b8973","#9a8871","#9e9273","#ad9780","#8f816d","#6f5e54","#6a5353","#98847f","#84726d","#857774","#98847d","#977c75","#735c5b","#6e6361","#6a5d5b","#665754","#64524f","#826f6b","#8e7877","#886d6d","#94715c","#ad8b80","#b89c8a","#967a64","#8b7369","#94846f","#7f736e","#6c6165","#69676c","#fafafa","#d4c0ab","#9a8f89","#b0b5c1","#afb6ca","#b7bec9","#a9b2be","#a9b3bf","#b7becd","#b5bcc9","#b9becb","#b4b8c3","#bdc2c9","#c6cbd0","#c8ccd0","#cdd2d4","#cbd2cf","#ccd0c8","#c0bca9","#afa488","#baae89","#a28e52","#a69455","#978c5a","#9f9661","#968d58","#a79b66","#b0a46e","#a29761","#ada36d","#a79d6a","#b7b27e","#a9a471","#9a9663","#a19f6d","#8e8a59","#7b7942","#858552","#969471","#999975","#9ea080","#9c9e82","#abae97","#9fa592","#889084","#7b7e7b","#68665e","#6e6d65","#5d5c51","#68665a","#535146","#4f4e3b","#757659","#95946e","#8a8a6a","#747462","#70726b","#81807e","#99998c","#8a877b","#7c7a64","#a99f7a","#979173","#8d8d78","#666558","#49482e","#625f3b","#8f8a66","#7e8875","#6f624f","#cfbaa0","#796953","#a49989","#776e63","#837c74","#6f675c","#a0968b","#7a7b6a","#918e6d","#686151","#3e3731","#443e38","#6a6460","#675756","#6c5c5a","#665753","#6c5c57","#78796c","#93937b","#96966e","#9f9d69","#a1a871","#91875d","#a59c7a","#5a604f","#4d4a47","#d0b29c","#a7937c","#5c5a51","#928778","#af9c8c","#6e615d","#595356","#5e585a","#524b4c","#554d4c","#5d5754","#5c5554","#5c5751","#60594b","#6a5e54","#918770","#888265","#918667","#a19874","#7d715f","#624c4b","#696674","#f7f7f7","#d9c0ae","#988c87","#adb2bf","#babfcf","#c0c5cc","#b9bdc6","#b9b9c4","#c0c2cc","#c2c5cd","#cfd1d6","#d9d9dc","#dadcdb","#d5d6d6","#cccdcd","#cccdce","#ced3ca","#c3c5b7","#b3b095","#b2a984","#b3a884","#a18c55","#a7945d","#a6996d","#ac9f72","#b0a275","#9f9262","#a59868","#b1a375","#9d9163","#a69b6e","#948d5c","#a29d6b","#918c5d","#a39f71","#7a7a4f","#838552","#999d6e","#8d8c6a","#949977","#8f967a","#949880","#a1a296","#a0a498","#889087","#838985","#676b66","#757772","#66685e","#5c5c51","#474a3e","#343828","#787d65","#8d8b66","#93916e","#7e7e67","#7a7b72","#b2b3af","#b7b9aa","#c4c6b7","#9d9d85","#a39f6f","#a2a17b","#787966","#7a7871","#5f5a44","#6a6540","#aaa378","#9fa076","#8c836a","#6a6353","#d0bea4","#9c9885","#756e60","#8f867a","#6d6657","#998f84","#8c8e74","#999969","#6f6b52","#3e3c37","#5c5956","#65635f","#696c67","#656863","#4e524b","#6a6e64","#797b6e","#7c7f69","#8e936e","#919468","#99a27d","#a39475","#c1b197","#56554c","#4c5256","#d2bd9c","#9d8773","#5a5d5f","#91887f","#bfac9d","#67605a","#6a6267","#615b5f","#4b4647","#655f60","#5a5751","#585452","#595355","#5e5d5a","#4d4647","#8b8273","#6b6757","#7c7260","#918c70","#797467","#5f5753","#6f6873","#f5f5f5","#d0b7aa","#9c908d","#bbbfc8","#c1c6cf","#c7cdce","#c1c7cc","#b4bbc1","#c2c7ca","#bfc4c7","#cacfd1","#ced3d5","#cccfd5","#d0d2d9","#cecfd0","#d0d2c8","#c6c9bc","#bfbfab","#bcb797","#cabd96","#a89670","#9c8b4e","#988951","#918452","#a99c6b","#a79a6a","#afa273","#a7996c","#b2a576","#b0a672","#a69d67","#9b9663","#9c9765","#9d9a69","#999666","#a09e67","#95955a","#93956a","#8b916c","#9da17f","#9f9f85","#a3a68f","#94978b","#b0b4ab","#979b98","#848a86","#848488","#80827d","#696c5e","#717466","#6d6d5a","#595c4a","#82866e","#8b9165","#a5a578","#988f76","#a39884","#848171","#adaa9e","#b0aba1","#878471","#9b965f","#a5a27c","#878675","#6f6b63","#535144","#787753","#aba379","#b7ae81","#878562","#7f826c","#888475","#d4c5a1","#8d7053","#8e8583","#73756e","#9fa09a","#868368","#a6a276","#83836d","#424246","#72706c","#857873","#596155","#565b52","#6f6d68","#6f6663","#666458","#757763","#878d6d","#919a6e","#79826b","#999070","#d1bf9e","#62645f","#555f5a","#dbcdaf","#9d8e87","#6e6a66","#9c9c9a","#cbad92","#636465","#68656b","#6b686b","#585452","#67615d","#5a5855","#5a544e","#5e5f62","#766361","#5c5558","#a89689","#84766c","#6a6556","#aea18f","#7b756f","#5f5d59","#68656f","#f4f4f4","#ceb5a8","#847875","#bdc1ca","#c1c6ce","#c8cdd4","#c8cdd3","#c3c8d0","#cbcfd1","#cdd0d3","#caced0","#cacdd0","#c7cacd","#cccfd1","#cfd0ce","#d1d3c7","#c5c7b9","#c4c2b0","#beb698","#a99d76","#b09f78","#938352","#9d8f5e","#afa174","#a09364","#a79a6a","#b2a572","#a99c69","#afa26f","#aca26f","#a89f6c","#aaa26c","#aaa56f","#938e5b","#9b9664","#9e9c66","#8f905b","#90936b","#949b76","#8a8c6c","#a0a086","#aeb19a","#babdae","#b2b5ab","#989c97","#747872","#686a66","#72746b","#6e715f","#727661","#8a8e72","#6d7259","#7f8769","#989771","#a8a672","#9e9972","#797561","#77775d","#a29f88","#7d7964","#89856a","#84845a","#828465","#747566","#6e6a60","#676654","#81815c","#a7a075","#aea46f","#9c996d","#787c5e","#7d7e6d","#aaa28b","#d3bf9f","#918671","#8b8779","#a0a29c","#8c8a6d","#9f9c6c","#888a67","#5b5c58","#61625e","#706b68","#a49291","#665a57","#605c59","#686f67","#5e5e59","#676960","#757c69","#6e785d","#7a8876","#9c997e","#c7b599","#7c7c72","#68726b","#d7caab","#9b8b86","#66615d","#8f8e8d","#d6b89c","#656668","#625f63","#656265","#53504f","#64605d","#5e5b59","#5e5753","#656569","#867977","#5f5b5b","#c6b2a3","#7e6d64","#746f60","#bcae9e","#716b66","#5b5954","#7c5b54","#f4f4f4","#d0b7a9","#8c7f7c","#bfc4cd","#c6cbd4","#d0d2de","#dcdee4","#f3f3f5","#d3d6d6","#d1d4d5","#d0d3d3","#ced1d2","#ccd0cb","#d0d3d0","#d0d3cd","#d0d2c5","#c8caba","#c4c1af","#c3baa1","#baac84","#ae9e74","#dcd5c2","#cdc4ac","#a3946a","#96885d","#a69968","#a89c67","#ac9f69","#a99c67","#9e9361","#a59b6b","#a49b64","#aaa36c","#aba56f","#a19c67","#a2a274","#ebebe2","#9c9f7f","#8b906e","#99997c","#bab89d","#babba3","#bec1ac","#b4b6a7","#95988d","#6c7066","#797b71","#656858","#70745e","#828868","#b1b69a","#e1e2d6","#8e966e","#989475","#a3a16b","#969666","#81846e","#7a7b66","#81816b","#9e9b86","#a59f8b","#84846d","#7e816d","#7d8072","#77746a","#cfcec8","#b6b79b","#a4a174","#aaa267","#a8a572","#8e926c","#7b826b","#7c7d72","#ccc3a9","#beab86","#c0b29f","#6f726a","#848566","#a2a26f","#9da07f","#e3e3e1","#7a7b77","#696c6b","#797271","#aca6a5","#6b6762","#77746d","#6d6d6b","#6a6b68","#5d6258","#747d6d","#6c7a69","#96967c","#b7a88d","#aeada4","#bcc1bd","#d2c4a7","#a39390","#66625e","#8d8c8a","#caac90","#5f5f61","#676568","#626062","#6d6a6b","#656161","#61605f","#6a6561","#5b595e","#e6e3e3","#939292","#c5ae9a","#6c574e","#6a6357","#c3b3a5","#6f6865","#585452","#75696d","#f4f4f4","#d6bcaf","#908481","#c2c7d0","#c7ccd5","#d2d3dd","#fcfcfc","#ffffff","#eff0ef","#d3d4d3","#d2d3d3","#d1d3d2","#cfd3d0","#d0d3d3","#cfd1d0","#cbccc6","#cacab8","#c1bdae","#c7bca6","#afa179","#c2b99b","#ffffff","#ffffff","#cac1a0","#9e9161","#968959","#ab9e6c","#a99c6a","#ac9f6e","#968c59","#ada36f","#9f9b66","#999661","#91905b","#9f9f6f","#e6e6db","#ffffff","#e7e8e2","#929479","#98967b","#b6b298","#b8b89e","#b7b79f","#b5b7a3","#8a8d7f","#707363","#6d6f63","#707365","#6c705b","#abb192","#f8f8f5","#ffffff","#ced0bc","#8a8b6d","#8f9064","#7a7a59","#787d64","#787d5f","#a0a383","#7d7b5d","#887f69","#b9af9d","#797563","#6f7060","#bfc0ba","#ffffff","#f7f7f5","#aeae88","#a3a46f","#a1a26f","#85885f","#8c9078","#838572","#6c685b","#d1b59c","#cdbaa9","#777d6f","#7b7d5c","#a2a377","#e9eae4","#ffffff","#d9d8d7","#797977","#6a706c","#7a7e79","#84847d","#8c8980","#a19e93","#b1b0a1","#989c82","#89906d","#8a9477","#878766","#cfc9b3","#ffffff","#ffffff","#e9e1d1","#9d8d8c","#6b6763","#91908f","#dbbda1","#6c6d6e","#737475","#656566","#747375","#635f64","#5a5a5c","#67605f","#c7c6c8","#ffffff","#f5f4f4","#d1bca8","#847268","#665d54","#bbaa9e","#6a6160","#585353","#7c5b50","#f4f4f4","#c8ac95","#8d7d79","#c4c6cf","#eaeef0","#ffffff","#ffffff","#ffffff","#ffffff","#f9fafa","#dce0e0","#c8cdce","#c5c8cd","#c7c9ce","#c8c9cb","#c9c8c5","#c1c3b5","#bab8a5","#c6bea4","#f5f2ea","#ffffff","#ffffff","#ffffff","#ffffff","#eae7da","#a79a69","#96884f","#918649","#8b8245","#90894c","#8a8445","#83804a","#8a8853","#c3c1a4","#f9f9f5","#ffffff","#ffffff","#ffffff","#ffffff","#d5d6c5","#b1b189","#8c8a62","#7a805a","#6f7354","#666a52","#4d5242","#59635c","#6d7569","#d4d5ce","#ffffff","#ffffff","#ffffff","#ffffff","#f1f2ed","#90937a","#505338","#48492a","#575e31","#6a6e3e","#77723e","#857a49","#8d8b66","#aba795","#faf8f7","#ffffff","#ffffff","#ffffff","#ffffff","#dadcce","#828765","#54573c","#616448","#5f623c","#5d6451","#bea786","#bda78f","#737b70","#c0c4b1","#ffffff","#ffffff","#ffffff","#ffffff","#f5f5f5","#9e9e9c","#5b5c57","#46483b","#686e5a","#808662","#889065","#787d48","#a29c63","#b2ad78","#e8e7da","#ffffff","#ffffff","#ffffff","#ffffff","#f0eeed","#7c858b","#726863","#99837b","#615755","#494840","#555154","#55505c","#7c777c","#81868c","#f5f5f4","#ffffff","#ffffff","#ffffff","#ffffff","#c5bcc0","#564f51","#bfa68e","#504655","#313322","#5d4034","#f4f4f4","#d5bcb2","#a19495","#ceced8","#d5d9e1","#f1f3f6","#ffffff","#ffffff","#fcfcfc","#e6e7eb","#d3d5da","#d4d6db","#d4d9db","#c8cdce","#cbcfcd","#cbcdc8","#b5b6ad","#bfbdb1","#bfbca7","#cfcbb5","#f4f3ee","#ffffff","#ffffff","#f1f0e7","#beb891","#a2996a","#9d9360","#a09b67","#8e8954","#8e8951","#a09b65","#979263","#989467","#aaa77a","#ccccb5","#ffffff","#ffffff","#ffffff","#d5d4c4","#a8a681","#9b9b6f","#989870","#818a61","#6e755d","#7c837a","#767e73","#5c675e","#899286","#8c9380","#dcded6","#ffffff","#ffffff","#f7f7f5","#9fa192","#777967","#636355","#626150","#616145","#696b46","#74794e","#858b5f","#959468","#a4a583","#b0b0a1","#f6f6f5","#ffffff","#ffffff","#d9d9d5","#787a70","#6d6e65","#67685d","#6d7054","#75733d","#646e50","#9f9072","#d5c0aa","#7a7d7d","#929687","#d2d6c8","#ffffff","#ffffff","#ffffff","#b3b4b1","#696b66","#63645f","#61665b","#646c5c","#61683f","#727b4b","#939966","#b2b27a","#b5aa7a","#c9c295","#f0efe6","#ffffff","#ffffff","#faf8f6","#9c9087","#5f4b40","#513f3c","#504143","#4d3b37","#44362c","#4e403e","#6e6568","#8c888b","#696c79","#abaca7","#f5f5f5","#ffffff","#ffffff","#f2ebe4","#8e7b82","#635f64","#c0a891","#665965","#3d3d2f","#604a47","#f4f4f4","#cfb3aa","#b8a69e","#bcb9ae","#b2b3a6","#b8b5a0","#e4e2dc","#f8f8f7","#bbbeb3","#cdd0c5","#d8d9d6","#d5d6d9","#d5d6d1","#d4d4ce","#dcdad0","#d1cfc2","#cac6b8","#bcb8a6","#bfba9f","#afa887","#b0ad8a","#fbfbf8","#e6e4da","#a09a6d","#a59f71","#a9a375","#a9a375","#9c9c6e","#a5a577","#a19d71","#a19c71","#8b845a","#888358","#acab81","#96966e","#bdbfa4","#ffffff","#c5c5af","#adac85","#979771","#979a78","#949981","#888f83","#848c7e","#899283","#8a9489","#97a09f","#808a84","#8b9387","#7c826f","#dee1d9","#f6f7f5","#858879","#727364","#696a60","#686863","#6d6b65","#786c67","#6f6459","#857a67","#897f67","#82755f","#7a7763","#7a8071","#8a8e83","#f6f5f5","#eae7e3","#6a665d","#67685d","#676863","#777872","#7d8166","#9a9361","#7d876e","#98917b","#dcc8b0","#828282","#82887b","#939c82","#b9bdac","#ffffff","#a1a3a1","#696c69","#696b66","#666a63","#767d73","#798177","#78816e","#808b73","#7d8965","#838c60","#bec196","#716e52","#564e45","#dfdddc","#f4f3f3","#6a6056","#c8baaf","#565255","#5b5352","#5f4e4e","#5d4f4b","#5c4b48","#5c4b48","#5f524e","#594e4b","#656368","#68665a","#929095","#ffffff","#c6c6c2","#d2bda9","#89757c","#5d5960","#c9b09a","#74646d","#59584e","#7b6663","#f4f4f4","#c3a6aa","#8c7e6f","#797c6b","#888c7a","#888e7b","#848a73","#a5ab98","#8b977c","#9da284","#908e73","#b5bbad","#d4d6c2","#a3a188","#9c9574","#a79b72","#b9b085","#b9b289","#c5c19b","#bab797","#b5b18a","#b1ae91","#b4b091","#a49d7d","#989470","#a6a378","#98966d","#a69e7a","#a39b77","#959168","#8d8a5e","#b0a788","#9b9675","#8d8b66","#a7a880","#9aa07a","#b0b095","#93906d","#969c72","#969d7f","#939a8d","#8e978e","#979a8c","#8b9385","#8b958a","#8e9493","#919890","#8b8f84","#9fa298","#8e968e","#949c9c","#8c9289","#777f78","#676f57","#61625b","#646c66","#65654a","#955d47","#c0745b","#c87054","#b36c4c","#bc6a63","#a06d5c","#716854","#81897e","#90988e","#b3a9a4","#b7afa2","#697165","#7a7b75","#716d62","#888f6b","#a09772","#888d65","#a09691","#d9c4a8","#8b8984","#8f917e","#939b75","#919472","#979a91","#6b6b71","#626266","#616261","#6f7373","#626869","#777a75","#727d78","#6d6f66","#7f8781","#717c6f","#7a867a","#726b66","#554e49","#585350","#685f5e","#514b4a","#c3bbb4","#747582","#768389","#ccb199","#575356","#554e47","#584d48","#62524f","#60514f","#574c40","#605867","#847d6c","#d0c1af","#65665f","#d9c6b7","#8a7677","#737179","#bfab9b","#736877","#59594c","#7e6f6b","#f4f4f4","#ccaeaf","#8f8173","#a5a9a1","#999e9e","#a6abab","#8b9388","#68705f","#858a73","#8b8970","#8c8771","#9f9e91","#7b7d73","#818273","#81816b","#a7a687","#b1a77d","#afa57b","#a69c72","#a69a71","#a8a77d","#8b885c","#a19f76","#a6a281","#999772","#a7a77d","#a0a178","#949673","#9c9c78","#9d9c75","#a5a279","#848160","#a09f7c","#92956f","#999f78","#898d6a","#818461","#90937b","#95997e","#9c9f8b","#9aa093","#969e94","#9ea68f","#919a86","#96a193","#98a096","#c6c4bf","#bbb7af","#b7b3ab","#b1b1ad","#89918c","#52584d","#69706a","#797a7d","#786d6d","#917266","#c57465","#c97656","#d57a5a","#e17d5f","#d26b54","#c56d55","#c16350","#b06155","#916e63","#56524f","#5d5d5a","#ccc5bc","#8a847f","#71726b","#6e7460","#8a9069","#a7a177","#9da378","#a09691","#d0bb9f","#8a8c8b","#767c6f","#7f896f","#8c917b","#4b504c","#606266","#686a68","#5e5f56","#727671","#646a69","#707271","#7c8481","#777e7b","#828a87","#6d766d","#84938c","#686462","#514442","#70504e","#684845","#574c49","#bcb5ae","#8a878f","#838e93","#ebd1b9","#686468","#5f524e","#5f4e4b","#5f4c4b","#5c4d4a","#5f5145","#544a53","#857a6a","#8d7d74","#5c5d59","#dcc8b9","#83716c","#656268","#d0bca7","#695f6b","#585949","#80716d","#f4f4f4","#cfb1b0","#7f7167","#d5d9dd","#b9becf","#c4c7d5","#94999f","#53595a","#7b8384","#797f7e","#6f7371","#888f90","#7e807f","#808380","#7b8179","#7c8477","#808373","#8f917e","#95957c","#9c9a7a","#91926d","#8e9063","#84865b","#909172","#919370","#979974","#848765","#838d6d","#939a79","#979a78","#979673","#8e906d","#939674","#92997b","#8d967b","#94977e","#7c836c","#8e9689","#9c9a91","#c1c1b7","#a2a59a","#a5ab9e","#a4aca0","#98a19a","#98a1a2","#959999","#9ba39a","#b2b7ac","#b2b7ac","#a9b1ab","#acb0a9","#919489","#8b8f8a","#8c9d93","#b18e7e","#c87857","#c87349","#de7655","#d17758","#c37c5f","#b4715b","#bc7665","#ac7565","#9f7c70","#856965","#5d5353","#59605d","#797470","#c4b0b0","#7d7a72","#7b876d","#989a76","#958f6a","#99a079","#8f8782","#dcc9ad","#929799","#79817e","#79847b","#757d77","#42494e","#848787","#6d6e68","#65655c","#60615d","#828688","#76777a","#878987","#6f7982","#7d8084","#848581","#778688","#6f6c71","#534142","#a06361","#915b56","#5a4b48","#4b4542","#574b4c","#818a8c","#ecd5bf","#7a7a7e","#574848","#5e4c4d","#614e4d","#645651","#5c4a40","#5a4b49","#5b4e43","#75696e","#4b4a4c","#d1b9ab","#7c6b62","#656466","#d9c5af","#7e747d","#5d5f4c","#755a4e","#f4f4f4","#c5b0b2","#837b71","#d2d7d7","#bbbcc5","#c7c8cb","#9b9e9b","#76777a","#7e8389","#7f848a","#8d9195","#7d8284","#969795","#9a9c99","#999997","#8f908c","#96999c","#ccd0d0","#91978f","#8e9687","#8f917d","#6f7355","#85896b","#8b8f77","#81846a","#8b9276","#828972","#898d75","#85876e","#919478","#9d9f80","#a5a78c","#92947c","#898c7b","#969b90","#949789","#888b7d","#93948b","#bcb7b1","#d4d2c7","#b1b3a3","#acafa2","#a4a89c","#abafac","#9fa1a4","#9b9996","#a8ada5","#9ea196","#a6a99f","#acb2ab","#bcbab1","#b5b5aa","#afb0ac","#f0bca2","#c47c66","#bd745c","#b87a5c","#b68974","#a77e6f","#a0817c","#a99690","#917c7a","#847f7d","#757e7a","#7c7e77","#625d57","#787471","#88847f","#a99c96","#d3cac1","#777664","#8f917b","#a39b88","#9fa58c","#90898c","#dccaae","#9da0a2","#82888a","#777e81","#747a81","#84898f","#807e80","#c4bdbc","#6c696c","#56555b","#61626b","#6c6a71","#b4aba5","#6a7484","#6e676b","#988c87","#787c81","#726b71","#524546","#975558","#875454","#534846","#534949","#5d4b45","#818786","#dec8b3","#828288","#4f4c4a","#554c4b","#5f504d","#60504b","#62524e","#60544b","#5a4d4a","#615b5e","#575655","#d5baad","#7e6d65","#6d6b70","#d5c1ae","#746a76","#606151","#715e5c","#f4f4f4","#a8b0b8","#b9b9b9","#d9d3cb","#d7d9d2","#dadfd7","#d4d7cf","#d0d4cb","#ddd7cc","#dbd9cd","#dad9d0","#d7cfc8","#d9d7d0","#dbd9d3","#dddbd7","#dfdcd9","#dce1d2","#d7dacd","#cacdc0","#c7cab6","#b7b9a3","#91937e","#76786b","#8a887e","#878a83","#8b928f","#959b97","#abaa8d","#aeb195","#a5a890","#8a8878","#afaf9d","#a8a69b","#a4a29d","#b8b7b0","#c4bfb3","#d0c8c2","#d6d0c8","#d9d0c5","#d4cdbb","#d8d3be","#dfdacd","#e2d6d7","#dfd7d7","#d4d2cb","#dbdbc7","#e0dccc","#dfdbcb","#dbd8c8","#e0dccc","#dcd7cb","#d7d2c5","#f7e5cd","#ab9772","#e0dcc4","#98929d","#b0aaac","#dbd9c9","#bab1ad","#a7959b","#b29e9f","#deded6","#cccac3","#7e7873","#dfdcd6","#c2c0b4","#dddacf","#e2dfd6","#dedcdf","#c3b9af","#cec2b4","#6e7174","#878a84","#8d9392","#bfb3aa","#e5d5c8","#979aa0","#7d818c","#797d8d","#c1c5cd","#c8cfcf","#d3d9d8","#90898d","#91879b","#73778a","#86879d","#767484","#c5bfca","#70747f","#747784","#cba9b9","#63688b","#9292ae","#7d7883","#815652","#684e44","#544541","#544547","#574647","#736a61","#dfd0c5","#8a8483","#727471","#757c79","#8d8287","#655554","#60504b","#5b4d48","#504440","#3f3f38","#59564d","#e8d2bd","#7f6f66","#706d70","#d9beb4","#6e5e5f","#656565","#796069","#f4f4f4","#b1b6c1","#b6b7ba","#c8c4bd","#d2d2ca","#dcd9d0","#dbd5cc","#d8d1c8","#d7d6c5","#d9d9c8","#d7d9c8","#d8d4c5","#d9d9c8","#dad9cb","#d9d9cb","#d6d5c8","#ded9d2","#d3cdc8","#dcd6cf","#cfc7ba","#b1b4a2","#7b7e6d","#797e72","#7c7e75","#757b74","#838d89","#828a84","#bab6b1","#a7a79e","#93998a","#858a75","#7e7f75","#acaca6","#bfbeba","#c8c8bf","#d4d4c0","#cfcdba","#d9d7c5","#d8d4bd","#d7d3bb","#dcdac2","#d9d9c8","#d8d7c2","#aaa289","#bdae9a","#d0c7c1","#dcdad1","#e2e1d8","#dedcd3","#e1dfd6","#dcd7ce","#d9d9d2","#e4dbcf","#e5d5c9","#dfdfd1","#b5b2af","#a19c9a","#dfdcd1","#bdb6b6","#beb2c0","#b5acb5","#dcdcd9","#d1cecc","#817c7a","#d9d7d5","#dadcd9","#dcdedc","#e3e5e2","#d7dcd9","#b3aeac","#d2c4c1","#aba59d","#6c6c66","#717474","#d2c6ba","#dfcdc2","#989aa0","#a2a3ad","#a1a2b0","#9b9ba3","#b6b3be","#bdbecb","#c4beca","#d9c9d0","#98959a","#a29ba1","#897e83","#c7c5bc","#ae969d","#b5bac1","#ebdce8","#888d9a","#aa9fb1","#8f818d","#543e41","#392d2b","#554b49","#544847","#534244","#554c42","#dacbbf","#8d8786","#6c6e6e","#656b68","#baaeae","#736462","#5d4e4a","#5a4e49","#5a4f4c","#4e4b47","#726d67","#e3cebb","#786960","#666567","#cbb1a6","#877778","#5f5d5e","#896b74","#f4f4f4","#b3b1ba","#b5b5b8","#b4b3b0","#b8b7b3","#b4b6ba","#b1b5b9","#a7adb1","#b4b6b9","#dadcd9","#d1d2cc","#cfcecb","#a8aca9","#a5a9a6","#a8abab","#a2a5a5","#afb5b3","#b6bcbb","#b4b8b7","#afb3ab","#b9bdb4","#91978c","#878f86","#858d86","#7d8783","#7e8987","#959e97","#b9b7aa","#aaada2","#a3a8a6","#8b8f95","#7a7a7d","#c1c3c2","#bbbdb9","#c4c6bf","#b9bab6","#c1c2bd","#c3c4bf","#c1bfb5","#bdbbb4","#a5a5a2","#7e7e80","#9fa19c","#c8bea9","#cfba9b","#b0a391","#9b9c9d","#9c9c9e","#9e9fa0","#b5b6b7","#cac6be","#c7cac9","#c2c7c7","#c7c1ca","#c2c6c9","#c5c2b0","#9c968b","#cecbc8","#aea8ad","#b3aebc","#9b9caf","#c4c5c8","#cbcace","#7a767b","#c8c7cb","#c5c9ce","#cbced3","#d7dbdf","#d3ddd6","#d9dbe0","#dcd3dd","#d0c4b9","#bfb7b3","#787572","#daccbd","#d6c6bc","#dbd9de","#dad6db","#ddd7db","#c3bcbf","#b6a9a6","#e8e5e8","#dedace","#dfcbbf","#ded4c4","#c3b1a3","#e3d2c2","#e0dbba","#c08d8a","#e5e5e1","#e4dfe1","#dddfcb","#baa2a2","#a08896","#5a5765","#4d4e55","#575156","#544745","#554546","#5c544a","#e2d3c8","#8d8786","#65666f","#7b7e7b","#c8bbb6","#8e8181","#5a4f4c","#574c49","#5a4e4a","#524c49","#86817f","#d9c5b5","#7d716b","#656567","#c7afa3","#8b797b","#6e6b6c","#856669","#f4f4f4","#c3b1b5","#9c9596","#b7bbbd","#b2b4b8","#babfc7","#bcc2c7","#dadfe0","#9ba2b3","#d6dae2","#babcbb","#d9dde0","#8f9aa1","#8e98a1","#9ea8b3","#9aa4b0","#97a0a4","#b2bbc0","#b2bac0","#c1c8c7","#bcc2c1","#d7dbda","#aeb4b3","#828886","#868e8e","#9ea5a6","#bcc0bb","#ced0c2","#c6cabe","#b3b4b2","#9a959e","#888d8f","#c9cfce","#c6ccc8","#bec3c4","#c1c6ca","#eef0f0","#b4b9bb","#b8bdbb","#c4c7c9","#989398","#9f9499","#9e9599","#c9c4be","#b9b7a9","#c0bbaf","#c4c4c4","#c4c4c4","#999999","#c1c1c1","#dfddda","#e9e9e9","#b8bdc0","#cdcfcb","#c5c7d5","#ddd4c7","#ac9e8d","#cac3c6","#9b9297","#a99fa7","#96909b","#d2d5d7","#d0d0d3","#747176","#cfd0d3","#e8e9ea","#dee0e3","#d7dadc","#d0d3d5","#d3d8da","#999ca0","#a4a0a5","#cabab9","#cec5c0","#e2d2c0","#cdbfb4","#e7dfde","#dfd6d0","#efe4d7","#cec0b6","#f0ebe8","#e8e1d9","#d2caa4","#d9c8b5","#ded4b9","#dbc9ad","#dfcfb5","#e6d2b4","#a57f70","#ead6cb","#9c7a74","#d5d6b8","#d5beb4","#b8a0aa","#cec7d4","#cac9d0","#877a8c","#c0adb3","#564547","#5f574d","#e4d5ca","#625c5b","#666775","#7d7f7b","#decfc4","#948a8a","#5e5553","#5d5251","#584d48","#c4bfbe","#b0acac","#dac8bb","#736965","#606363","#d2bbaf","#a89699","#5c5759","#8c7270","#f4f4f4","#c9ae9c","#8f8593","#bfc0b2","#b3b0c9","#c9c2c2","#f6f6f6","#ffffff","#c2c9cd","#d7dee2","#cdcdca","#dddfdb","#dddedf","#989ea3","#84929c","#9ba9b6","#96a1a4","#c5ced3","#a6adb1","#c1c7cb","#dadcdd","#ffffff","#f8f8f7","#a9ada9","#b4b8b1","#c4c6c1","#c4c4c6","#cac7c4","#c5cace","#c8cdd2","#bbafa4","#958e8d","#cacbc9","#afb6b7","#b7bbba","#e6e6e8","#ffffff","#ebedeb","#b4b5b1","#b9bfbd","#999f9b","#979089","#9b938d","#c1b9ad","#a7a091","#c9bfb5","#c3c3c9","#cfcac0","#b6a9a2","#e4dbd7","#fbfaf9","#ffffff","#d5d5d6","#d3c4c1","#c8d2d4","#dad0d1","#b9a077","#ced3cd","#cac4c1","#c8b7b7","#b0a2a8","#cfc7be","#d8cbd2","#72696d","#eaeaef","#ffffff","#fcfcfd","#c7cbcf","#c1c1dd","#cdd2de","#ced6e4","#9da2a9","#9e9891","#c1b5ae","#decdc4","#d3c5b9","#dfd4af","#d6c29b","#d6cda7","#f3e7e6","#ffffff","#f4f1ee","#c8bd98","#c9bdba","#e2d2be","#dfceaa","#e7d6ba","#e5d5b6","#c69e89","#e3c8c0","#a18d82","#d9d0b3","#dad0b8","#bfb0b5","#fcfafc","#ffffff","#d0c9cd","#d3c4c7","#58534c","#888195","#a69a8b","#87838e","#606873","#9c978f","#ead9c7","#8f8587","#6a6770","#5e5951","#ada6a4","#ffffff","#f2f2f2","#dec6aa","#6c6c75","#635d6a","#beaba5","#b89a96","#665657","#927574","#f4f4f4","#c39f93","#77736d","#bbbfba","#d4d4de","#ffffff","#ffffff","#ffffff","#ffffff","#eff1f1","#c7cac5","#c2c6be","#cfcfca","#9ca09f","#8c979a","#889195","#9fa8ae","#b8c1c6","#b8bfc4","#ebedee","#ffffff","#ffffff","#ffffff","#ffffff","#e8e9e7","#c9cbc5","#bbbbbc","#b5b3b0","#b1b5bc","#bec3c7","#ab9885","#85827c","#c2c2be","#dbdddd","#f8f7f6","#ffffff","#ffffff","#ffffff","#fbfbfb","#dfe2e4","#cbc5bc","#ad8261","#ba926b","#b58665","#af8b79","#b6b0a4","#bfbec3","#aea695","#d2cac3","#ffffff","#ffffff","#ffffff","#ffffff","#f6f2f2","#d1d5d4","#ccbfc5","#b69566","#c8ced1","#bebfc7","#8b8994","#7f7e8b","#c8c2cb","#b4aeb4","#dedcdd","#ffffff","#ffffff","#ffffff","#ffffff","#ece9e0","#ddcdae","#ac8a74","#c4b28d","#c0b484","#bdae8c","#d6c3b8","#c9b7b5","#c7c5a1","#e0d6bd","#fdfcfa","#ffffff","#ffffff","#ffffff","#faf8f4","#e2ddcc","#c5bc9c","#b2a882","#a59c7b","#b4a185","#90654f","#c5b3ae","#d0d0ca","#d8cfaf","#f1ece0","#ffffff","#ffffff","#ffffff","#ffffff","#ece9ed","#8a827a","#776e81","#cfbda3","#6c5e6a","#4e505c","#aaa299","#dccab4","#746a65","#89878e","#e8e6e5","#ffffff","#ffffff","#ffffff","#fdfbf9","#b4b4b8","#5f5d66","#a69489","#c2a098","#432e2d","#664244","#f4f4f4","#b494a0","#7d7f6d","#b7b9bc","#d4caa9","#f5f4f7","#ffffff","#ffffff","#ffffff","#c9c9cb","#c0c5c7","#cecfcd","#a2a8a2","#8c9493","#8d999c","#a0aaab","#9da3a9","#c1c6cc","#a9b1b6","#ccd1d3","#fafafb","#ffffff","#ffffff","#f8f9fa","#d5d8d9","#c6c9c6","#cecece","#c6c5c4","#b4b8be","#cccecf","#b9a38e","#958e8b","#ceccc8","#cdcbc6","#e7e4e1","#ffffff","#ffffff","#ffffff","#eaeaec","#c0c3c7","#d9d0c8","#c0916c","#c17d5b","#a67659","#c8b6a8","#c7c7c2","#c3c5d6","#a8a498","#c2b7a8","#f5f3f1","#ffffff","#ffffff","#fbfbfc","#e9e9ec","#e2d9d1","#a899a6","#cdab7f","#bf9e95","#977775","#7d6162","#816867","#866b74","#c4b09f","#c8c1c1","#ffffff","#ffffff","#ffffff","#f9f5ea","#efd8c1","#ac8e6f","#bc9b8c","#d9c6a6","#d1c084","#b5a57c","#ddcfc1","#cbbab8","#bcb997","#e0ceb1","#f4f0e8","#ffffff","#ffffff","#ffffff","#f4efe3","#e7d8a3","#c9bd89","#beb482","#d0c591","#d0be9a","#ad8565","#dccabe","#d9d7d6","#e4dabb","#dedacb","#f3f3f6","#ffffff","#ffffff","#fdfdfd","#a29c9e","#4a4540","#958995","#ddc59f","#91777a","#826e72","#c9b3a7","#e9d6c1","#7a716c","#7a7e84","#dbd7ce","#ffffff","#ffffff","#ffffff","#f8f3ef","#92959a","#6c7276","#8b7f72","#cdaea4","#594643","#7f5956","#f4f4f4","#c1b4a8","#918985","#c5c4b9","#c2beb8","#8e8d92","#e4e3e4","#ffffff","#bdbcbf","#b3b7b9","#b9c1bd","#c7c8c6","#adb6b7","#a2adab","#a7b1ac","#bdc4bd","#b5bec1","#c7cfd3","#b0b9bc","#a6b2b4","#bdc2c6","#fafbfb","#f5f5f2","#b3b297","#acaba7","#a1a09f","#b7b6b1","#b5b2a5","#a8aca7","#ababa9","#baa697","#ad9a9d","#aaa8a6","#b0afaa","#c4a39f","#d3d2d5","#ffffff","#dee1e0","#bfc4c4","#c4cac9","#bac4c9","#c4b5aa","#cb9a7b","#a58373","#d6d7d3","#c6cfd0","#bac7d7","#c6c1bd","#a48d83","#a3b296","#ecebeb","#ffffff","#d5d2cf","#e0ceb4","#c9b4a6","#b6a59a","#d9bda1","#c17a5a","#c57158","#d57c59","#c07a5b","#d17660","#b48a6e","#c9b39e","#afa194","#ffffff","#f9f3e8","#bd9c71","#b18b77","#c4a089","#e1c7a7","#d5c79f","#d0cd88","#cdbd8c","#ece0c9","#ded0ce","#cac1aa","#e7dfbd","#dbbf9e","#eadbd6","#ffffff","#c6b6af","#ded3b8","#d6d6a8","#b0ad94","#e6dbd8","#d9cdbe","#e1d9a8","#d7ccb1","#ded3b8","#dacfb0","#dacea6","#bbb4b8","#b28f9d","#f3f0f3","#f6f6f7","#726360","#5c4b49","#5a494a","#8f7e75","#ceb4a3","#c29b8e","#bb9c96","#bfa19c","#d0bbb7","#998d8e","#7d7c80","#c1bcaf","#eadacd","#ffffff","#edebe8","#cfbdaf","#857979","#726866","#7e7371","#d7bcaf","#88716b","#aa8d90","#f4f4f4","#c4b6ae","#a49d97","#c5c5b9","#b9b6aa","#bbbdc1","#b6b9bb","#c5c5c2","#b7bbbd","#aaaeab","#d5d7ca","#d8d2bd","#c7c8bd","#cbd0c4","#b6bdb4","#b8beb6","#c1c8c7","#c2cbcc","#aab3b7","#a7b1b9","#9fb3c6","#c3cacf","#d0d5d2","#c6d3d0","#d4d1cf","#bda78f","#ba9f7e","#aaa39c","#a3a3a3","#cfd0d1","#b9a89a","#a89594","#cfd0cd","#caceca","#bea39e","#918989","#e6e3e0","#bebfc2","#b9c0cd","#b6bdc8","#b4c1ce","#c6beb8","#d49e7d","#be9682","#e4dfd9","#dee2df","#dee6e1","#d5cfb7","#b7907d","#a49f80","#cda494","#e5ddce","#d1be9a","#dbcd94","#d6c494","#d3c69c","#d1b886","#cf7857","#c97056","#ca6c4a","#c27555","#ab6c5a","#9d7f6a","#cabead","#7e7568","#cecdc0","#b5b398","#aaa588","#b1a58c","#a99c85","#aca28e","#c6c3af","#cccfb9","#b7aea0","#ddd7cb","#d9d4c4","#c7bab4","#b2a695","#e9ccba","#d4b2b4","#d5c8ca","#ae9c9a","#a7a597","#ada67a","#d1c7af","#d4c8c3","#b7b4a6","#abac8d","#aba999","#afae9a","#babaa1","#b8ab9c","#9e98a7","#a28a9c","#aca3b0","#857e83","#62504a","#5f4e4e","#5b4a4e","#665552","#d5beb1","#ba978a","#c09396","#b18b8f","#c6b3b7","#7d807f","#787a77","#cbc7b4","#c4b1a5","#a49d9d","#b0a49c","#decdbe","#7d7470","#6b6562","#77706d","#e3ccbe","#8d7b73","#876c74","#f4f4f4","#c6b3b5","#8d8879","#bcbfb5","#b7b4a6","#bcc1c5","#adb4b0","#98a099","#a6afaf","#abb0a8","#cfc9b2","#dacba7","#cac0ae","#dbd7c6","#cbcec1","#bcc1b9","#bbc2bd","#c5cdcd","#b3bbc1","#b6becb","#a4b0bd","#cfcbc8","#cacdcd","#c6d0d6","#cdc7c8","#c1ae99","#b2a591","#a39b9a","#9c9ca0","#d3d4d8","#baa89b","#b4a09c","#ced2cf","#bcc5c5","#ab9692","#8a8a8d","#babdc1","#b8bec7","#b4b8c6","#acb1b6","#c3cdd3","#e1dcd5","#d49f7f","#c79a86","#e4d6c9","#dfdcc8","#c4c1aa","#cec69d","#ce957a","#d7bf9d","#d7987a","#ccc088","#dfcd95","#ddce8c","#d9c88a","#d1c58a","#dbc08b","#ce7964","#a35d4c","#af5e4a","#b06c57","#bb947f","#8e7158","#d4c5a4","#d3c7a4","#a48f7e","#cfc0a7","#d2c79c","#d1cc99","#d8d1a5","#d7cdae","#d5cdb8","#dcd6c2","#857367","#e6d7cd","#e6d6c8","#d6c7c1","#dccfbb","#e4c8b0","#ceafa8","#e6c5c0","#b8a69c","#ebe5cb","#dfcea7","#ceb89e","#ceb7ab","#dad6c7","#e0dabd","#e0d9c2","#dad5b3","#ece6c9","#b3a5b7","#9e99b2","#958da1","#8b868d","#53403d","#5c4740","#5a4b4a","#5e4b50","#5b4b4b","#6d5a54","#b99f94","#9e8b89","#a08d90","#bba9b3","#766d72","#6e6c68","#b5ab99","#d2cdd0","#8d7f8c","#a4928f","#e0d1c6","#8b867d","#615f5a","#66625e","#d4c1b1","#887a71","#86717e","#f4f4f4","#d0babf","#9b9782","#bbbfbd","#b7b0af","#c4c7cc","#b3b8b1","#9da79b","#94a09f","#9fa39e","#e3d9ce","#cebea9","#b1a8a0","#d1cfc6","#c2c6c1","#c4c7c7","#bfc4c8","#bcc2c6","#b8bec6","#b2b9c4","#bbb8b6","#64666c","#7e8289","#cecfca","#c7cace","#d0d4d1","#9f9f9f","#bcbcb6","#d4d9da","#cacaca","#bfaa97","#b59a94","#cdcdcc","#bbc6ca","#dec6c6","#aeaeaa","#c0bcac","#cac1a9","#c5bba5","#d7cbb0","#d6d3bd","#e2d3b8","#cea68c","#c49d8a","#d1c1a9","#cdc39b","#cebdb1","#bcb38e","#ce947c","#e1d2ad","#ba9674","#d5c98c","#d8ca95","#dac892","#d8c58a","#d5c88b","#e1c593","#c87863","#9e6c58","#b06656","#a96352","#9a8980","#977767","#e1cea3","#dccd96","#c7aa7c","#d7bb9a","#e2ce95","#dac98d","#d9c68d","#dcca97","#e0d3a3","#e4d4b9","#cbb1a0","#e2d0c6","#e8d9cf","#d9c6c0","#d5c6af","#e0c4a7","#ceb2a2","#d3b09c","#d4c2a8","#e1d6b0","#e2d0ae","#d0ac92","#d7a893","#c5aa92","#e0d3ae","#ded1ad","#e4d8ac","#e9dabf","#ac9cb8","#a99fb2","#a6a3b1","#413335","#3f2a27","#5f4e4b","#5d4d4c","#5c4b46","#5c4b4b","#564647","#c1aeac","#c6c0b7","#918486","#93848d","#847878","#726569","#d9c5b8","#aaafc9","#8f8499","#a4989d","#b0a7a2","#7e7b77","#66615d","#716b68","#d9c5b5","#87766e","#8d7c89","#f4f4f4","#bdadb0","#888575","#c2c7bd","#c4c7c9","#c3c9cd","#9fa7a3","#848f89","#b0bcbf","#acb2b0","#cbc7bf","#b1a5a4","#797875","#ced8dc","#c9cdc8","#c8c6bf","#c9cfd3","#c2c9cd","#b5bdc4","#b8c1cb","#b0bac4","#868f9b","#a8b6b9","#cad0d0","#c0c7c9","#c8d1c4","#919094","#b7b0b1","#c6cbcd","#c4c7cf","#c7ab9b","#b3aba2","#c7c5c1","#c7c7be","#dccdb0","#c5a876","#ba9a50","#bea666","#d1c27f","#ceb888","#cdb585","#ccbc88","#a88f66","#988875","#d9c899","#dcc995","#c4aab1","#9f8c6c","#caad80","#dec7a6","#ad9f89","#c3b981","#afa77a","#cabf8e","#d7c78f","#d6ca88","#dfbb84","#b98366","#d9a582","#cf7b60","#bf6f5f","#9a8082","#a28a8d","#d9c9ae","#cec797","#9d846a","#7f685c","#d4c7a1","#d4c9a7","#d5cfa5","#d6d1a5","#d8cbb0","#968684","#8b7277","#ac9fa1","#e2d9d3","#d1cad0","#cdbdb2","#d5bca5","#b8a79d","#c5b2a6","#dacfb5","#dbd3a9","#ddd2a8","#d9b98f","#cf9e8a","#e5d1c4","#c1b995","#ded6cc","#d7d6b0","#e1dcba","#98929e","#9e969c","#695f5c","#3b2929","#352221","#6b5c5b","#5a4b4b","#5e5151","#5d4d4c","#5f5050","#7f7579","#c6cac3","#ab9faf","#c5bac2","#85706e","#b68b90","#bd837d","#a59695","#928c99","#938b93","#dbd3d2","#80797c","#6f6571","#656560","#d2bdb1","#978580","#938a95","#f4f4f4","#c2b2b4","#9c9a8a","#c5cac0","#b3b6b8","#bcc1c5","#adb4b1","#949f99","#a9b2b4","#b8c0c1","#ccd0cd","#ccc4c0","#dbc8ba","#d6d5d3","#c8ccc9","#c8ccc9","#c5cad0","#bec4cb","#b5bcc9","#b5bccb","#b4b7bf","#b6b6ac","#c3c5c2","#c4caca","#bfc5ce","#d0d0d0","#9b928d","#c2c8d0","#bfc7c0","#cbcac1","#bdafa0","#bfad9c","#c9b599","#c9b38b","#c4af7c","#c2b078","#b8a257","#c6b474","#cdbe83","#d2c18d","#d3c186","#cfc089","#c3a376","#9a8772","#decd9f","#dac999","#cbbeac","#d5cbaa","#b39c74","#c3ac87","#cbb88a","#cab587","#e5d4ac","#d7c994","#d1bf85","#d9c889","#e6c190","#c4856c","#c18061","#c87055","#bc6853","#8d664e","#d2bbac","#e8e5d1","#e3ddce","#8d7c6e","#826c62","#d9cba4","#d4c792","#d8cd97","#e0d6a5","#e1cfb3","#99857b","#836765","#948483","#e1d8d2","#dccbca","#c8b4a1","#cab28f","#bca984","#bba47e","#b1a483","#cbc09b","#dfcbbc","#e3bda4","#dbab95","#e4d1b0","#e5d69d","#e0d2aa","#dad3a4","#d7cabe","#918a98","#9d939a","#5f5353","#3e2b2c","#372322","#6c5d5c","#5e4f4f","#5d4f50","#604f4e","#5a4b4b","#cec5ca","#c1c9be","#aba4ad","#c5bbbc","#d6c0b5","#b38780","#c07e74","#a7848b","#a58f9b","#ab9598","#dccbbe","#d4c4a9","#cdc0a6","#c6c49b","#c3b68b","#c7b798","#928699","#f4f4f4","#c3b3b6","#979484","#aeb3a9","#a4a7a9","#b0b4b4","#b9beb8","#9da59f","#c3c7c9","#bdc6cb","#c8cdd0","#ecd7cb","#b88469","#c7b4ab","#c7cfcd","#c3cdcd","#c2c8d1","#c1c7d2","#bec5d2","#b5bcce","#aeb8cb","#adb2b1","#b8bec5","#b4c3c7","#bfc8db","#ccced5","#a69b93","#bdbabf","#c2b798","#c1ad81","#c9baa0","#c0b2a6","#cfba99","#d2bb83","#cbbc87","#c7b985","#c1a768","#d2bb87","#d3bd90","#d5c298","#d1c68a","#ccbd88","#d4ad7e","#9c846d","#d5c496","#d7caa0","#868380","#6f6e6b","#e0d2ac","#d0bf7f","#cfba7d","#93775f","#dcc6a3","#e0cf95","#d0b97e","#d9c58a","#e2c196","#cd8871","#cb7a63","#d0795f","#bc6b51","#995f4f","#9d7f79","#e0e4d7","#e3e5dc","#b0a9a7","#8b7772","#dfd0b0","#dfd3a7","#e0d2aa","#dac8ad","#9a8779","#927b75","#8e6f71","#837277","#d8cfd3","#d8caca","#bcb1a3","#c3be9d","#b8b68c","#bbb68a","#c4c8ac","#dcd8c5","#e1c2a8","#d6aa89","#d8a793","#e4cebb","#d4cbb4","#d5d0b5","#d0d0ad","#aca5a0","#a29096","#85757b","#5a4d4e","#463334","#443232","#685958","#645554","#5c4e50","#5d4d4e","#574748","#c5bbc2","#bfc8bf","#b3aeb6","#cfc7be","#e2d0b5","#cca19d","#b77f7a","#ad8373","#c3aea5","#beacb1","#9d918c","#d8cda5","#d2c291","#c5ba85","#c9c18a","#dcc7a0","#8b8ba1","#f4f4f4","#c6b6b9","#8d8a7a","#b3b8ae","#afb2b4","#b7bbb7","#babeb6","#b0b7b4","#c2c7ca","#bcc7d2","#bebabf","#b9836a","#c57a57","#9a7f73","#c7d0d1","#c6cecd","#c5cacf","#c2c8cf","#c0c8d2","#b7bfcc","#b6c3cf","#aeb5c4","#b5babe","#c4c1af","#c5c0af","#b9ae8f","#bba38d","#a99393","#d3be99","#c0ac7d","#d3c3ad","#c2b6ad","#bbb19d","#c8bd98","#c9ba90","#d8b893","#b47e5a","#c59177","#b98c6c","#967566","#d4c4ac","#d5c799","#d7b184","#8f7664","#d9c69b","#d8c79d","#887f88","#7d7c85","#c4bb96","#d1c193","#ac997f","#87706a","#dfcead","#dacb96","#dbc48c","#d7c68a","#dfc899","#be8062","#d47e6a","#c57763","#b7725c","#9f6a5a","#a17b7d","#e5d9d6","#dfe1d6","#a8a7a5","#7f6c6b","#968b80","#a8a590","#9d9484","#9d9082","#a99e90","#a99f88","#ae9b8b","#928779","#d7cfbc","#ebd7c7","#c2b8a6","#909078","#8c8a6f","#83876a","#949c83","#a49b84","#cea481","#e3b089","#ddab99","#b9a299","#94978d","#999c90","#a3a19a","#a0958d","#a48175","#b9a099","#605352","#4d3e3f","#524141","#685958","#605151","#5a4b4f","#5e4d50","#605052","#cdc3ca","#bdc1c1","#b0a7b4","#dbd6ca","#e0d5b1","#d2b5ac","#ad98a3","#bcada5","#d5c8a0","#9c928d","#78717a","#c0b79e","#dccc9f","#cfbd8f","#cec796","#ba9778","#807c8f","#f4f4f4","#bcadb0","#928b8a","#b3b8b0","#b7bbb6","#b8bcba","#c2c5c9","#dfe0e4","#bfc9cc","#c8c9cc","#dabeb9","#b77a5e","#cb7b65","#8e6f63","#c8cdd1","#c7cccd","#c9c9d1","#c0c0cc","#bdbdcf","#b8bdc9","#afc4cd","#dfdae6","#cdbe92","#c6ae85","#c7b481","#c3af7b","#be9b7a","#b08b7d","#958474","#c0bdaa","#c5b9a3","#cabcb1","#bdbcb8","#d4d5cf","#ddbea6","#cc8880","#e8d3c9","#c89780","#b58f64","#c0927a","#a38887","#a69d85","#cba387","#97785d","#cec28c","#a39a77","#8c8190","#867a7a","#968a7e","#948481","#a38e98","#c0bbbd","#c2b9a6","#c4bf72","#ddcb94","#dccb8b","#e8d0a2","#c88775","#be8172","#bf867a","#c38983","#9c806f","#9d7f7a","#dec8b7","#d4c7ac","#d6d1bd","#acaaae","#8d8395","#837a8c","#8e8598","#847883","#a39188","#ebd7b3","#eedbae","#eedda8","#ecddac","#e2d19e","#e2d39f","#dcd19a","#dbd59d","#f2ecd6","#e0cfa4","#af9f77","#baa272","#d9aa95","#dfb8a3","#d6c8a7","#e2dec2","#d8bba6","#a38277","#827475","#a68883","#b9917d","#71605f","#827981","#a39c9c","#625554","#5d5150","#5d4d4a","#574748","#6e6063","#c7c0c6","#aeaea8","#bc9d99","#caa99c","#dfd4b5","#ded5ce","#aaa8b8","#a1a1c4","#d3ced3","#817573","#6d636f","#796968","#dfca99","#cfca96","#dfc8a1","#c08771","#7f7b94","#f4f4f4","#b7aca9","#a19f9d","#adb4b3","#b7bec2","#c1cacb","#f3f4f5","#ffffff","#cac9c0","#bbc0b4","#cabeb0","#b17c64","#cc8162","#9e7f67","#a4a396","#abab9d","#b3b09f","#b1b19b","#acaf9c","#a6aba1","#b8b3b2","#ffffff","#fcfbf8","#d2be8b","#c7b67d","#bfb281","#b59d81","#a28d89","#887f78","#d5d6c9","#c7bdac","#ccbdb3","#c3bdb8","#ede8e0","#b59a82","#e2cdc2","#ffffff","#e7dcda","#a48792","#b99694","#a6928d","#938484","#bd9268","#a88672","#cbbaae","#8f8a90","#7a7d95","#84848b","#8c887e","#8c827b","#eeeeec","#ffffff","#d8cba5","#e1decb","#e7d9ce","#dbd1a6","#ddcb95","#dfd9c7","#ddd9ca","#ddded2","#dddad3","#dbc6ca","#c9b2b0","#d0bd9c","#e8dfc2","#ffffff","#efeff1","#8c8fa0","#908fa5","#83839d","#8687a4","#8c8ba1","#847a77","#a09684","#e2d6ad","#e1d29b","#dcca8c","#dbc990","#e1d1a4","#fef9ee","#ffffff","#f1ebd3","#e0cf9f","#e3d69a","#e8c8a3","#e3c8a4","#d8cda4","#e5d5bf","#937064","#9d827e","#756e74","#84777b","#b79a8c","#bfaa9f","#f4f3f3","#ffffff","#7b7070","#584b4b","#574848","#5a4a49","#786963","#d3c9bd","#dacfbf","#c29a8f","#c49c8b","#e3d5ba","#a69aaa","#a7a5bd","#cfd1e0","#ffffff","#e4e1e1","#726772","#72635b","#e0d2a4","#cec498","#caae8c","#bd947c","#a190a5","#f4f4f4","#b0a89d","#adaeac","#b4bec6","#d4dae3","#fcfcfc","#ffffff","#ffffff","#ffffff","#e2e3db","#b5b6a0","#a6735b","#9a664e","#a7967a","#b4b193","#a29f85","#b0ad95","#9f9f88","#acaf96","#dcdcd6","#ffffff","#ffffff","#ffffff","#fdfbf8","#e1dac3","#bdb69f","#dccfc5","#cac3b5","#c8c1ab","#aca388","#c4b8a4","#b2a992","#aba18d","#ded8c8","#f6f3ec","#ffffff","#ffffff","#ffffff","#e7e4e4","#cbc19f","#beb984","#b3a786","#b68368","#9a7350","#87725d","#aea884","#aba67d","#aca881","#e2ddc1","#fdfbf8","#ffffff","#ffffff","#ffffff","#dfdfe3","#b8b0b6","#aca8aa","#d2c2ae","#d9caba","#d6cdbc","#d7ccbe","#d5c2ba","#d2c0bf","#c4b1af","#efe7df","#ffffff","#ffffff","#ffffff","#f9f7f8","#cfc7c9","#a79a9d","#a29998","#b0a49b","#8f827d","#b1a19f","#958175","#d2be94","#e2cf91","#e3d4a5","#f9f5ea","#ffffff","#ffffff","#ffffff","#faf6ec","#dfdbad","#d5bf97","#bfb284","#a99b77","#d3b79e","#a88986","#817784","#6e6c7a","#666975","#beb7b6","#fbf8f7","#ffffff","#ffffff","#ffffff","#b4aeae","#5d4e4f","#49352e","#cfc0ad","#d0cdac","#d1bea6","#b78673","#b48675","#cbbbb3","#b3a6c2","#e3e2ea","#ffffff","#ffffff","#ffffff","#f6f4f5","#9f958c","#d7cc9d","#c8bc8a","#cab183","#cebc8b","#a2858c","#f4f4f4","#c2b4a7","#b0aaae","#b3b7cc","#d2d5e2","#fafbfc","#ffffff","#ffffff","#ffffff","#eae8e5","#c3c4cc","#9c715c","#896860","#94644f","#ac9983","#b1c1bc","#b0b9c0","#afb9c3","#babfbd","#e3dfd2","#ffffff","#ffffff","#ffffff","#fcfbf8","#dbd6ba","#a9a075","#c4b58c","#a69964","#a59764","#978b61","#c3b99e","#b79878","#d3baa9","#dae5e1","#f2e9e6","#ffffff","#ffffff","#ffffff","#ece6e8","#a39198","#81756f","#baa985","#a96e55","#c8a489","#857e5f","#a69f66","#cfbb71","#cebb7d","#e6dcbf","#fdfcf9","#ffffff","#ffffff","#ffffff","#ece4e1","#ccbeba","#c3b799","#dcca95","#dcccb4","#dbcdc4","#d7cabe","#d0bdb2","#d3bdae","#c6b1b5","#eae2d8","#ffffff","#ffffff","#ffffff","#fffcf9","#d3aca7","#bc8473","#bb8c79","#d9c195","#ccbd7c","#dbc38d","#cebd8d","#d8cb9a","#ded093","#e5d7ac","#faf6ee","#ffffff","#ffffff","#ffffff","#f4efe0","#dacd98","#c8be7e","#d2bf8d","#d1bb91","#c39d90","#897078","#9e98a1","#7b6f7c","#98969a","#c8c6cb","#faf9fa","#ffffff","#ffffff","#ffffff","#b7b1b1","#655453","#4d3d37","#c3bc9d","#bbb998","#bda79f","#836d85","#8a7f9b","#908893","#bab087","#e2dfdc","#ffffff","#ffffff","#ffffff","#f7f5f6","#9d9697","#d4c8ac","#d2c796","#cfc07f","#bdac73","#95757b","#f4f4f4","#c0b6a6","#b5b2ae","#b6bcc2","#bac2c6","#b4baba","#f4f6f5","#ffffff","#d4d9db","#c5c7c6","#c2c8ce","#b18a6a","#b28770","#ca8d74","#af8671","#c5bdbd","#b9c0cc","#b3bcc4","#c9cdc4","#bbb18c","#c4cdab","#ffffff","#f9f7f6","#d2c699","#beb488","#bbb18a","#b7ab81","#b2a372","#afa275","#cbbd9f","#d0c5b1","#b5a081","#e9c6b4","#dacdc7","#9a7c67","#e8e8d6","#ffffff","#cdc7c2","#a88377","#937475","#887474","#d9c8a1","#ceba83","#dcca94","#cebf8b","#e1d09c","#d5cb99","#a7a177","#86876a","#939b86","#f2f1ee","#ffffff","#cdcbb6","#d6cec4","#d4cdcb","#dbd4c1","#d7cbaa","#e1d3be","#e4d7d2","#e0d5cc","#dbcac1","#dfcabb","#c3acb1","#bfac91","#e9deb6","#ffffff","#fcf9f4","#ad7e69","#be827d","#b47a6d","#aa7c71","#e8d2b1","#dcd092","#e5d198","#dacb98","#e1d5a6","#e8d7b3","#d9c5a5","#a28e72","#f0ece3","#ffffff","#f1e9cf","#dac892","#d8c49e","#ede2c1","#a48d7b","#ac8e83","#bfa393","#ae9b9f","#a6a0a5","#9d939a","#7c7a83","#9a97a5","#a6a1ab","#f7f6f6","#ffffff","#756b6a","#5b4f4e","#5b4b48","#5b504b","#e6e0c5","#ded6b8","#cfbdb2","#817281","#857c8c","#a0999c","#dad0c5","#a6a2a5","#c9c9d5","#ffffff","#e7e5e7","#8b7c8b","#8d8195","#90818c","#968881","#dacdaf","#cbbd9b","#ad969d","#f4f4f4","#bcafad","#beb8ba","#b8bfc4","#c3cacc","#c5c6c7","#d3d5d7","#e2e5e9","#b0becc","#b7bfc5","#bfc8cb","#cd9f6e","#cc9f6c","#d79d78","#c48f6f","#9e8b81","#b9c0cc","#b5bac0","#d9d8ca","#b6ae85","#cfc99e","#dcc0b4","#c69785","#d3bf95","#ccbe98","#d0c8a3","#b6ab7d","#bbac7b","#a3946c","#d7c8af","#d1c4b3","#aca289","#c19880","#a8786c","#b6ad95","#8c8f7f","#dad7cb","#ad8a6f","#af7e5c","#a1766d","#8b6f70","#b8a987","#d6d1aa","#cac299","#958f6a","#8b9279","#7d8772","#888f79","#909076","#a8a47e","#d8d3af","#e0d5b9","#e6e0ca","#e4e7d9","#e5e5e8","#e7e5df","#ded5c2","#ddd0bb","#e6d9d3","#e0d4cb","#e3d3c9","#d5c0ad","#c9b0b6","#c2ae95","#dccb91","#e8e0be","#d5bf9e","#aa7161","#c18781","#af756b","#aa7975","#947a66","#e3d79f","#e5d197","#dfd096","#e6d6aa","#c39d84","#99705c","#906758","#9a7968","#f3ecd9","#dcca94","#d9c796","#dcca93","#ded5a0","#c8b289","#e8cea6","#d7c2a9","#b3a2a5","#9e949b","#7d7175","#958f9e","#827e91","#868192","#a39da2","#a19a99","#665a58","#5e5151","#5c4e48","#544845","#b9b19c","#dbceb6","#c8baa9","#b29fa1","#90827d","#c3bcb7","#aca7bc","#9e9dac","#91929e","#cdcbd6","#aea0ac","#a78f92","#a68c9c","#8e7da3","#908099","#877a7b","#988f82","#a08b95","#f4f4f4","#c2afa7","#b8b0a9","#b0b1ad","#c0c2c0","#b9bdc0","#c5cace","#b8bdca","#b3bdc5","#b5babd","#bfc5c8","#cf9b6a","#cca066","#ca9877","#b67c58","#a78e7d","#b4b9c3","#dadce0","#e1dcd0","#beb595","#cbaa87","#c17254","#c47254","#a68a67","#d1c0a1","#ddd6b5","#b5ab7b","#baaf7d","#bfb48f","#d4cab8","#d2caba","#d2cec1","#d2af92","#be836f","#d0d3c3","#cec8c4","#b19e72","#aa7f62","#b27860","#b07f72","#977874","#978d7b","#878774","#949688","#84887b","#899078","#96967c","#c3bea1","#d4c79e","#d1bd82","#c7b572","#bfaf77","#dcd6cb","#e7e9dc","#e8e8eb","#e4dfd6","#dfd3b3","#e0d2bd","#e2d5d0","#e3d8cf","#dfcec4","#cfbaa5","#c8aeb5","#c8b29e","#dcca91","#d6c379","#e9d4a5","#8e654f","#b38274","#a67362","#9d6b67","#a07d6f","#e5d9ac","#e5d099","#e1d095","#e7d3ad","#b08674","#b08377","#b68a80","#916b5d","#c1af7e","#e0d19a","#dfce9c","#e5cead","#e2d6b6","#dfceb1","#e4d4b4","#ddcdb5","#ab99a0","#aea1b1","#9f929a","#8c808e","#92889b","#a49cac","#5c4e50","#4f3e3e","#685958","#695a59","#5c4840","#615153","#5c514a","#60544c","#665b52","#6b5554","#bea79f","#ada3a4","#bdbdc8","#b0aebc","#ada8b8","#8c889a","#9f959c","#a18f8d","#8c7e79","#807477","#887d85","#7c747a","#7f7975","#a48c95","#f4f4f4","#bdaba8","#9d9175","#a69e80","#a8a693","#a6ab9d","#adb5b1","#b4bac1","#bcc9d9","#bec6cd","#c1c6c8","#cf9868","#e1a677","#c68c62","#be825f","#a48883","#b6bab1","#d9d9dc","#dbd9cb","#c0b998","#caa382","#af633b","#bc6042","#a88467","#c9c3ab","#bcb494","#bbab7c","#bbb38e","#d3cab0","#dacfc4","#d7ccc1","#d1bebb","#cd9880","#d08370","#cfcec0","#c2bfd1","#a09877","#a8877e","#b57771","#aa796a","#997e79","#827774","#87867b","#817d67","#bcb789","#dbd08d","#cdba88","#d0bd88","#e4d297","#cebd7f","#bca665","#c0b077","#ece8e0","#ebe8e1","#eae8e9","#e3e0dc","#ddceb1","#dfd3c7","#e3d8cf","#e2d6d1","#d4c3bd","#d9c0ad","#caadb4","#cbb29a","#d6c487","#d1be73","#d2c184","#eadac1","#8e7a85","#8d7277","#816357","#978367","#e7dca6","#e4d79a","#ead89c","#f2dfb7","#b59b9f","#bc9d9f","#cca8a2","#a17d76","#c7b69f","#dbd19d","#e1d6a5","#e0d9b8","#d7d2b8","#c4c1ad","#b7baa2","#afa5a0","#a295a2","#9c8d98","#9e9096","#8a788a","#948694","#b3a9b0","#4a3938","#372b24","#8e7d7b","#9c8583","#86716d","#5e5152","#534d52","#665d5f","#70676c","#6b5c5b","#74605d","#8a7875","#9c9c9a","#95938f","#928f8a","#65695f","#6f7669","#777b6f","#727567","#818172","#706f61","#7a7769","#747063","#ac8f94","#f4f4f4","#cab5b7","#a2937c","#a19879","#aaa48d","#a3a497","#a4acab","#bdc7cf","#b9c6d7","#bcc4cb","#c5cacc","#d09567","#dea478","#c28962","#c18660","#aa8878","#cdcec4","#d9d9da","#dbd9cb","#c3bb99","#c4957d","#ae6040","#a66143","#b7917c","#e1d9c4","#ccc39e","#bdad7c","#b1a889","#dad0ba","#bfb4a9","#dacec4","#dccac5","#cc957c","#cd7d6a","#d0cfc0","#bbb3b8","#ae8f78","#b57f67","#b47f66","#a57c66","#977d79","#887d6b","#b3a878","#dacd9b","#e3d29d","#dfcb94","#dcc88e","#d9c68b","#ccb97b","#d2c07d","#c3ac63","#b7a76a","#e5e1d7","#e9e6df","#e7e6e5","#e5e2de","#e0d1b4","#e0d1c5","#e8dcd2","#e1d4cf","#dccbc6","#dbc3b3","#d2b8ba","#d2bba7","#ddcb8e","#d6c177","#dccb86","#e5d6b2","#bba8a8","#beadb2","#7a6c68","#f4e7c6","#e5daa5","#e9dd9f","#e6d597","#e2d1a2","#e3cec0","#d0b8b5","#c8aaae","#ab8b8b","#af9990","#ada487","#a7a48f","#999c8b","#9c9f91","#919489","#878c7d","#948d91","#a89db0","#b1a2af","#927f87","#8a7b8a","#a0949f","#aca5aa","#412e2c","#35251f","#a18b87","#a18683","#867372","#665a5e","#65606a","#6e656b","#665d62","#726666","#756664","#6b5c5b","#787466","#999685","#898a74","#626862","#6a706a","#7a7d77","#6f716a","#797a77","#797a76","#747370","#6b6866","#ad898d","#f4f4f4","#d0b7bc","#9a8974","#968a6c","#979176","#aeaba0","#9ca3a3","#b0bcc5","#bac9d9","#bbc3c9","#caccd0","#c6885b","#c3875d","#c18a66","#c88f69","#b0876a","#c1bdb1","#d9d7d6","#d9d8c6","#c2b792","#c3856b","#b86442","#a66a43","#a88074","#ddd3bb","#c5ba8d","#c2b285","#c7bda6","#c7bcae","#beb2ab","#d8cdc1","#d6c3bd","#c58b71","#e48e7b","#d1cdbe","#beb5b5","#b2847b","#ae6f4e","#a7816b","#a18076","#927985","#938472","#dfd3ab","#a89b70","#b0a46f","#d4c78b","#dcc886","#c6b271","#cebb78","#c7b570","#bfaa5f","#bbab6c","#e3dfd4","#e5e2d9","#e4e3e0","#dddad2","#d7c9aa","#d5c2b5","#e2d3c9","#e6d7d1","#e5d4cd","#dfc8bd","#d5bcb7","#d2bbb0","#decc99","#d8c37d","#d5c47e","#e5d7a8","#d7cab3","#b9acaa","#b8abae","#e0d7b2","#e2d6a2","#ded097","#e3d497","#e8dba7","#e0d3ad","#cfc0af","#c3b0b4","#aa918d","#7b6150","#aca58a","#8c907d","#8f9589","#8b8f82","#7c7e72","#9c9d93","#8c8794","#9a8fa6","#ae9daa","#98808a","#988895","#a398a1","#bbb5ba","#463739","#342420","#a18781","#997b77","#85787b","#5f5962","#6a6875","#716a75","#6d6367","#776d71","#72686e","#6d6569","#69605a","#7d756c","#908e7a","#646559","#606057","#75746b","#77746a","#7a7a74","#777771","#716e69","#736f6b","#ad8487","#f4f4f4","#c1adab","#ac9d81","#8d8564","#848067","#8e9085","#949b9c","#b5bdc9","#acbccb","#c1c9cf","#c6c7ca","#d29164","#cd855d","#c68b6e","#c69074","#ad8367","#a59a8f","#d9d4d2","#c0bfa9","#b5a881","#b48e6d","#a46e4f","#b07555","#a37a6d","#ccbe9e","#cebf8b","#b4a582","#cec4b5","#cabeb7","#cec2bd","#d3c8bb","#d8c6bd","#c78a70","#df8270","#d2cdbc","#cac3be","#94807e","#866855","#8e726f","#937c75","#8d7b7a","#877664","#9e956e","#d6ca9d","#cfc089","#d9c786","#d0bb79","#cfba77","#c9b471","#d6c17f","#bba55f","#aa9c5e","#e6e2d7","#e3e1d6","#e4e3df","#e7e4db","#ddd0b0","#d8c3b5","#e5d4c9","#e1d3ca","#e3d4ca","#e0c9c2","#ccb5ab","#d2bbb9","#dfcea5","#d8c27e","#e0cf92","#e2d4a6","#ded6b0","#a18775","#97716c","#dccaac","#e6d9a2","#e3d59d","#dece9b","#ded2a6","#dfd2a7","#e1d4ae","#e6dac5","#7d6c6b","#7d6050","#d5c5a1","#d5caa1","#d5caa3","#e4dab1","#d8d0ab","#d2caaf","#b4a8b0","#9f90a1","#96868c","#95808a","#a4929c","#a899a3","#c3b8bf","#584c55","#594f50","#a38883","#917574","#665f68","#6d6b78","#76778b","#6e6979","#6c6163","#6f676e","#6a6771","#736e77","#695b62","#6f635f","#d4cab8","#bfb890","#c2ba95","#cbc3a1","#cfc5a2","#d7cfab","#d6ceaa","#d9ceab","#d1c5a3","#a68187","#f4f4f4","#ceb0aa","#9c947f","#9b9b82","#8f8f81","#94988d","#a7a7a2","#b3b9c2","#a1b0c3","#b2bcca","#b7bcc9","#d49067","#d08864","#c78565","#bb846a","#a77766","#ae9993","#e7dfca","#c5c7a1","#c2b398","#b89e88","#8c7155","#9c7d5f","#816f67","#9d937d","#b9b696","#c9c3af","#cbc4ae","#b4a9a4","#d1c4b9","#d2c7ac","#d2d3b2","#bf876b","#cc8068","#dbcabf","#c9bab0","#95868f","#81726a","#7b6a66","#7f6f5e","#d6c59d","#d9c891","#e3ce90","#dfca8a","#dbc582","#d2bb7c","#d6c280","#c6b271","#c4b373","#c5b475","#b4a05e","#b8a877","#e3e8d9","#e4e3df","#e4e5df","#e7e3e5","#d7cebe","#c8b4ae","#dcc9bc","#dfd0b9","#ddd0be","#deccc1","#d2b8b1","#d4b5b6","#dbc8a1","#ddca87","#e1d494","#e5e1b9","#dfc3ad","#a0705e","#a36757","#8c6852","#e1d4a0","#e7daa7","#dcd0a5","#d8cbb0","#ded3b8","#e6dbb1","#b7a69c","#8a7880","#674f4c","#ccba9c","#dfce9c","#e2ce9b","#ddcb97","#dbca9b","#e9dbb7","#a3959b","#b1a0a7","#af9ba5","#98828d","#95809d","#b1a0a7","#b2a6ae","#696179","#635f67","#a18281","#8e787a","#686270","#777589","#7d7c92","#6e6b75","#605758","#62595f","#746c78","#706974","#6f6771","#786c68","#af9c92","#d9cb99","#d7cb98","#d5c996","#d2c798","#cdba8d","#d6c597","#cdbf93","#cbc195","#a48f9a","#f4f4f4","#c4aea7","#b8b5b1","#b8bcbf","#bdc0c6","#bdc8d1","#bec7cf","#cad1d9","#a1b1c6","#b1bbca","#b4b9c4","#c5825a","#c68260","#be7d5c","#bc866b","#af826f","#9f8d6e","#c4b28f","#a5956f","#ab987c","#a2826e","#b5a296","#af9581","#8a7c78","#82776d","#60584b","#635654","#645554","#605051","#c6baab","#cec3b2","#d7c4ac","#c98470","#ce7964","#d8afa4","#ccb8b1","#e3dbd0","#d1c199","#d5c79f","#cebf95","#d4c494","#d1c18c","#d0bc7c","#d2bd7a","#dbc580","#c9b26f","#c8b171","#bfa968","#c6b071","#ae9a5d","#c4b486","#d5c8b0","#f1eada","#e7e2df","#e8e5dc","#ebe7dc","#cdc3b9","#bfa9a5","#e4d0c5","#e0cfbb","#ddccbe","#dfcbbf","#d6bdb6","#d0b5bb","#beaf99","#e8e1c5","#eae4ba","#eeddb8","#987464","#a57261","#a86d5d","#8f6b57","#bcb495","#cbc29d","#e7dcb7","#baab92","#c2b59c","#dacfae","#83726a","#7b696e","#bdb3b1","#c0ae90","#e4d5a2","#e4d19d","#dcca91","#d6c791","#e3d5ac","#ac9a9f","#a6939a","#a58e96","#a88e97","#8f7892","#a29198","#b3a6b0","#9892a2","#a59fa4","#a28481","#816e73","#6a6880","#7c7c95","#6b6c83","#706e78","#726969","#5d545b","#706874","#7a737c","#6e6671","#6d605d","#87726a","#ece4cd","#d4c796","#ccbd88","#cfc08f","#d1c18f","#d4ca98","#cac396","#d9c7a1","#8c8094","#f4f4f4","#c5b3af","#acaeb6","#afb4ce","#a9afc5","#a1b0c5","#e7eaf0","#ffffff","#c0cde1","#a3adbc","#b7b8c3","#cb8863","#c98664","#c78566","#bd8369","#a97a64","#9d886a","#bca188","#ac8e7e","#a49088","#a4948e","#f8f7f7","#efedeb","#726b50","#b1a691","#5d4f43","#604e4c","#62514e","#655449","#cfc39c","#cfc4a1","#dfcbaf","#c69477","#b87e5d","#b89172","#dcd3c2","#ffffff","#bcb0a7","#7e695a","#a38f7f","#cfbda0","#daca95","#dfcd90","#d1bf7c","#ccb871","#cab56e","#d4bb7b","#c3aa6b","#c3ac6e","#c5af72","#f4f0e5","#ffffff","#c5b791","#d4bba6","#beaa92","#d4c49c","#c3ae99","#bba8a8","#dfcdc4","#ddccbd","#dbc9c0","#d6c2b8","#cfbcb1","#beabaf","#afa9a3","#ffffff","#e7e9e5","#8a7b69","#997061","#9f695b","#a97061","#8e6a58","#a09989","#958d72","#c1b792","#c6b79e","#ccbca6","#827262","#796a63","#c3bcbd","#ffffff","#e5dcca","#ddcd9c","#e0ce9a","#dccc8f","#e3d599","#e3d4ab","#ad979e","#af979e","#a88e94","#a78a8f","#977e90","#b29fa3","#b9adb9","#f0eff2","#f9f8f8","#a7918b","#706770","#6d6f8f","#7d819e","#7a7d95","#676570","#675f5d","#685f62","#736b74","#7e7780","#6b636c","#716461","#9c8e89","#ffffff","#f6f1e3","#d2c087","#d2c18c","#d5ca93","#d2ca96","#d6c59d","#bb937a","#73708d","#f4f4f4","#bea39e","#aaa89f","#a0a5a6","#d7dbe0","#f0f1f1","#ffffff","#ffffff","#ffffff","#d6dbe4","#b6b5bf","#c4815c","#c77955","#b96444","#af5c43","#9c5f48","#88685b","#86756b","#857a72","#b8b2af","#f6f5f4","#ffffff","#ffffff","#f9f8f2","#eadec6","#655045","#695049","#6f5449","#543b34","#d2c193","#c1ae6e","#c4b97e","#ccb781","#cbbc89","#efead9","#ffffff","#ffffff","#ffffff","#d9d1d3","#c1a9b1","#ae9795","#af9e74","#d4bf7d","#ccb66e","#ccb568","#cab266","#ccb56c","#ceb875","#dbcb9c","#faf7ef","#ffffff","#ffffff","#fcfbf7","#eadfcb","#d1bdac","#b7af90","#a59d84","#7c726f","#92857c","#9d8d7c","#ae9d8f","#aa9b8e","#9a9082","#c7c3bc","#ffffff","#ffffff","#ffffff","#f3f1ef","#ac9488","#926857","#986050","#845745","#d4c798","#dbce95","#d8ca8f","#cdbf99","#ccb9a5","#a59395","#d9d5d4","#ffffff","#ffffff","#ffffff","#f8f3e3","#dfd0a4","#ddcd91","#d4c682","#dbc9a0","#a18391","#9d8491","#9f8892","#9f828a","#987c88","#c6b6b8","#f5f3f5","#ffffff","#ffffff","#f9f7f6","#a3a3aa","#80819d","#6e7089","#636077","#665e6e","#564c53","#4f4746","#625962","#6e6870","#6e676e","#b6afae","#ffffff","#ffffff","#ffffff","#f8f4ea","#ded1a6","#cdbf8e","#cda47c","#b77857","#a36449","#6e6e8b","#f4f4f4","#ba9e98","#979797","#8992a5","#ccd1da","#f8f8fa","#ffffff","#ffffff","#ffffff","#f7f7f6","#c7b2a7","#c0735a","#ba6646","#ba6044","#b65f49","#995543","#7c6551","#8b7f67","#cec9ad","#eae7db","#ffffff","#ffffff","#ffffff","#ffffff","#ece6d6","#a58e85","#a47c78","#9e7a76","#634744","#d2c395","#c8b573","#c3b474","#c1b076","#ded1af","#faf8f2","#ffffff","#ffffff","#ffffff","#fbf9fa","#b6aaac","#827469","#cbbb8e","#d5bf78","#c9b269","#c4ac5e","#cbb264","#d3bb6c","#dbc584","#e8ddc0","#ffffff","#ffffff","#ffffff","#ffffff","#f0ebe2","#bfb397","#7b7659","#a29877","#b5a67b","#baa87a","#b89f6c","#c2ac75","#ccb775","#d2c089","#f5f0df","#ffffff","#ffffff","#ffffff","#ffffff","#f2e1d7","#805842","#8d523e","#845642","#e4d498","#deca8a","#dec986","#d6c48c","#dcd4a2","#e3dcc9","#f6f5f5","#ffffff","#ffffff","#ffffff","#fbfaf4","#e9ddbf","#ddcb9d","#e5d49a","#e1cab2","#9f7a89","#977c8d","#95808e","#937984","#927a96","#d6ced4","#ffffff","#ffffff","#ffffff","#ffffff","#d0cfd5","#747789","#616179","#595369","#564d5b","#514351","#433838","#554b56","#5f5762","#888288","#e5e2e1","#ffffff","#ffffff","#ffffff","#fdfcf9","#e1c8b9","#ba8273","#be7d6c","#a6604f","#945849","#7f6b7b","#f4f4f4","#c6b2b3","#9d9ead","#8a93b5","#8d97ae","#98a2a6","#fafbfb","#ffffff","#e0dbd0","#afa78e","#cbbb9e","#947356","#9b7057","#a97f66","#99765e","#a78e75","#c5c09e","#c0b38a","#c5b281","#b7a779","#d4ccad","#ffffff","#fbfaf7","#d0c69c","#cec299","#a08e7a","#a78889","#a49193","#b4a29d","#837663","#c9bb94","#cec18e","#caba87","#cab888","#d7c5a1","#e3dcdb","#ffffff","#dfdbdb","#907e79","#81726e","#6c6053","#dacca4","#d9c88f","#d4c289","#cab87d","#d9c688","#dbc489","#dbc088","#e3c890","#dac891","#fdfbf7","#ffffff","#dcd0ae","#cab57b","#d6c289","#d1bf88","#d9c289","#dac583","#d0b877","#cfb472","#d0b774","#d2b877","#d2b87a","#ccb87d","#e9debf","#ffffff","#fdfbf7","#dbcb9f","#be9d94","#8e6e60","#976c5e","#947262","#e1daab","#e2d7a3","#ddcf9a","#e7d9ab","#e6d9b7","#d5c6af","#6c5c57","#d9d5d4","#ffffff","#f9f4ec","#d9cda3","#e6d8aa","#e6d7ae","#dfd0a6","#e9d8c8","#a9909d","#a28d9b","#968391","#a39099","#8d7b91","#96858a","#a89da7","#f7f6f8","#ffffff","#baabae","#706e80","#76798b","#78788c","#716b7f","#726a76","#615762","#635a59","#736973","#756d78","#6c656e","#6c615e","#bab0af","#ffffff","#f8f5f0","#ba9f7a","#b78b69","#b79173","#b08b6d","#b18c70","#b5997b","#b88a85","#f4f4f4","#bfadb0","#8b8e8e","#a9aeb0","#d9d7d6","#cfd0c2","#d6d3c3","#e2dfd5","#b5a683","#b2a67f","#bcb286","#bab58a","#c1b38d","#c8bc93","#c5ba90","#bdb489","#c3b685","#b5a87b","#b2a379","#b7a775","#b8a880","#d7cfb8","#d4c8a5","#c4b285","#cbbd91","#d8caa8","#d5c1b4","#7a6868","#756558","#745f5d","#7a6655","#cfc193","#cebd8b","#cab887","#d5c49d","#92806b","#dbd6d1","#977b78","#a98c85","#9a827d","#79695a","#ddd1a9","#d2c18d","#dac993","#ddcb92","#d6c589","#e6cb97","#c4a272","#ceac7a","#d8c184","#d7c699","#e9dfc4","#c4af78","#cbb578","#d3bc7c","#cfb877","#d0bb78","#c7b26e","#d5bd7b","#d5b87b","#ccb478","#c5af75","#ddc890","#d6c38f","#d9c897","#e6e1cb","#e5d8ca","#887864","#877e8a","#91878b","#8e716c","#9b796e","#bbae95","#f2e1c2","#c0ab8a","#a08a73","#98857d","#7a6763","#796663","#74615f","#d5cfcc","#80695f","#baa68e","#ded3ac","#e0d5b4","#d5cba6","#e8dbc8","#9c8e99","#9c8a9a","#a48fa0","#9f8793","#8d7e89","#71625d","#6a5f5f","#a2a3af","#bfb6b6","#816f77","#646273","#717486","#717186","#7a7488","#706874","#746672","#695f5e","#786d77","#716771","#6c6571","#6d625d","#705d59","#d5d0c9","#dfd4b7","#d1c39c","#d1c49c","#c9c19b","#cec4a4","#cec5a8","#d1c7a4","#c18f85","#f4f4f4","#b0b3b5","#cacabe","#d0cabd","#ccc8b5","#aaa186","#a49a7b","#a19770","#a79c78","#b3a681","#a79971","#beb084","#c3b685","#b8ab7b","#c1b484","#bbae7e","#c4b582","#b5a576","#b7a77a","#b9a97c","#c1b081","#beac71","#c4b27a","#bdb281","#c5b888","#c7b794","#7e6b5c","#7d6a62","#7c6860","#79635c","#7a635d","#8d7b5c","#d8c79a","#d2c188","#cdbb88","#cbc091","#b09473","#b48d87","#c0988c","#b99a96","#93827a","#d7caa4","#ddcb9a","#d3c288","#d8c793","#d8c68d","#d7cb89","#ddd08d","#d6c585","#d0be7e","#c8b27f","#c7b075","#d0bc83","#d1ba81","#d8c188","#d5be84","#dcc58a","#ddc88e","#dec98f","#d1c176","#d7c780","#d8c38b","#dcca9f","#d3c1af","#b8a8ab","#8f8592","#877a7e","#877371","#917e79","#87726d","#846f68","#978079","#837e7d","#898184","#827575","#b4a090","#a59396","#aa928a","#918781","#969690","#8e726e","#9c745f","#9e8371","#878788","#857e7f","#8e908b","#999899","#928693","#91828d","#a7939d","#aa8d9a","#958298","#6e6260","#645f61","#7a788c","#5d5861","#726b75","#7c7789","#6c6a7c","#756d7c","#766b76","#746c75","#69616b","#685f68","#756b72","#75696d","#746a76","#736971","#625752","#6b624e","#7d766b","#837e7a","#737069","#7f7c75","#807d75","#79746e","#736c66","#a9868c","#f4f4f4","#b2b0b1","#c9c4b4","#a99f8d","#9f9681","#a9a083","#a29875","#978d61","#a09670","#afa37c","#b5a87f","#b2a477","#b7a97a","#bdaf80","#bbae7e","#b2a475","#bcad7e","#b7a878","#b6a776","#bdae7d","#beac89","#b8a56f","#b4a36f","#cabf8e","#c9bc91","#b8a88c","#7a665d","#75635a","#7b675f","#7d6760","#7c655e","#7a6751","#cebd96","#d1c088","#d0bf89","#c6b686","#c8af7f","#c9ae95","#b29487","#cab5ae","#71635e","#9a8b73","#e0cea2","#e2d097","#dfcb95","#dcc88f","#dac891","#d8c58b","#cdb87e","#cfb87d","#c9b06e","#cbb16a","#d3be7e","#cebc76","#d6c47f","#dcc886","#d4c180","#decb89","#d3be89","#dbc899","#ac9781","#8f8684","#978e8c","#8a8181","#857d7f","#7a778c","#838191","#8d8692","#8d8c9b","#9392a1","#9b99a7","#908a98","#948995","#a398a5","#9e909c","#947f7d","#c49d90","#ae8976","#a79896","#acacb0","#997f7e","#9c7a6c","#8e756a","#6d676b","#7d7172","#7e7f7a","#71716f","#8b7e8c","#9b8a97","#b29aa7","#ab8c98","#867280","#645651","#6e6668","#676477","#524d5b","#756e7c","#7d778b","#868392","#787181","#6e6470","#736b74","#686068","#665d65","#696066","#72666b","#6a6168","#766c70","#6f6460","#584e3d","#726b5e","#6f6b64","#6f6c65","#6e6b64","#747169","#736d67","#69625d","#9e7679","#f4f4f4","#b9adac","#938770","#a59678","#9f9276","#a99c7e","#9b8e66","#897c4c","#978c64","#9f936a","#ab9e73","#b3a577","#c2b487","#b5a779","#bbad7f","#b5a87a","#b8a87d","#c5b687","#bfb07d","#c0b181","#a69774","#b8a86e","#bcad72","#d1c59e","#cfc0a1","#776655","#79645f","#7f6c64","#746058","#7c665f","#7e6760","#846f63","#c1ae92","#cbba87","#d3c18b","#c7b581","#cebd7d","#cebf94","#e7d7c9","#71635b","#726763","#6c5d54","#927e62","#d0bd8d","#decc94","#dac692","#dac58d","#dcc88e","#dac68a","#d3c080","#d3bc7a","#d3bc76","#dcca93","#d7c994","#d6c795","#d7c79c","#baaa83","#b9b28e","#9e9782","#867f6c","#807a73","#7c7675","#857d7c","#827777","#998a94","#6f627a","#7d768d","#968da3","#9b90a2","#94889b","#a395a7","#a091a1","#aca1b0","#a59cac","#a99fad","#9f9098","#ae9a94","#aa9188","#9a8a8d","#a69395","#918286","#806765","#ab9190","#a8959c","#8a7679","#797671","#70716e","#837784","#9c8d9c","#a48d9c","#a98b94","#8d777d","#75655e","#685e62","#6a647b","#5d576c","#797282","#878196","#807b86","#6b6573","#776f7f","#7b737d","#676065","#72686f","#6f656b","#73676e","#7b7175","#6f6668","#625553","#584f40","#635e4e","#7e7a6f","#716e66","#77746d","#6c6962","#605b54","#69625d","#b58687","#f4f4f4","#baacac","#a99c81","#a29471","#9b8f71","#a89a79","#95865a","#928351","#9a8f63","#a0946b","#ada074","#b9ab7c","#b5a87b","#b2a477","#b6a87c","#b6a87c","#b8a880","#bbac7d","#bdae7f","#bdac89","#c6b99a","#b7a87e","#c1b28d","#b0a18d","#756557","#7e6c64","#7a665d","#77655d","#816c64","#846f67","#8b746d","#816c64","#8b785e","#d9c899","#d0bd8d","#cbb883","#cfbd7f","#d6c4a1","#6e5d57","#6e5e56","#6a5b52","#6f635a","#76655d","#d2c49c","#dbce9a","#dbcba1","#d6c797","#e0d3a5","#e4d8ac","#c4ba90","#a09674","#75694a","#786e56","#7b7560","#7a745f","#706a56","#77715e","#7c7461","#867d76","#847f72","#6c6858","#747063","#817d6a","#807c68","#90887f","#7f766f","#8d8a81","#9b958e","#9c948e","#a69f98","#a59c94","#aca198","#ada7a2","#9d9c93","#93968a","#919287","#82867e","#8c8a82","#acadb0","#aa9393","#93868b","#968489","#b7979d","#9d7e88","#95787d","#756e69","#797c77","#88818c","#988d9e","#9e8d9d","#a99296","#8a787b","#877a74","#786f79","#5f5c73","#544e61","#807984","#837e8d","#70686e","#6d6773","#7b7687","#786f7b","#655e60","#6c6468","#62585f","#7b6f79","#6f666e","#685e63","#685a59","#595041","#66604e","#7a7767","#726f67","#74716a","#706d66","#655f5a","#6a645e","#ac8384","#f4f4f4","#c2b1ac","#948667","#a2966d","#9c8f6c","#afa27d","#95885a","#a9965f","#a89771","#a5956a","#b4a473","#af9f70","#a19365","#b2a576","#b4a678","#b8aa7b","#c4b38b","#c4b485","#d1c199","#baa79c","#a5948b","#584241","#655347","#836e66","#7e6962","#7d6960","#77635b","#79625d","#806b66","#8a756f","#806d65","#8a7570","#826d5f","#d4c19f","#d5c292","#c8b886","#cab885","#c5b6a4","#6f6361","#6d5c59","#6b5851","#70605b","#685d56","#cbbeab","#c0b597","#8b816f","#736a5f","#696058","#736a63","#766d61","#5f5546","#514736","#71695a","#887d6b","#65604c","#686852","#76725e","#897e73","#5a5547","#838475","#7a7b6c","#7a776a","#686758","#817f6d","#84836d","#6e6f57","#838570","#81866a","#889276","#89927a","#929883","#909477","#85876a","#888d77","#8d9587","#84847b","#938578","#94827a","#9d8a8a","#9e989d","#b0afb2","#897d76","#866f71","#8e7886","#7b6f77","#797a76","#70746a","#727774","#80847f","#7d8079","#86867d","#80897e","#838181","#887b8d","#6d637e","#675f77","#6e6e7a","#807b84","#70686e","#706876","#726a7c","#7c727c","#6a636e","#736971","#665d63","#857c86","#6e6669","#786d74","#6f6268","#56463b","#796f60","#777967","#75796c","#6c6d63","#6c6d62","#726e63","#706b5f","#a27f7c","#f4f4f4","#c0aeaa","#a09172","#a69870","#9d8f6d","#b0a47d","#9c8d63","#a3925e","#af9f77","#b5a577","#c6b685","#bdad7e","#bbac7d","#c3b484","#b7a879","#c0b181","#c4b486","#c3b382","#cdbd91","#9d8d78","#9c8d78","#5c463f","#67544a","#716058","#726159","#725d57","#725b55","#7b6661","#8a7771","#907e78","#8f7e78","#746360","#68574e","#70604b","#caba9b","#d0c392","#cbbb8a","#6f6151","#736665","#72615e","#68564e","#6e5f57","#645754","#877b6c","#837a60","#726857","#766f63","#6d655c","#686158","#736b5d","#5e5949","#585442","#626251","#736e5c","#767561","#7a7a66","#868370","#5a5547","#7d7d6e","#808574","#818675","#7d7d6e","#777768","#7e7e6d","#777763","#6a6d54","#797c67","#7c8169","#899279","#858c75","#8d937c","#858a70","#7b8064","#8f967f","#7b8172","#939589","#878376","#71685f","#766d67","#797b73","#585d55","#767466","#7f776f","#706764","#76736e","#7b7e75","#80847a","#727a72","#818980","#878e84","#82877d","#768173","#7c7a74","#756872","#797183","#6f6876","#7b7783","#736b79","#827a86","#756e7f","#726a7e","#786d79","#716974","#7b7179","#63575c","#79717a","#665d5f","#6d6368","#6d5f62","#55433b","#857d6e","#6e6f5e","#7e8074","#76786c","#727368","#7a776c","#6f695d","#a88381","#f4f4f4","#bca9a5","#ac9d7f","#a89971","#a79876","#a69870","#aea07a","#c3b691","#b2a274","#c2b281","#beae7b","#bcac7d","#c8b788","#c4b485","#c7b687","#b3a375","#c9b985","#c5b583","#c9b98f","#a69776","#cdbd9e","#8b7d73","#7a6a61","#75665f","#685851","#75635d","#7a6460","#84756f","#867771","#8e7f7c","#6e615e","#726665","#6e635f","#736760","#6c5f54","#c9baa3","#b6afa3","#736363","#6c5f5c","#6b5b54","#69574e","#695a51","#6e5f5b","#91877a","#817d67","#7d7968","#6e6a5a","#747163","#6c685d","#6f6c5a","#71705d","#8d8d80","#7a7b6c","#716f60","#787466","#8b8779","#645f51","#7a7c6c","#757a69","#818976","#79806e","#747566","#737465","#757767","#7a7b6c","#97988a","#8c917c","#777d68","#777d67","#7f866e","#7c846c","#7f8770","#7a836c","#8b937d","#868b7a","#787a6c","#7e8475","#7e8172","#888d7c","#7c8772","#a3a89d","#79826c","#7b846f","#727a65","#676f5d","#6d7364","#7b8176","#7f897b","#818b7e","#8c968a","#8c968a","#869182","#838177","#6a5e5c","#8d858d","#948d93","#7d757d","#7b7184","#83798c","#7c7487","#7d7589","#7c7180","#706873","#80747d","#63565a","#695f64","#756b72","#6a5f61","#6f605f","#9e9391","#82796e","#949483","#727465","#7b7d70","#737467","#656254","#767163","#b28988","#f4f4f4","#bfaca7","#a89779","#a89870","#a79775","#b3a37b","#e6e1d3","#ffffff","#cabd95","#c0b07c","#c0b07c","#c1b182","#c2b181","#c3b181","#c6b484","#c4b282","#c8b984","#bfaf82","#c5b490","#c2b38e","#a7967d","#f6f4f4","#d8d3d1","#786360","#6e5b57","#74645f","#746660","#7c716a","#8e817c","#716664","#6d6465","#75696a","#736767","#70615e","#6e5f57","#aea6a2","#ffffff","#b4aca6","#6e625d","#6e5d55","#67554b","#6b5d52","#6b5a50","#8f8776","#75785f","#7f806a","#747461","#717162","#777667","#737360","#ddded8","#f6f5f4","#766961","#5a4e47","#5d4e48","#5e504a","#79736b","#7d7f6f","#7a7f6e","#737967","#737565","#787a68","#727463","#78796a","#85887d","#f6f7f5","#d6d9d1","#7b8271","#7b816c","#7a816a","#757f65","#838d79","#848f7c","#717965","#727761","#767d6c","#7c826c","#727863","#787e68","#c0c4b8","#ffffff","#9da194","#717763","#777e6d","#717666","#727466","#7e8678","#919785","#868e7b","#788171","#7a8676","#768277","#818176","#6c5d59","#e8e5e7","#f7f6f6","#918489","#7a6e7b","#867d8d","#726a78","#7f7884","#756b77","#6f6672","#7c6f77","#6d5f62","#73686a","#776b73","#6c6061","#8c7e7a","#ffffff","#cdc9c6","#817f6f","#7a7c6c","#737466","#727364","#757163","#827d6c","#a47772","#f4f4f4","#bfa79e","#9c8a66","#a59367","#b7a582","#ece6d9","#ffffff","#ffffff","#fcfaf7","#d4c9a8","#c9b783","#beab78","#c0ac74","#bfa971","#bfa971","#bfaa73","#bfa974","#c3b384","#c6be9b","#d3cab9","#edeaea","#ffffff","#ffffff","#e1dedc","#8e8079","#6f6059","#686057","#665e54","#584e48","#7d6967","#76625f","#716562","#6d645c","#797166","#b4ada7","#ffffff","#ffffff","#ffffff","#bfb7b4","#74645c","#625146","#5c4a3d","#504735","#7c7a5b","#6d724d","#797960","#76745d","#777962","#878a76","#ddddd7","#ffffff","#ffffff","#f5f3f3","#90827f","#5d4e48","#56413f","#655d4f","#6a715c","#676d57","#6c705c","#6c6e5c","#666956","#6e705e","#a3a599","#f6f7f6","#ffffff","#ffffff","#dcddda","#8c9086","#74786d","#79826d","#6a765b","#6e785c","#656d53","#6a7059","#727561","#8c917d","#838977","#c7cbc1","#ffffff","#ffffff","#ffffff","#b6b9b0","#707a6c","#717968","#666f5b","#717a68","#6d7865","#67725f","#6b7661","#7a846f","#738271","#909489","#e1dfde","#ffffff","#ffffff","#f0eeee","#9a939a","#857b8e","#746a79","#6f626c","#6d5e65","#645457","#6e606d","#635958","#615154","#685957","#b0a9a8","#f6f5f5","#ffffff","#ffffff","#d8d7d0","#90907e","#80806e","#757663","#5e5e4d","#5c5648","#99665d","#f4f4f4","#b89e93","#9b885d","#b1a06c","#ddd4c1","#ffffff","#ffffff","#ffffff","#ffffff","#f9f6f0","#cfc29d","#b8a66c","#b6a168","#b9a56a","#bea96b","#bfac6d","#c4b281","#ab9872","#817160","#e3dfde","#ffffff","#ffffff","#ffffff","#ffffff","#d9d6d4","#70605b","#574943","#453f36","#4c3d37","#a48179","#b07968","#a08374","#a4796a","#ccb2ab","#f6f5f5","#ffffff","#ffffff","#ffffff","#f6f5f4","#aba19e","#4d3930","#442e23","#392c19","#494026","#6e6c4b","#626747","#73735a","#737560","#d7d7d1","#ffffff","#ffffff","#ffffff","#ffffff","#eae7e7","#776b66","#402925","#594f40","#686e52","#656a4f","#61654b","#606249","#5e604a","#8a8d7f","#eeefed","#ffffff","#ffffff","#ffffff","#ffffff","#d1d4cd","#818770","#626c53","#5f6955","#5c664f","#565e47","#4b5039","#5a5e44","#666c57","#b4b8ad","#ffffff","#ffffff","#ffffff","#ffffff","#f5f5f4","#abafa8","#6e7462","#535c47","#535e4a","#616d57","#5a6651","#657158","#6e7b60","#8a9683","#e3e4e0","#ffffff","#ffffff","#ffffff","#ffffff","#e7e5e7","#898892","#595261","#62596a","#564859","#574349","#645264","#4b3d3f","#534138","#8f8484","#f5f4f4","#ffffff","#ffffff","#ffffff","#ffffff","#c2c2ba","#71715c","#575745","#4e4c40","#504a3b","#954d42","#f4f4f4","#bca89e","#a5956f","#b2a171","#b5a275","#cdbd96","#fcfaf7","#ffffff","#ece6d3","#c7b78d","#c3b28f","#c7b78d","#c5b78d","#c8b990","#c7b793","#c7b796","#7f6f5e","#705d4e","#6f5a52","#685853","#b5afa5","#ffffff","#ffffff","#97938c","#726a62","#6c635d","#736b67","#74736a","#736a63","#9b847a","#bc9985","#be9785","#b18972","#a88571","#93857f","#edf0f0","#ffffff","#f3f3f2","#73625f","#665450","#685650","#68574f","#6a5e59","#70615a","#625449","#736b5c","#858771","#858773","#676257","#7c6e6b","#f4f3f3","#ffffff","#b7afad","#5d4843","#584a44","#5c4947","#7c7367","#7e816f","#757765","#787968","#797968","#6c6e5b","#6a6c5a","#6e7060","#c2c3bd","#ffffff","#f6f6f6","#898c80","#6c7164","#676c58","#717a61","#788170","#757c70","#767b6d","#6e7460","#777b66","#7b816d","#7b816e","#858c79","#e5e7e3","#ffffff","#dcded9","#7b8070","#7f8278","#787d6e","#868e7b","#788372","#7f8a76","#818b78","#8a947e","#7f8a72","#8d9882","#858777","#9e9796","#ffffff","#ffffff","#b7b4ba","#837b88","#7e7786","#736b79","#766b76","#7d7078","#70605b","#7b6d78","#6e6067","#6e5d5a","#6a5f5f","#6b6263","#c8c5c5","#ffffff","#f6f5f4","#a6a493","#838370","#7c7d67","#76776a","#6e6c67","#797369","#ba7c73","#f4f4f4","#c5aba1","#ad9d77","#b2a875","#b9a87e","#c4b084","#d3c3a0","#f1ede3","#cfbdac","#93827a","#8f8180","#a69b92","#c8baa7","#8b8072","#695f57","#67605a","#6a665e","#69655d","#76726c","#6e6a65","#777669","#bebfba","#a5a5a3","#747060","#7b7d6f","#91827b","#77645e","#7e8077","#817d75","#978980","#a48c82","#a78987","#988075","#ad9889","#b39e96","#b8bab8","#f0f2f3","#baada5","#665d5a","#59504e","#685d5a","#6c615e","#6b6460","#736863","#6e5d55","#6f5f52","#8e9179","#918d7a","#5f4e46","#5f4a49","#91837d","#cac3c5","#534843","#564940","#65514b","#5f4b47","#766f61","#807f70","#7c7c6b","#797968","#81816e","#757766","#737466","#74766a","#717269","#d2d2cf","#9c9e91","#7c7e71","#686a5e","#6d7062","#727565","#727561","#737b64","#727a65","#78806d","#7a8170","#757a6c","#7d8272","#797e6d","#898d7c","#e4e5e2","#7d8371","#72776a","#787d72","#888d84","#7b8178","#898f82","#747f72","#7a8175","#82847a","#828772","#8b8774","#8f907f","#6c6360","#bfbbc2","#c3bec2","#82768a","#8c8190","#7c727a","#6d6570","#817883","#776971","#776964","#786b76","#6f636a","#675756","#6c5f63","#665a5c","#786b6b","#d7d4d3","#968d85","#8d8a75","#86856f","#72735f","#808270","#706f61","#6d6556","#a3756f","#f4f4f4","#cdb1a8","#b09f79","#bdb281","#bdad81","#caba86","#baab75","#ccbc92","#988580","#99888a","#a29397","#978a86","#9c9087","#756c68","#7c7471","#706b65","#78766c","#6e6c62","#69675d","#6c6a60","#766f67","#645f55","#736b62","#6e5f5c","#645d56","#a0908b","#8a7e76","#75645b","#948075","#a18575","#a78473","#a78d8d","#c4aaa0","#b89d8b","#bda092","#928a83","#a9aaa8","#6d635b","#726867","#756a68","#6d625e","#6a5b58","#6d625d","#6f5f5a","#635148","#716054","#878670","#6a6353","#5c4b42","#5d4a48","#574442","#4f3d3c","#6d655b","#60554b","#685751","#5d4b47","#5d5547","#7c7c6b","#747463","#737362","#696958","#6f725e","#6f715e","#6f7061","#75776c","#585a4d","#828474","#64655a","#707468","#6d7263","#747969","#666b5a","#858c76","#717763","#737a68","#89907e","#707769","#767d6e","#7c8472","#767e6c","#6e7661","#848a77","#747a6c","#798174","#7d857b","#81897e","#757d6d","#7b8674","#7f8778","#888c81","#828978","#919388","#858d81","#6d6565","#807484","#776c76","#7c7183","#837787","#877d85","#776f79","#7b727c","#776971","#756761","#796c77","#72666d","#6a5a59","#796c71","#706366","#6b5e5c","#5c4a46","#6d6256","#8d8a75","#81816b","#757665","#6c6e60","#626157","#736b60","#a06c62","#f5f5f5","#c6aaa1","#beac8a","#bab089","#bfb28e","#b5aa89","#8f866c","#85776b","#927d86","#a4919b","#998892","#988b90","#978c90","#8f858d","#867f85","#6d6a69","#6f6e65","#6a685e","#706f63","#706f61","#675d57","#5c5245","#6f5f52","#92938f","#9d9990","#a98b83","#aa837c","#ad8072","#a97b6c","#ac7d6a","#b07f69","#a69190","#b1978c","#be9c87","#c5a18b","#b0998d","#4f443d","#584b44","#6d605f","#645554","#6b5b56","#6e5e56","#6d5d54","#6b5850","#6f5d53","#695c4f","#91887b","#5f5448","#65544e","#5a4845","#4c383a","#42392e","#7c7d6c","#817a73","#594e47","#746860","#564c41","#888874","#747460","#666655","#666557","#71725d","#71725e","#848574","#707162","#4c4c3e","#56564c","#75766b","#686d5e","#6e7364","#6c7162","#787d6f","#888a7b","#878a7a","#8b8e7e","#878a7a","#7d8478","#858d7e","#7c8373","#6c7360","#5e654e","#7a816d","#7d8375","#757d6d","#777f72","#788074","#7c8472","#808a73","#828776","#828379","#989a8e","#8c908a","#89918a","#605a5c","#837687","#675b67","#867a8a","#85798a","#8b8189","#766e78","#736b75","#80727a","#796c63","#6f626b","#74696c","#6b5b58","#6f6265","#665a5a","#756865","#4d3931","#6b6152","#81816b","#878975","#7f8172","#7a7c70","#615f57","#6c645c","#ac7369","#f7f7f7","#c8b1aa","#857863","#797463","#766e66","#827970","#575453","#6a6069","#947f86","#aa979f","#9e8d97","#998a99","#988b8d","#a2959b","#9a909b","#979098","#777674","#797874","#73736c","#74756a","#817f75","#3e3b2e","#4e413b","#6d625d","#8d7869","#b27e6c","#b17463","#b47f6a","#b17d6b","#b28170","#aa7b6c","#988583","#baa096","#c3a18f","#bb9b88","#9a8075","#3e2c22","#544034","#64554e","#8f7f75","#9b8b7b","#8d7d69","#99897d","#69584b","#73665a","#8e897a","#61524b","#5c4b46","#5c4945","#544642","#3b2b24","#4f4e3b","#777e6f","#736f6b","#625d55","#71695e","#584d44","#6b6b55","#7a7a65","#626251","#777668","#6b6b59","#747463","#6f6e62","#6d6b63","#525145","#686661","#77766d","#969487","#7f7d71","#8a877d","#a09e96","#96968c","#9a9b8f","#a2a296","#a6a898","#989b90","#878a80","#96998d","#818675","#676e57","#737a65","#7f8578","#878c7b","#83877b","#888d82","#888d7b","#90887e","#857873","#8e7f7a","#83776c","#8b887b","#909286","#635958","#73667d","#584b59","#867b88","#7e7283","#7a7078","#6d6570","#7a717c","#8b7d85","#7b6d63","#6c5f67","#7a6f71","#72635e","#6f6362","#695d5b","#5e514d","#473328","#766d5b","#898975","#7d7f6d","#777865","#78796a","#6a685e","#787164","#a0736f","#f9f9f9","#c8ada4","#71685c","#706a60","#675f58","#68655d","#78757b","#827582","#8a7c84","#a89aa2","#9c8d96","#9e8d98","#9f8a97","#9a8a92","#978d8f","#9d9393","#9d99a0","#89818c","#777b81","#676e67","#626762","#6b4c42","#956255","#aa7761","#a9755e","#a7715b","#ac725d","#b07768","#b67d6d","#aa7564","#a7796d","#a18a83","#c5a496","#c39b88","#bd9a8d","#7d6d62","#645a4f","#80776b","#86817a","#b6b1ab","#9f9b93","#8e8b7b","#7c8477","#b4b3a5","#7b7e69","#736f5d","#594848","#584645","#524340","#504540","#40332a","#474738","#757968","#776f66","#615a4f","#6f675c","#585144","#727460","#6a6b5a","#646556","#6d6b61","#717266","#6f7063","#737465","#605e4f","#6a6054","#756c5d","#969087","#919085","#a19f96","#95938a","#99958f","#9d968d","#ada89c","#a39e91","#aba696","#a19f93","#9fa194","#949b8a","#909385","#77776d","#7c7e6e","#7f816d","#85756c","#94847b","#82756a","#8e8478","#8e8077","#877a74","#847877","#887b77","#887669","#8f847f","#685a55","#4c3b3f","#4c3a41","#7e7176","#76686d","#75696e","#776a6e","#827578","#817274","#7e6e6e","#786968","#766465","#6e5b5c","#6e5b5a","#685554","#574643","#412d29","#736b5b","#898b71","#7d7d6a","#707161","#6d6c60","#615c54","#6a6357","#96827b","#fbfbfb","#c9aea6","#70675c","#706c61","#706762","#686561","#959394","#786b75","#a18c90","#9f8e91","#8a7d83","#96878f","#94828c","#a5979f","#9a9398","#978d91","#9c989d","#8c848c","#848488","#877f79","#91746f","#90594d","#a56451","#aa7660","#ac7761","#b57f6a","#b57d68","#b37968","#b17664","#a06956","#9c6d5e","#967d75","#be9d8f","#c7a08e","#bc988b","#8f787a","#564648","#685d5b","#6b6461","#6c6464","#7c7473","#938d84","#a5a9a0","#8c877e","#848477","#6f6661","#5c4b4a","#584845","#746863","#564b44","#57453f","#545244","#5a594b","#6a6558","#656054","#6c675a","#666154","#717261","#7a796a","#7a776a","#7c786d","#767066","#837a71","#968e83","#a3998e","#978a7b","#9e9582","#a39c8f","#aba699","#a49f92","#a7a296","#969087","#989289","#908a80","#9e998d","#9e998b","#9e9d91","#9ea193","#a3a899","#919284","#7a7a6c","#8c8d7f","#868778","#a39694","#a39591","#988b83","#8b7f73","#97887c","#887a72","#8f827d","#86756d","#866f60","#827570","#64534e","#524041","#473738","#716364","#716364","#675759","#685859","#6e5d5d","#6f5d5c","#635251","#5f4e4e","#635151","#675353","#5c4a48","#5c4a48","#5f4f4c","#332220","#574d43","#85826f","#827f72","#7e806f","#787769","#635e55","#6a6356","#a46e71","#fdfdfd","#c9aca7","#6b6357","#656159","#6b6762","#727471","#b4b0b0","#74696e","#9e8587","#938383","#8a8381","#807677","#95888f","#978d96","#95909b","#918d93","#898788","#9a949b","#9e9aa1","#9f857f","#af7d6f","#9c5c4a","#9c6249","#aa7360","#b57d6a","#b67f6c","#a8715e","#b27765","#ae735f","#a46d5a","#9b6b5b","#83665b","#b59488","#be9a8b","#bf988b","#b2928b","#54493d","#83786d","#7a7663","#858071","#827d6f","#807c68","#858771","#89836e","#858670","#787366","#614e4c","#5b4d48","#7e766e","#564e44","#5e4c44","#514e3e","#666252","#717060","#7a7869","#676557","#757367","#68695d","#79776b","#8e8a7e","#989086","#a1928a","#a5938b","#ab9990","#ad9a8f","#918370","#9b917a","#a29988","#a69b8b","#a4998b","#a39a8d","#9b9388","#a19e92","#aaa69a","#a5a296","#b3b0a4","#969487","#9f9f93","#97988d","#9e9a92","#818172","#848479","#8a8a81","#b0aaab","#9d9694","#8d827a","#8c7e72","#97887b","#8e8378","#7f7369","#836c60","#886b5f","#716261","#655554","#5a4845","#4d3b37","#6a5a57","#675754","#685554","#624f4e","#745f5d","#6c5653","#645351","#614e4d","#624e4d","#644e4e","#5c4a48","#5c4948","#5f4f4c","#4a3a3a","#5e524d","#695e55","#756c65","#7b7d69","#757466","#666158","#686157","#91726e","#fefefe","#d1b2ae","#6e665c","#68655e","#696762","#cbcfd1","#82807f","#9d9596","#8f7f7f","#777270","#828581","#817a7b","#8f8688","#97919b","#9c9aaa","#9898a1","#909093","#92939f","#8d919b","#997e7a","#a37965","#b28576","#ad7b6a","#ac7161","#b17767","#ac7463","#a87461","#a97365","#a87061","#a47161","#94695d","#89685b","#af8e82","#b79487","#bb9385","#ac8d82","#969487","#8d8a76","#737161","#8d8b7f","#918f86","#7b796d","#757769","#7a7767","#787d67","#7a7c6b","#604b48","#564b44","#686459","#595246","#6c5f55","#8c8c7f","#6b6857","#696a56","#707160","#6a6b5d","#7a7b72","#7b7a72","#938f87","#9a9289","#a99c94","#ac9f95","#aea196","#a39588","#a39385","#a4968d","#a89b8a","#b2a799","#a19688","#9f9488","#a1998d","#9b978b","#adab9d","#949286","#acaa9f","#9e9c94","#a0948a","#827a70","#96958c","#9e9c96","#ababa5","#99998f","#929388","#919489","#939287","#797166","#7f7267","#857971","#89847b","#787268","#80695d","#91736f","#766a71","#867b83","#7a6c6b","#726161","#625151","#655353","#695758","#5e4c4d","#665252","#614b4a","#63514e","#665351","#675150","#66504e","#5c4948","#5f4c4b","#5e4e4b","#746965","#71625e","#72605c","#73645d","#868871","#70705f","#555046","#6a625a","#a66e70","#fefefe","#c5b1b7","#7d7368","#6e6d65","#a5a3a1","#cbc8c5","#efefed","#fcfdfc","#dbdbd8","#d8d8d8","#e4e0e8","#938f94","#88858a","#8c878a","#918a91","#95939f","#9a99a0","#898d94","#8a8d95","#94878d","#ae826f","#f3edeb","#e1d1ce","#a27468","#a37063","#a97164","#a67362","#a06d62","#9d655d","#a86f67","#996d63","#7e6c5e","#8f786a","#b49387","#b88d81","#c6a9a0","#ffffff","#a1a09b","#7b7d6c","#737465","#9b9991","#a29ca4","#97929c","#a3a0a4","#aeada9","#717366","#615d50","#6e6b5d","#6d695c","#6e6a5d","#cfcfc9","#eeeeec","#78796b","#787a70","#82847a","#77786f","#929389","#9c9d97","#a09e97","#9b968d","#9a9189","#989084","#9e968a","#a1978c","#a39a8f","#f9f8f8","#d1cdc9","#998f86","#9f968d","#a0988e","#a6a095","#989489","#a2a69a","#9ea297","#a19c93","#8f786e","#8b6f6b","#9e8d8b","#9d999b","#b8b9b7","#ffffff","#9c9490","#63594d","#868b7c","#848576","#878273","#776c5c","#887d6d","#757763","#726a59","#7d665a","#7a6562","#a69599","#948892","#e5e2e5","#e6e3e5","#847885","#84727c","#7c6c6e","#726469","#65585c","#6a585a","#67594d","#655551","#655255","#786464","#6c5c5a","#70605f","#756664","#f5f4f3","#baaead","#695751","#6c6457","#737569","#696b5f","#5f5c54","#635d57","#966d6b","#ffffff","#b4adb1","#ccc8bb","#d5d4c8","#d3d0c6","#edece8","#ffffff","#ffffff","#fafaf9","#dbd7d8","#908990","#989096","#8e838d","#82757d","#86787e","#8a7f87","#8b848b","#8d8c95","#7f7e89","#a59fa9","#ebe6e5","#ffffff","#ffffff","#e0d2cf","#a4796d","#a17164","#97695b","#836152","#825d50","#7b544d","#836661","#72605c","#8a7571","#af8e89","#d5bab6","#fbf7f7","#ffffff","#f7f7f6","#b2b2aa","#6f7060","#6f6e62","#817d79","#83807d","#807d76","#5b5c4f","#646654","#7d7d6e","#706f61","#727164","#c8c8c2","#ffffff","#ffffff","#e4e5e2","#86897f","#74766a","#717367","#76786b","#62665b","#6d7064","#8b8b80","#868479","#8c877b","#948c81","#aca59c","#edeae8","#ffffff","#ffffff","#d8d4d1","#9b948a","#989288","#9c978d","#929083","#81837b","#82857f","#7c7a74","#74615b","#77605c","#988582","#aea5a5","#ffffff","#ffffff","#f7f5f5","#aca49d","#7c8675","#7c8372","#888577","#746a5b","#6c6157","#727664","#6e695d","#816c64","#816c65","#9c8b89","#dcd7d9","#ffffff","#ffffff","#e8e5e8","#93858d","#7d686a","#6f5f63","#756771","#72626c","#6f5958","#624e4e","#735f62","#786668","#685454","#918281","#ece9e8","#ffffff","#ffffff","#cbc5c1","#7e7b6f","#696b5f","#616457","#58564c","#524d45","#885956","#ffffff","#a7a0a4","#a99f90","#c5b7af","#ebe8e6","#ffffff","#ffffff","#ffffff","#ffffff","#f7f7f7","#aea6ab","#786a6a","#6a5b60","#756466","#746163","#75686e","#70686c","#6e6671","#969199","#f7f7f7","#ffffff","#ffffff","#ffffff","#ffffff","#f2ebe9","#ae8f85","#9b776c","#956f68","#9d756f","#926e66","#a17d77","#a07b72","#9b786e","#cebcb7","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#b7b6b1","#86857a","#4a4a37","#464533","#42412f","#4a4a38","#464937","#4d4b3a","#636153","#d9d9d6","#ffffff","#ffffff","#ffffff","#ffffff","#f6f6f5","#8f9085","#575848","#454735","#535443","#525343","#4d4f3f","#56584a","#484a3b","#99998f","#f7f7f6","#ffffff","#ffffff","#ffffff","#ffffff","#e0e0dd","#808072","#6a6b5b","#676756","#626151","#626659","#555950","#726961","#78605a","#c5bab8","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#afafa5","#757262","#504c3c","#5f5a4e","#5c5149","#596252","#58594d","#6f645c","#827974","#e7e5e3","#ffffff","#ffffff","#ffffff","#ffffff","#f6f4f4","#82706e","#564244","#56454a","#544247","#564446","#4e3a38","#584139","#573e3a","#998a88","#f6f5f4","#ffffff","#ffffff","#ffffff","#ffffff","#d0d1ce","#57594e","#3a3b2d","#3a372c","#3a342b","#905a57","#ffffff","#bcb1b5","#9d958b","#948b84","#958c87","#b3acb1","#ffffff","#ffffff","#dad7d7","#8a8482","#7a7472","#7b7674","#7e7977","#807a78","#6c6662","#75706b","#777475","#65625f","#625f58","#696660","#cac9c7","#ffffff","#ffffff","#c3beb9","#978f88","#8c847d","#7c746e","#86817a","#8a857c","#7f7771","#716d66","#716f65","#737167","#66655a","#87857c","#e3e3e1","#ffffff","#f3f2f1","#8e8b82","#615f54","#5d5b51","#727066","#77746c","#66635a","#55554b","#5b5b51","#615e56","#65625a","#5c5a50","#96958c","#ffffff","#ffffff","#c7c7c3","#717163","#717061","#666557","#6e6e5f","#605f50","#6f6e5f","#706f61","#6c6b5d","#656558","#747467","#7c7b6f","#cdcdc8","#ffffff","#ffffff","#a6a79f","#7f8175","#77796d","#7d7f73","#64655a","#757c6a","#6d7264","#75776b","#7a7970","#7c7770","#736d66","#8b817c","#eceae9","#ffffff","#e5dedc","#836e66","#645f54","#635f57","#77766e","#6c685b","#696357","#6d695c","#767567","#7d796c","#706a63","#78716b","#aeaaa6","#ffffff","#ffffff","#cdc6c7","#655454","#6a5a59","#6f605e","#6d5d5c","#635252","#5f4e50","#6b5b5b","#604f4e","#695956","#645858","#6d6363","#d1cfce","#ffffff","#f5f5f4","#89877e","#646159","#5a5b52","#57594f","#52544b","#5b574f","#936b6e","#ffffff","#c6b9b7","#978d78","#bbb199","#b8ae94","#b4ac89","#d3ceb4","#f1efea","#77716f","#5f5a58","#615d5a","#6e6b68","#5d5a58","#5c5957","#5d5b57","#696761","#666262","#615d5a","#67645c","#6a6761","#67655f","#d0d0ce","#b5b4b1","#645f57","#78746c","#68635b","#68635b","#57564e","#5d5c54","#67655d","#727169","#626157","#5f5d53","#5c5b51","#717066","#7d7d74","#ededeb","#84817a","#676259","#5c574e","#615c53","#565248","#5f5b53","#58554d","#57564d","#686960","#67645d","#615e56","#626056","#565348","#a8a7a1","#d6d6d3","#5c5b51","#605f51","#6e6e60","#636254","#747365","#6b6a5c","#7a796b","#5e5d4f","#706f61","#67665a","#6a695d","#706f63","#6b6a5d","#d9d8d5","#a6a7a0","#6e6f63","#6d6e63","#66685c","#57594d","#6e6f63","#757a6b","#828577","#717367","#727369","#787a71","#67685e","#67685d","#8b8c82","#edecea","#7e7266","#67554b","#7c7469","#79756d","#595951","#6e6c62","#6b675c","#6f6d61","#65665a","#747065","#79766e","#848179","#77746c","#b4b3af","#cecccb","#665d5a","#6b605e","#675e5d","#645b5a","#6b6261","#645b5a","#746a6c","#6e6565","#5e5453","#645b58","#69605d","#68605e","#736c69","#e3e2e0","#99988f","#5d5c51","#615f57","#64655d","#60625a","#5b5c55","#5e5954","#9e7a7d","#ffffff","#c7b5ad","#a99b79","#b4a87d","#aca173","#bdb27c","#bfb587","#776b59","#605c59","#5a5855","#50504d","#5b5b57","#5b5c59","#595956","#5d5e59","#6f7169","#5d5957","#5c5954","#5a584e","#5c5951","#68665e","#5d5b53","#6a6961","#64655b","#6b6c63","#68685f","#5f6057","#65665d","#67685f","#63645b","#6a6b62","#645f56","#59544b","#59554b","#676259","#626157","#5d5950","#5e5953","#534e46","#5e5951","#6a655d","#66615a","#56514b","#5b5651","#56534e","#706e68","#5b5852","#5e5b54","#625f57","#565349","#57554c","#58574e","#605f56","#59584b","#717164","#5b5a4e","#626255","#6b6a5d","#6f6e62","#6b6b5e","#626154","#59584e","#626056","#646258","#65645a","#5c5a4d","#69695e","#67685f","#525349","#5e5f55","#74756c","#65665d","#757469","#78796e","#5f5f57","#666660","#7c7671","#645f59","#605d55","#656359","#64665b","#656c5d","#786e63","#6c6457","#7c7971","#71726c","#63645b","#6a6760","#64655c","#6d6f66","#62625a","#5f6157","#6a6c62","#62645a","#717268","#6a6a64","#7d7a75","#716d68","#747170","#706d6c","#656261","#716e6d","#716e6e","#686563","#686662","#676560","#6c685f","#77736c","#6c6963","#706f63","#6a6b5e","#77776c","#65655c","#595954","#565751","#4e4f49","#504c48","#ad8b8c","#ffffff","#bfb1a8","#a69c79","#b5ab7d","#b6ad82","#b1a586","#8c806c","#443935","#67605f","#524d4b","#4d4845","#5c5856","#585452","#625f5c","#736f6b","#65625d","#5e5a58","#625f57","#605e52","#535146","#5e5c54","#48473d","#525045","#5f5c54","#636058","#716e66","#6d6a62","#6b6861","#6a6760","#716e66","#74716a","#615c54","#6a655d","#625d54","#625d54","#58554b","#2d271d","#524c46","#534e47","#59544d","#56514a","#56514a","#595350","#524c49","#58534f","#56524e","#504d48","#595651","#65625a","#55524a","#44433a","#3c3b30","#504e46","#59584e","#646258","#5c5a50","#5d5c51","#68675d","#66655a","#68665c","#6b695f","#6a6860","#58564e","#615f57","#5c5a51","#454437","#4d4d42","#666760","#71736a","#5e5f56","#52534a","#52534a","#645f57","#635f57","#585650","#6d6d67","#6a6b66","#64655d","#696860","#58544c","#3b3a30","#5e5e59","#615f54","#675f52","#79756d","#6d706b","#6c716b","#64645f","#636760","#626760","#5c5d57","#5c5e54","#62645a","#606258","#54574d","#474941","#71726c","#60605b","#686863","#6d6e68","#646560","#5f5f5a","#676861","#6a6b64","#66675e","#72746a","#737465","#707166","#72746b","#545747","#57594a","#6b6c60","#5b5c52","#5c5c59","#5c5d59","#494a46","#595552","#a68582","#ffffff","#c3b4b4","#b2a883","#a99f71","#afa087","#9a9288","#423a2f","#2d231a","#4d4645","#5e5956","#585251","#5d5755","#5d5956","#55514e","#56524e","#575350","#69655c","#565248","#5f5a51","#605c52","#59544e","#3b342d","#443e36","#5a5b52","#686960","#66675e","#53534b","#5e5952","#615c55","#716e66","#54544c","#645f57","#67625a","#5b534c","#5e544e","#574f48","#464438","#4d483f","#5b564e","#635d57","#5a5550","#595451","#5d5352","#5e5553","#645e58","#625d56","#494944","#777771","#51514c","#676762","#393b2f","#474b3f","#53584e","#636457","#5c5d50","#67685b","#5e5f52","#62685c","#5a5f54","#6f7163","#5f6051","#585451","#5e5c57","#60605a","#6d6e65","#424131","#4b483a","#626256","#625e54","#645f56","#535148","#54544e","#5a574f","#5c574f","#676259","#5b544a","#504e46","#646560","#6a6b68","#5d5d57","#33372b","#5e6257","#64685c","#54564b","#686a60","#63655a","#5b5d53","#5c5955","#686863","#696b66","#666b63","#646b5d","#5e6557","#565d4f","#3e4839","#454e42","#5a5d55","#5f665d","#64655d","#6a6b63","#6a6b64","#5e5f58","#646159","#6d6a62","#605d55","#6b6860","#5d5d54","#67695f","#5e6456","#515444","#4e4f44","#64655d","#4d4d46","#585452","#585553","#565651","#5c5954","#a58080","#ffffff","#beadaf","#b3a88c","#a9a07f","#7c7265","#67625a","#37312a","#2e2722","#474340","#565250","#5c5856","#53504d","#55514c","#514d48","#534f4b","#5a5551","#5b5953","#56544e","#65625d","#57554f","#5b5851","#3a372d","#3b382f","#69615b","#58504a","#665e58","#5d554f","#6b6a62","#58564e","#6c6b63","#56534b","#5d5750","#565149","#534e46","#59554d","#453e39","#38362d","#48433d","#524c4e","#5b5453","#6c645e","#6f665b","#726963","#67605b","#5e5856","#6a6668","#67605d","#635d58","#57514c","#5d5752","#44403b","#302b26","#54514d","#6a6660","#59544d","#5e5952","#67625b","#6b6862","#605b56","#59544b","#645e56","#5f5e55","#65625a","#686459","#615c50","#4a443e","#5b524d","#6d6863","#605e5a","#686561","#656562","#686866","#595c59","#636663","#5a5c59","#525552","#65605b","#4e4d4b","#5b5f5c","#4b4b46","#2c2824","#4f4c47","#5d5a54","#625e5a","#5c5854","#6d6965","#5b5754","#60605b","#656661","#60615b","#5e625b","#5c5954","#5f5c57","#57544e","#3a3a32","#34322b","#5e5956","#63615d","#666761","#63645e","#5a5c56","#585954","#50504a","#5d5d57","#595953","#5a5a54","#60655d","#62655c","#4f5448","#323628","#393c2f","#63655d","#545650","#575452","#535350","#4e4f49","#5b5953","#987c79","#ffffff","#baa8ab","#857866","#6f6656","#615b59","#5d5853","#4d4642","#3b3433","#504d4a","#64605d","#4b4845","#504e4b","#4d4845","#5e5956","#585450","#595451","#54544f","#5a5a55","#5e5e59","#555550","#57544d","#363329","#3d3b30","#615e57","#58554e","#5b5851","#535049","#595951","#5e5c54","#514d45","#5e5851","#5e544e","#615952","#655f58","#565249","#49423e","#302621","#4b433f","#5e574b","#5b5242","#a1967b","#ab9c77","#9f9475","#92896d","#736c5b","#555348","#55534b","#5a5951","#626058","#5a5951","#3d3c36","#21221b","#636660","#595952","#5a5a53","#56564f","#64655d","#595954","#52524b","#68665e","#59564e","#6c675a","#6b6358","#645a4e","#74665a","#725245","#88685b","#a0887c","#968478","#968578","#84756b","#887a71","#82766e","#7a6f69","#5d5750","#5c5751","#67625e","#555251","#565857","#484844","#1b1b19","#42423f","#5a5a55","#535652","#545653","#4e514e","#5d5f5b","#62605c","#625f5b","#53504c","#565450","#51524f","#545451","#4f504d","#3c3f3a","#3f3f3b","#52514e","#565753","#595a56","#5d5e5a","#5a5b57","#52534f","#5a5c57","#5b5c58","#5a5b57","#595a56","#5c605b","#5f625d","#52524d","#232519","#393a32","#4f504b","#61625e","#50504d","#535351","#565651","#524d48","#997571","#ffffff","#beaeb0","#786b5d","#75685e","#6a5e57","#645c54","#524942","#433832","#5a5452","#544e4c","#595351","#57514f","#57514e","#645d5a","#58524f","#5b5552","#524d46","#534e47","#655f5a","#59544e","#58524b","#3d362f","#4e4840","#655d57","#58504a","#6d655f","#655d57","#645954","#665a56","#605450","#574c47","#574b46","#685d57","#544842","#615550","#615750","#412b25","#62564e","#70604a","#a3937c","#ab9b7f","#b4a284","#c6b28f","#b4a286","#a39681","#7e7569","#60544e","#5b4f4a","#6f635d","#695d58","#564a44","#574d45","#635b54","#5b534c","#746b66","#615952","#615952","#6f655d","#746860","#706359","#76685d","#6f5f5a","#796761","#89786f","#86736b","#7c5e51","#8c6c62","#8c7469","#927970","#977f75","#927c73","#97827b","#7b5f57","#8f7770","#7f6d69","#756965","#615c5a","#635f5f","#5b5659","#584e4e","#312422","#5f5652","#5b514c","#5a544f","#5e5854","#554e4a","#58514d","#5e5654","#5f5754","#645a58","#665a59","#585450","#514d48","#504c48","#383431","#3f3a39","#534c4b","#5a5653","#5a5653","#625d5c","#645f5e","#565250","#53504f","#585554","#595656","#5a5756","#545151","#5c5757","#595654","#36322b","#4d4943","#5a5653","#4f4a48","#565251","#555251","#524d49","#5f5250","#9f7f7a","#ffffff","#b8afad","#887975","#836b67","#8d746b","#a07e78","#94726c","#9b7e7a","#7c6c63","#8e6d6b","#7f6261","#8d7b71","#8b7a6f","#927876","#8e7d7a","#83716d","#8e726f","#8e7873","#9e8c85","#977e7a","#988880","#8f7370","#a07675","#967772","#a47b75","#9a7870","#9c7a77","#a27977","#927c77","#a5777c","#ad9a91","#9e7177","#c87b81","#8d7b75","#b68986","#ac7572","#c2948d","#957a78","#968881","#a0827d","#91736f","#ae9594","#ac8b8a","#a88786","#b99997","#9b7b7a","#b69c96","#b68e8d","#a67677","#a98883","#9a7c74","#a98c85","#b29395","#ab8a8a","#a49097","#a78e93","#a3868d","#a58189","#9e8689","#957b7e","#ad7f8a","#a08092","#928287","#9a8d8f","#8e7684","#7f7e8b","#7b7c8a","#73767d","#7a7b86","#71737d","#90919b","#7e808a","#817d82","#83898e","#868592","#878492","#7c7e8c","#89868e","#a29093","#906f72","#997476","#a67e7f","#a58489","#b68f99","#b08b87","#a68389","#a08491","#8f7a7c","#a27e86","#b39499","#a68c90","#a87c87","#a58587","#9d8580","#a28282","#a78f90","#a88384","#ab8081","#ab8a89","#a88383","#9d7675","#a98582","#a58583","#a38b88","#9d7b7d","#a6827f","#9f7977","#8c6e66","#9e6e6d","#88736c","#976d6d","#886361","#9c7a75","#a58079","#a27975","#a98481","#9c847f","#9d8584"];  

var ball;
ball = create();

var x = 0;
var y = 0;
var counter = 0;
var data = [];

for(var j=0; j<81; j++){
    y = j*15; // crear posiciones
    for(var i=0; i<53; i++){
        x = i*15; // crear posiciones
        // poner cada circulo en la lista que se llama data
        data.push({x:x,y:y,color:painting[counter]});
        counter++;
    }
} 

// escribe tu trabajo aqui
// -----------------------
for (c=0; c<162; c++){
    var pin =data [c];
    create(pin.x, pin.y,"#e6160b");
}
for (c=166; c<168; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b");
}
for (c=171; c<173; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b");
}
for (c=174; c<175; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=176; c<178; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=181; c<183; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=186; c<188; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=191; c<193; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=195; c<197; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=200; c<202; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=204; c<206; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=208; c<212; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=212; c<215; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=216; c<217; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=217; c<221; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=222; c<223; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=224; c<226; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=227; c<228; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=229; c<231; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=232; c<236; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=237; c<238; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=239; c<241; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=242; c<246; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=248; c<250; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=251; c<252; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=253; c<255; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=257; c<259; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=261; c<268; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=271; c<274; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=275; c<276; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=277; c<279; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=280; c<281; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=282; c<284; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=285; c<289; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}

for (c=292; c<294; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=295; c<299; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=301; c<303; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=304; c<305; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=306; c<308; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=311; c<312; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=314; c<321; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=322; c<327; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=328; c<329; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=330; c<332; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=333; c<334; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=335; c<337; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=338; c<342; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=343; c<344; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=345; c<347; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=348; c<352; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=354; c<356; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=357; c<358; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=359; c<361; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=364; c<365; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=367; c<374; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=378; c<380; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=383; c<385; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=388; c<390; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=393; c<395; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=393; c<395; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=396; c<397; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=398; c<400; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=403; c<405; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=407; c<409; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=412; c<414; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=415; c<416; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=420; c<603; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=606; c<611; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=615; c<656; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=657; c<658; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=659; c<664; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=665; c<709; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=710; c<711; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=712; c<717; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=720; c<762; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=763; c<764; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=765; c<770; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=771; c<815; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=818; c<823; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=827; c<1016; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1019; c<1021; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1024; c<1027; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1029; c<1033; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1035; c<1037; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1040; c<1042; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1045; c<1047; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1050; c<1069; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1070; c<1074; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1075; c<1076; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1077; c<1080; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1082; c<1086; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1088; c<1090; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1091; c<1092; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1093; c<1095; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1096; c<1097; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1098; c<1100; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1101; c<1102; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1103; c<1122; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1123; c<1127; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1130; c<1133; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1135; c<1139; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1141; c<1143; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1144; c<1145; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1146; c<1148; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1151; c<1153; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1154; c<1155; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1156; c<1175; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1176; c<1180; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1181; c<1182; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1183; c<1186; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1188; c<1192; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1194; c<1196; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1197; c<1198; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1199; c<1201; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1202; c<1203; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1204; c<1206; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1207; c<1208; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1209; c<1228; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1231; c<1233; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1234; c<1235; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1236; c<1239; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1243; c<1245; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1247; c<1249; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1252; c<1254; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1255; c<1256; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1257; c<1259; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}
for (c=1262; c<1590; c++){
    var pin = data[c];
    create(pin.x, pin.y,"#e6160b"); 
}