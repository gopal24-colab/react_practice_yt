import React from "react";

const MemoComp = () => {
  console.log("Momo component");
  return <div>MemoComp</div>;
};

export default React.memo(MemoComp);
