import React from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => (
                <p>
                  User context value {user} and {channel}
                </p>
              )}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
      {/* This is not useful over a big project */}
    </div>
  );
};

export default ComponentC;
