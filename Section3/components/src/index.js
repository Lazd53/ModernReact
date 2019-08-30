import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam"
        content={faker.lorem.sentence()}
        timeAgo="Today at 4:50PM"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        content={faker.lorem.sentence()}
        timeAgo="Today at 2:10PM"
        avatar={faker.image.avatar()}
      />
      <CommentDetail author="Jane"
        content={faker.lorem.sentence()}
        timeAgo="Yesterday at 4:50PM"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Sami" 
        content={faker.lorem.sentence()}
        timeAgo="Yesterday at 1:50AM"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector(`#root`));
