class Reward {
    constructor(presentsDiv, openDiv) {
      this.presentsDiv = presentsDiv;
      this.openDiv = openDiv;
      this.whenOpenPresent = this.whenOpenPresent.bind(this);
      
      this.presentImages = [];
      this.fillPresent();
      this.numOpened = 0;
    } 
    
    fillPresent() {
      for (const source of sources) {
        var present = new Present(this.presentsDiv, source, this.whenOpenPresent);
        this.presentImages.push(present);
      }
    }
    
    whenOpenPresent() {
      this.numOpened++;
      if (this.numOpened === this.presentImages.length) {
        this.openDiv.textContent = 'Hooray!';
      }
    } 
  }

  class Present {
    constructor(element, source, callbackFunction) {
      this.element = element;
      this.source = source;
      this.callbackFunction = callbackFunction;
      this.openPresent = this.openPresent.bind(this);

      this.image = document.createElement('img');
      this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
          this.image.addEventListener('click', this.openPresent);
      this.element.append(this.image);
    } 
    
    openPresent(event) {
      this.image.src = this.source;
        this.image.removeEventListener('click', this.openPresent);
      this.callbackFunction();
    }
  }

  const sources = [
    'Images/cakeSlice.jpeg',
    'Images/books.png',
    'Images/headphones.jpeg',
    'Images/phone.png',
    'Images/laptop.png'
  ];