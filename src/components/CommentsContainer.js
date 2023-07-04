import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Kushal Nigam",
    text: "Lorem, ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Prateek Singh ",
    text: "Lorem, ipsum dolor sit amet",
    replies: [
      {
        name: "Kushal Nigam",
        text: "Lorem, ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "Kushal Nigam",
        text: "Lorem, ipsum dolor sit amet",
        replies: [
          {
            name: "Kushal Nigam",
            text: "Lorem, ipsum dolor sit amet",
            replies: [
              {
                name: "Kushal Nigam",
                text: "Lorem, ipsum dolor sit amet",
                replies: [],
              },
              {
                name: "Kushal Nigam",
                text: "Lorem, ipsum dolor sit amet",
                replies: [
                  {
                    name: "Kushal Nigam",
                    text: "Lorem, ipsum dolor sit amet",
                    replies: [
                      {
                        name: "Kushal Nigam",
                        text: "Lorem, ipsum dolor sit amet",
                        replies: [
                          {
                            name: "Kushal Nigam",
                            text: "Lorem, ipsum dolor sit amet",
                            replies: [],
                          },
                          {
                            name: "Kushal Nigam",
                            text: "Lorem, ipsum dolor sit amet",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shubham Shukla",
    text: "Lorem, ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Ram Tiwari",
    text: "Lorem, ipsum dolor sit amet",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* {console.log(comment.name,comment.replies)} */}
      <div className="pl-5 ml-5 border border-l-gray-300">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h2 className="text-2xl font-bold">Comments: </h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
