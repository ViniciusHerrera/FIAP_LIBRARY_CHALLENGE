import Publisher from "../models/publisherModel";
import BookView from "./bookView";

class PublisherView {
  static renderOnly(publisher: Publisher) {
    return {
      id: publisher.id,
      title: publisher.name,
    };
  };

  static render(publisher: Publisher) {
    return {
      id: publisher.id,
      title: publisher.name,
      books: publisher.books.length > 0 ? BookView.renderMany(publisher.books, true) : [],
    };
  };

  static renderMany(publishers: Publisher[]) {
    return publishers.map(publisher => this.render(publisher));
  };
}

export default PublisherView;