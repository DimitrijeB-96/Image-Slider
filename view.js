export default class View {
  constructor() {
    this.container = this.createElement('div', 'container');

    this.imageContainer = this.createElement('div', 'image-container');

    this.selectImageContainer = this.createElement('div', 'select-image-container');

    this.firstImageBtn = this.createElement('button', 'first-btn');
    this.firstImageBtn.type = 'button';
    this.firstImageBtn.id = 1;

    this.secondImageBtn = this.createElement('button', 'second-btn');
    this.secondImageBtn.type = 'button';
    this.secondImageBtn.id = 2;

    this.thirdImageBtn = this.createElement('button', 'third-btn');
    this.thirdImageBtn.type = 'button';
    this.thirdImageBtn.id = 3;

    this.fourthImageBtn = this.createElement('button', 'fourth-btn');
    this.fourthImageBtn.type = 'button';
    this.fourthImageBtn.id = 4;

    this.fifthImageBtn = this.createElement('button', 'fifth-btn');
    this.fifthImageBtn.type = 'button';
    this.fifthImageBtn.id = 5;
    
    this.sixthImageBtn = this.createElement('button', 'sixth-btn');
    this.sixthImageBtn.type = 'button';
    this.sixthImageBtn.id = 6;

    this.seventhImageBtn = this.createElement('button', 'seventh-btn');
    this.seventhImageBtn.type = 'button';
    this.seventhImageBtn.id = 7;

    this.eighthImageBtn = this.createElement('button', 'eight-btn');
    this.eighthImageBtn.type = 'button';
    this.eighthImageBtn.id = 8;

    this.ninthImageBtn = this.createElement('button', 'ninth-btn');
    this.ninthImageBtn.type = 'button';
    this.ninthImageBtn.id = 9;

    this.tenthImageBtn = this.createElement('button', 'first-btn');
    this.tenthImageBtn.type = 'button';
    this.tenthImageBtn.id = 10;

    this.previousImageBtn = this.createElement('button', 'previous-btn');
    this.previousImageBtn.type = 'button';

    this.nextImageBtn = this.createElement('button', 'next-btn');
    this.nextImageBtn.type = 'button';

    this.selectImageContainer.append(this.firstImageBtn, this.secondImageBtn, this.thirdImageBtn, this.fourthImageBtn, this.fifthImageBtn, this.sixthImageBtn, this.seventhImageBtn, this.eighthImageBtn, this.ninthImageBtn, this.tenthImageBtn);

    this.container.append(this.previousImageBtn, this.imageContainer, this.selectImageContainer, this.nextImageBtn);

    document.body.append(this.container);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }

    return element;
  }

  setController(controller) {
    this.controller = controller;

    this.nextImageBtn.addEventListener('click', () => {
      this.controller.handleNextImage();
    });

    this.previousImageBtn.addEventListener('click', () => {
      this.controller.handlePreviousImage();
    })

    this.selectImageContainer.addEventListener('click', (e) => {
      this.controller.handleSelectedImage(parseInt(e.target.id));
    });
  }

  displayFirstImage(image) {
    this.imageContainer.append(image);
  }

  displayPreviousImage(image) {
    if (this.imageContainer.firstChild) {
      this.imageContainer.removeChild(this.imageContainer.firstChild);
    }

    this.imageContainer.append(image);
  }

  displayNextImage(image) {
    if (this.imageContainer.firstChild) {
      this.imageContainer.removeChild(this.imageContainer.firstChild);
    }

    this.imageContainer.append(image);
  }

  displaySelectedImage(image) {
    if (this.imageContainer.firstChild) {
      this.imageContainer.removeChild(this.imageContainer.firstChild);
    }

    this.imageContainer.append(image);
  }
}