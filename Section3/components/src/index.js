import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam"
          content={faker.lorem.sentence()}
          timeAgo="Today at 4:50PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          content={faker.lorem.sentence()}
          timeAgo="Today at 2:10PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane"
          content={faker.lorem.sentence()}
          timeAgo="Yesterday at 4:50PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sami"
          content={faker.lorem.sentence()}
          timeAgo="Yesterday at 1:50AM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector(`#root`));
