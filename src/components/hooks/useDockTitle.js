import { useEffect } from "react";

const useDockTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  });
};

export default useDockTitle;
