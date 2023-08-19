export default class Model {
  constructor() {
    this.imagesArray = [
      {id: 1, name: 'Balloons', isSelected: false},
      {id: 2, name: 'Beach', isSelected: true},
      {id: 3, name: 'Bridge', isSelected: false},
      {id: 4, name: 'Cloudy-Forest', isSelected: false},
      {id: 5, name: 'Lake', isSelected: false},
      {id: 6, name: 'Mountain-Forest', isSelected: false},
      {id: 7, name: 'Mountain-Lake-Forest', isSelected: false},
      {id: 8, name: 'Ocean-Sunset', isSelected: false},
      {id: 9, name: 'Ocean', isSelected: false},
      {id: 10, name: 'Stop-Sign-Ocean', isSelected: false}
    ];

    this.addImagesToObj();
  }

  addImagesToObj() {
    const firstImage = new Image();
    firstImage.src = '../images/balloons.jpg';
    this.imagesArray[0].image = firstImage;

    const secondImage = new Image();
    secondImage.src = './images/beach.jpg';
    this.imagesArray[1].image = secondImage;

    const thirdImage = new Image();
    thirdImage.src = './images/bridge.jpg';
    this.imagesArray[2].image = thirdImage;

    const fourthImage = new Image();
    fourthImage.src = './images/cloudy-forest.jpg';
    this.imagesArray[3].image = fourthImage;

    const fifthImage = new Image();
    fifthImage.src = './images/lake.jpg';
    this.imagesArray[4].image = fifthImage;

    const sixthImage = new Image();
    sixthImage.src = './images/mountain-forest.jpg';
    this.imagesArray[5].image = sixthImage;

    const seventhImage = new Image();
    seventhImage.src = './images/mountain-lake-forest.jpg';
    this.imagesArray[6].image = seventhImage;

    const eightImage = new Image();
    eightImage.src = './images/ocean-sunset.jpg';
    this.imagesArray[7].image = eightImage;

    const ninthImage = new Image();
    ninthImage.src = './images/ocean.jpg';
    this.imagesArray[8].image = ninthImage; 

    const tenthImage = new Image();
    tenthImage.src = './images/stop-sign-ocean.jpg';
    this.imagesArray[9].image = tenthImage;
  }

  getFirstImage() {
    return this.imagesArray[0].image;
  }

  getLastImage() {
    return this.imagesArray[9].image; 
  }

  _getCurrentImage() {
    for (let i = 0; i < this.imagesArray.length; i++) {
      if (this.imagesArray[i].isSelected) {
        return this.imagesArray[i];
      }
    }
  }

  allFalse() {
    for (let i = 0; i < this.imagesArray.length; i++) {
      if (this.imagesArray[i].isSelected) {
        this.imagesArray[i].isSelected = false;
      }
    }

    return this.imagesArray;
  }

  getCurrentImageId() {
    for (let i = 0; i < this.imagesArray.length; i++) {
      if (this.imagesArray[i].isSelected) {
        return this.imagesArray[i].id;
      }
    }
  }

  changeToNextImage() {
    for (let i = 0; i < this.imagesArray.length; i++) {
      if (this.imagesArray[i].isSelected) {
        if (this.imagesArray[i] === this.imagesArray[9]) {
          this.imagesArray[i].isSelected = false;
          this.imagesArray[0].isSelected = true;

          return this.getFirstImage();
        } else {
          this.imagesArray[i].isSelected = false;
          this.imagesArray[i + 1].isSelected = true;
  
          return this.imagesArray[i + 1].image;
        }
      }
    }
  }

  changeToPreviousImage() {
    for (let i = 0; i < this.imagesArray.length; i++) {
      if (this.imagesArray[i].isSelected) {
        if (this.imagesArray[i] === this.imagesArray[0]) {
          this.imagesArray[i].isSelected = false;
          this.imagesArray[9].isSelected = true;

          return this.getLastImage();
        } else {
          this.imagesArray[i].isSelected = false;
          this.imagesArray[i - 1].isSelected = true;

          return this.imagesArray[i - 1].image;
        }
      }
    }
  }

  changeImageWithId(id) {
    const currentImage = this._getCurrentImage();

    for (let i = 0; i < this.imagesArray.length; i++) {
      if (id === this.imagesArray[i].id) {
        currentImage.isSelected = false;
        this.imagesArray[i].isSelected = true;

        return this.imagesArray[i].image;
      }
    }
  }
}