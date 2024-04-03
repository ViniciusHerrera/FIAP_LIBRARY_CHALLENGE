import Publisher from "../models/publisherModel";
import BookView from "./bookView";

class PublisherView {
  static render(publisher: Publisher) {
    return {
      id: publisher.id,
      title: publisher.name,
      books: BookView.renderMany(publisher.books),
    };
  };

  static renderMany(publishers: Publisher[]) {
    return publishers.map(publisher => this.render(publisher));
  };
}

export default PublisherView;