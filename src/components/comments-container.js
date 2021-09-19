import React, { useEffect } from "react";
import { connect } from "react-redux";
import { apiCall } from "../redux/comments/actionComments";

const CommentsContainer = (props) => {
  const { apiData, apiComments } = props;
  useEffect(() => {
    apiComments();
  }, [apiComments]);

  const displayApiData = apiData.isLoading ? (
    <p>Patientez svp ....</p>
  ) : apiData.error ? (
    <p>{apiData.error}</p>
  ) : (
    apiData.comments.map((comment) => {
      return (
        <div key={comment.id} className="flex space-x-2 items-center bg-blue-100 m-5 space-y-2 p-5">
          <p>{comment.body}</p> <p>{comment.name}</p>
        </div>
      );
    })
  );

  return <><div>
      <h1>
          Commentaires
      </h1>
      {displayApiData}
      </div></>;
};

const mapStateToProps = (state) => {
  return {
    apiData: state.comments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    apiComments: () => dispatch(apiCall()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
