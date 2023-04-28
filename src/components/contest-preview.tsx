import * as React from "react";

const ContestPreview: React.FC<{ contest: object }> = ({ contest }) => {
  return (
    <div id={contest.id} className="contest-preview">
      <div className="category">
        {contest.categoryName}
      </div>
      <div className="contest">
        {contest.contestName}
      </div>
    </div>
  )
}

export default ContestPreview;