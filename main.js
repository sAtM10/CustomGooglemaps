function myMap(){

    map = new google.maps.Map(document.getElementById("map"),{
        center:{lat: 28.50959506247081, lng:   77.40992962768892},
        zoom:18,
       map_id:`8232d2cfbf4e794b`
    });


    var marker = {
      url: "https://cdn1.iconfinder.com/data/icons/3d-isometric-color/256/map-pin-iso-color.png", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
  };

   // marker 
  new google.maps.Marker({
    position: {lat: 28.509822287693094, lng:77.41310530726481},
    scaledSize: new google.maps.Size(50, 50), 
    map,
    icon: marker,
    title:"logix blossom county"
   
  });




  new google.maps.Marker({
    position:{lat:    28.515540438615517, lng:  77.37144051899377},
    map, 
    icon:{
      scaledSize: new google.maps.Size(30, 30), 
     url: "https://cdn3.iconfinder.com/data/icons/clinical-3/96/medic-128.png",
     origin: new google.maps.Point(0,0), // origin
     anchor: new google.maps.Point(0, 0) // anchor
    } ,  
    title: "hospital",
  });

  new google.maps.Marker({

    position:{lat:28.50585991004455,  lng: 77.40860538800437},
    map, 
    icon:{
      scaledSize: new google.maps.Size(30, 30), 
     url: "https://cdn3.iconfinder.com/data/icons/clinical-3/96/medic-128.png",
     origin: new google.maps.Point(0,0), // origin
     anchor: new google.maps.Point(0, 0) // anchor
    } ,  
    title: "hospital",
  });



//  hotel

new google.maps.Marker({

  position:{lat:28.496057065608724,   lng: 77.40249168688537},
  map, 
  icon:{
    scaledSize: new google.maps.Size(30, 30), 
   url: "https://cdn3.iconfinder.com/data/icons/travel-vacation-28/256/Hotel.png",
   origin: new google.maps.Point(0,0), // origin
   anchor: new google.maps.Point(0, 0) // anchor
  } ,  
  title: "Hotel",
});

//  metro

new google.maps.Marker({

  position:{lat:28.51112067881793,  lng: 77.40342677003906},
  map, 
  icon:{
    scaledSize: new google.maps.Size(50, 50), 
   url: "https://cdn2.iconfinder.com/data/icons/3d-transport/256/Train.png",
   origin: new google.maps.Point(0,0), // origin
   anchor: new google.maps.Point(0, 0) // anchor
  } ,  
  title: "metro sector 137",
});

//  LPG station 

new google.maps.Marker({

  position:{lat:28.499800722778513,  lng:  77.4121094546629},
  map, 
  icon:{
    scaledSize: new google.maps.Size(50, 50), 
   url: "https://cdn2.iconfinder.com/data/icons/car-garage-2/256/Gas_Pump.png",
   origin: new google.maps.Point(0,0), // origin
   anchor: new google.maps.Point(0, 0) // anchor
  } ,  
  title: " LPG Gas Pump",
});



// 


      }

  

    //   28.50948288610268, 77.413008747744
    //   28.508230536731915, 77.4067200372797

    // 28.509525236910626, 77.41257669372308


    window.initMap = initMap;