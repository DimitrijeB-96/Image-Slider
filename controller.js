export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  
    this.view.setController(this);

    this.view.displayFirstImage(this.model.getFirstImage());
  }

  handleNextImage() {
    const image = this.model.changeToNextImage();
    this.view.displayNextImage(image);
  }

  handlePreviousImage() {
    const image = this.model.changeToPreviousImage();
    this.view.displayPreviousImage(image);
  }

  handleSelectedImage(id) {
    const image = this.model.changeImageWithId(id);
    this.view.displaySelectedImage(image);
  }
}