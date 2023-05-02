function fetchProduct(id) {
	return fetch(`https://dummyjson.com/products/${id}`)
	  .then((res) => res.json());
  }
  
  
  function updateProduct(product, idPrefix) {
	const titleEl = document.getElementById(`${idPrefix}-title`);
	const priceEl = document.getElementById(`${idPrefix}-price`);
	const imageEl = document.getElementById(`${idPrefix}-image`);
  
	titleEl.textContent = product.title;
	priceEl.textContent = product.price.toFixed(2) + '€';
	imageEl.src = product.thumbnail;
  }
  
  fetchProduct(1)
	.then((product) => {
	  updateProduct(product, 'product-1');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});
  
    fetchProduct(2)
	.then((product) => {
	  updateProduct(product, 'product-2');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(3)
	.then((product) => {
	  updateProduct(product, 'product-3');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(4)
	.then((product) => {
	  updateProduct(product, 'product-4');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(5)
	.then((product) => {
	  updateProduct(product, 'product-5');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

    fetchProduct(6)
	.then((product) => {
	  updateProduct(product, 'product-6');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(7)
	.then((product) => {
	  updateProduct(product, 'product-7');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(8)
	.then((product) => {
	  updateProduct(product, 'product-8');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(9)
	.then((product) => {
	  updateProduct(product, 'product-9');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(10)
	.then((product) => {
	  updateProduct(product, 'product-10');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(11)
	.then((product) => {
	  updateProduct(product, 'product-11');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(12)
	.then((product) => {
	  updateProduct(product, 'product-12');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(13)
	.then((product) => {
	  updateProduct(product, 'product-13');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(14)
	.then((product) => {
	  updateProduct(product, 'product-14');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(15)
	.then((product) => {
	  updateProduct(product, 'product-15');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(16)
	.then((product) => {
	  updateProduct(product, 'product-16');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(17)
	.then((product) => {
	  updateProduct(product, 'product-17');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(18)
	.then((product) => {
	  updateProduct(product, 'product-18');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(19)
	.then((product) => {
	  updateProduct(product, 'product-19');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(20)
	.then((product) => {
	  updateProduct(product, 'product-20');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(21)
	.then((product) => {
	  updateProduct(product, 'product-21');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(22)
	.then((product) => {
	  updateProduct(product, 'product-22');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(23)
	.then((product) => {
	  updateProduct(product, 'product-23');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(24)
	.then((product) => {
	  updateProduct(product, 'product-24');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(25)
	.then((product) => {
	  updateProduct(product, 'product-25');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(26)
	.then((product) => {
	  updateProduct(product, 'product-26');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(27)
	.then((product) => {
	  updateProduct(product, 'product-27');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(28)
	.then((product) => {
	  updateProduct(product, 'product-28');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(29)
	.then((product) => {
	  updateProduct(product, 'product-29');
	})
  .catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});

  fetchProduct(30)
	.then((product) => {
	  updateProduct(product, 'product-30');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});


    let countEl1 = document.getElementById("anz1");
    let countEl2 = document.getElementById("anz2");
    let countEl3 = document.getElementById("anz3");
    let countEl4 = document.getElementById("anz4");
    let countEl5 = document.getElementById("anz5");
    let countEl6 = document.getElementById("anz6");
    let countEl7 = document.getElementById("anz7");
    let countEl8 = document.getElementById("anz8");
    let countEl9 = document.getElementById("anz9");
    let countEl10 = document.getElementById("anz10");
    let countEl11 = document.getElementById("anz11");
    let countEl12 = document.getElementById("anz12");
    let countEl13 = document.getElementById("anz13");
    let countEl14 = document.getElementById("anz14");
    let countEl15 = document.getElementById("anz15");
    let countEl16 = document.getElementById("anz16");
    let countEl17 = document.getElementById("anz17");
    let countEl18 = document.getElementById("anz18");
    let countEl19 = document.getElementById("anz19");
    let countEl20 = document.getElementById("anz20");
    let countEl21 = document.getElementById("anz21");
    let countEl22 = document.getElementById("anz22");
    let countEl23 = document.getElementById("anz23");
    let countEl24 = document.getElementById("anz24");
    let countEl25 = document.getElementById("anz25");
    let countEl26 = document.getElementById("anz26");
    let countEl27 = document.getElementById("anz27");
    let countEl28 = document.getElementById("anz28");
    let countEl29 = document.getElementById("anz29");
    let countEl30 = document.getElementById("anz30");
    
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;
    let count8 = 0;
    let count9 = 0;
    let count10 = 0;
    let count11 = 0;
    let count12 = 0;
    let count13 = 0;
    let count14 = 0;
    let count15 = 0;
    let count16 = 0;
    let count17 = 0;
    let count18 = 0;
    let count19 = 0;
    let count20 = 0;
    let count21 = 0;
    let count22 = 0;
    let count23 = 0;
    let count24 = 0;
    let count25 = 0;
    let count26 = 0;
    let count27 = 0;
    let count28 = 0;
    let count29 = 0;
    let count30 = 0;
    


    
    function anzPlus1(preis1){
      count1 = count1 + 1;
      countEl1.innerText = ("Anzahl: ") + count1;
      var preis1 = 599;
      updateGesamtpreis();
    }

    
    function anzMinus1(){
      count1 = count1 - 1;
      countEl1.innerText = ("Anzahl: ") + count1;
      updateGesamtpreis();
    }
    
    
    function anzPlus2(){
      count2 = count2 + 1;
      countEl2.innerText = ("Anzahl: ") + count2;
      var preis2 = 899;
      updateGesamtpreis();
    }
    
    
    function anzMinus2(){
      count2 = count2 - 1;
      countEl2.innerText = ("Anzahl: ") + count2;
      updateGesamtpreis();
    }
    
    function anzPlus3(){
      count3 = count3 + 1;
      countEl3.innerText = ("Anzahl: ") + count3;
      var preis3 = 1249
      updateGesamtpreis();
    }
    
    
    function anzMinus3(){
      count3 = count3 - 1;
      countEl3.innerText = ("Anzahl: ") + count3;
      updateGesamtpreis();
    }
    
    function anzPlus4(){
      count4 = count4 + 1;
      countEl4.innerText = ("Anzahl: ") + count4;
      preis4 = 280;
      updateGesamtpreis();
    }
    
    
    function anzMinus4(){
      count4 = count4 - 1;
      countEl4.innerText = ("Anzahl: ") + count4;
      updateGesamtpreis();
    }
    
    function anzPlus5(){
      count5 = count5 + 1;
      countEl5.innerText = ("Anzahl: ") + count5;
      preis5 = 499;
      updateGesamtpreis();
    }
    
    
    function anzMinus5(){
      count5 = count5 - 1;
      countEl5.innerText = ("Anzahl: ") + count5;
      updateGesamtpreis();
    }
    
    function anzPlus6(){
      count6 = count6 + 1;
      countEl6.innerText = ("Anzahl: ") + count6;
      preis6 = 1749;
      updateGesamtpreis();
    }
    
    
    function anzMinus6(){
      count6 = count6 - 1;
      countEl6.innerText = ("Anzahl: ") + count6;
      updateGesamtpreis();
    }

     function anzPlus7(){
      count7 = count7 + 1;
      countEl7.innerText = ("Anzahl: ") + count7;
      updateGesamtpreis();
    }
    
        function anzMinus7(){
      count7 = count7 - 1;
      countEl8.innerText = ("Anzahl: ") + count7;
      updateGesamtpreis();
    }
    
    function anzPlus8(){
      count8 = count8 + 1;
      countEl3.innerText = ("Anzahl: ") + count8;
    updateGesamtpreis();
    }
    
    
    function anzMinus8(){
      count8 = count8 - 1;
      countEl3.innerText = ("Anzahl: ") + count8;
      updateGesamtpreis();
    }
    
    function anzPlus9(){
      count9= count9 + 1;
      countEl9.innerText = ("Anzahl: ") + count9;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus9(){
      count9 = count9 - 1;
      countEl9.innerText = ("Anzahl: ") + count9;
      updateGesamtpreis();
    }
    
    function anzPlus10(){
      count10 = count10 + 1;
      countEl10.innerText = ("Anzahl: ") + count10;
      preis5 = 499;
      updateGesamtpreis();
    }
    
    
    function anzMinus10(){
      count5 = count5 - 1;
      countEl10.innerText = ("Anzahl: ") + count10;
      updateGesamtpreis();
    }
    
    function anzPlus11(){
      count11 = count11 + 1;
      countEl11.innerText = ("Anzahl: ") + count11;
     
      updateGesamtpreis();
    }
    
    
    function anzMinus11(){
      coun11 = count11 - 1;
      countEl11.innerText = ("Anzahl: ") + count11;
      updateGesamtpreis();
    }

    function anzMinus12(){
      count12 = count12 - 1;
      countEl12.innerText = ("Anzahl: ") + count12;
      updateGesamtpreis();
    }
    
    
    function anzPlus13(){
      count13 = count13 + 1;
      countEl13.innerText = ("Anzahl: ") + count13;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus13(){
      count13 = count13 - 1;
      countEl13.innerText = ("Anzahl: ") + count13;
      updateGesamtpreis();
    }
    
    function anzPlus14(){
      count14 = count14 + 1;
      countEl14.innerText = ("Anzahl: ") + count14;
    
      updateGesamtpreis();
    }
    
    
    function anzMinus14(){
      count14 = count14 - 1;
      countEl14.innerText = ("Anzahl: ") + count14;
      updateGesamtpreis();
    }
    
    function anzPlus15(){
      count15 = count15 + 1;
      countEl15.innerText = ("Anzahl: ") + count15;
    
      updateGesamtpreis();
    }
    
    
    function anzMinus15(){
      count15 = count15 - 1;
      countEl15.innerText = ("Anzahl: ") + count15;
      updateGesamtpreis();
    }
    
    function anzPlus16(){
      count16 = count16 + 1;
      countEl16.innerText = ("Anzahl: ") + count16;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus16(){
      count16 = count16 - 1;
      countEl16.innerText = ("Anzahl: ") + count16;
      updateGesamtpreis();
    }
    
    function anzPlus17(){
      count17 = count17 + 1;
      countEl17.innerText = ("Anzahl: ") + count17;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus17(){
      count17 = count17 - 1;
      countEl17.innerText = ("Anzahl: ") + count17;
      updateGesamtpreis();
    }
         
    function anzPlus18(){
      count18 = count18 + 1;
      countEl18.innerText = ("Anzahl: ") + count18;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus18(){
      count18 = count18 - 1;
      countEl18.innerText = ("Anzahl: ") + count18;
      updateGesamtpreis();
    }
    
    function anzPlus19(){
      count19 = count19 + 1;
      countEl19.innerText = ("Anzahl: ") + count19;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus19(){
      count19 = count19 - 1;
      countEl19.innerText = ("Anzahl: ") + count19;
      updateGesamtpreis();
    }
    
    function anzPlus20(){
      count20 = count20 + 1;
      countEl20.innerText = ("Anzahl: ") + count20;
      preis4 = 280;
      updateGesamtpreis();
    }
    
    
    function anzMinus20(){
      count20 = count20 - 1;
      countEl20.innerText = ("Anzahl: ") + count20;
      updateGesamtpreis();
    }
    
    function anzPlus21(){
      count21 = count21 + 1;
      countEl21.innerText = ("Anzahl: ") + count21;
      preis5 = 499;
      updateGesamtpreis();
    }
        
    function anzMinus21(){
      count21 = count21 - 1;
      countEl21.innerText = ("Anzahl: ") + count21;
      updateGesamtpreis();
    }
    
    function anzPlus22(){
      count22 = count22 + 1;
      countEl22.innerText = ("Anzahl: ") + count22;
      
      updateGesamtpreis();
    }2
    function anzMinus22(){
      count22 = count22 - 1;
      countEl22.innerText = ("Anzahl: ") + count22;
      updateGesamtpreis();
    }

    function anzMinus22(){
      count22= count22 - 1;
      countEl22.innerText = ("Anzahl: ") + count22;
      updateGesamtpreis();
    }
    
    
    function anzPlus23(){
      count23 = count23 + 1;
      countEl23.innerText = ("Anzahl: ") + count23;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus23(){
      count23 = count23 - 1;
      countEl23.innerText = ("Anzahl: ") + count23;
      updateGesamtpreis();
    }
    
    function anzPlus24(){
      count24 = count24 + 1;
      countEl24.innerText = ("Anzahl: ") + count24;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus24(){
      count24 = count24 - 1;
      countEl24.innerText = ("Anzahl: ") + count24;
      updateGesamtpreis();
    }
    
    function anzPlus24(){
      count25 = count25 + 1;
      countEl25.innerText = ("Anzahl: ") + count25;
      preis4 = 280;
      updateGesamtpreis();
    }
    
    
    function anzMinus25(){
      count25 = count25 - 1;
      countEl25.innerText = ("Anzahl: ") + count25;
      updateGesamtpreis();
    }
    
    function anzPlus26(){
      count26 = count26 + 1;
      countEl26.innerText = ("Anzahl: ") + count26;
      
      updateGesamtpreis();
    }
    
    
    function anzMinus26(){
      count26 = count26 - 1;
      countEl26.innerText = ("Anzahl: ") + count26;
      updateGesamtpreis();
    }
    
    function anzPlus27(){
      count27 = count27 + 1;
      countEl27.innerText = ("Anzahl: ") + count27;
      updateGesamtpreis();
    }
    
    
    function anzMinus27(){
      count27 = count27 - 1;
      countEl27.innerText = ("Anzahl: ") + count27;
      updateGesamtpreis();
    }

    function anzPlus28(){
      count28 = count28 + 1;
      countEl28.innerText = ("Anzahl: ") + count28;
      updateGesamtpreis();
    }
    
    
    function anzMinus28(){
      count28 = count28 - 1;
      countEl28.innerText = ("Anzahl: ") + count28;
      updateGesamtpreis();
    }

    function anzPlus29(){
      count29 = count29 + 1;
      countEl29.innerText = ("Anzahl: ") + count29;
      updateGesamtpreis();
    }
    
    function anzMinus29(){
      count29 = count29 - 1;
      countEl29.innerText = ("Anzahl: ") + count29;
      updateGesamtpreis();
    }

    function anzPlus30(){
      count30 = count30 + 1;
      countEl30.innerText = ("Anzahl: ") + count30;
      updateGesamtpreis();
    }
    
    function anzMinus30(){
      count30 = count30 - 1;
      countEl30.innerText = ("Anzahl: ") + count30;
      updateGesamtpreis();
    }
    
    function updateGesamtpreis(){
      let preis1 = 549;
      let preis2 = 899;
      let preis3 = 1249;
      let preis4 = 280;
      let preis5 = 499;
      let preis6 = 1749;
      let preis7 = 1499;
      let preis8 = 0;
      let preis9 = 0;
      let preis10 = 0;
      let preis11 = 0;
      let preis12 = 0;
      let preis13 = 0;
      let preis14 = 0;
      let preis15 = 0;
      let preis16 = 0;
      let preis17 = 0;
      let preis18 = 0;
      let preis19 = 0;
      let preis20 = 0;
      let preis21 = 0;
      let preis22 = 0;
      let preis23 = 0;
      let preis24 = 0;
      let preis25 = 0;
      let preis26 = 0;
      let preis27 = 0;
      let preis28 = 0;
      let preis29 = 0;
      let preis30 = 0;
      let gesamt = (count1 * preis1) + (count2 * preis2) + (count3 * preis3) + (count4 * preis4) + (count5 * preis5) + (count6 * preis6) + (count7 * preis7) + (count8 * preis8) + (count9 * preis9) + (count10 * preis10) + (count11 * preis11) + (count12 * preis12) + (count13 * preis13) + (count14 * preis14) + (count15 * preis15) + (count16 * preis16) + (count17 * preis17) + (count18 * preis18) + (count19 * preis19) + (count20 * preis20) + (count21 * preis21) + (count22 * preis22) + (count23 * preis23) + (count24 * preis24) + (count25 * preis25) + (count26 * preis26) + (count27 * preis27) + (count28 * preis28) + (count29 * preis29) + (count30 * preis30);
      let gesamtEl = document.getElementById("gesamtpreis");
      gesamtEl.innerText = gesamt.toFixed(2) + "€";
      console.log(preis1)
      }
      
    
    