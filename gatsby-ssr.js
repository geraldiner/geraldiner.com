import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        const style = 'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;' 
        console.log("%csurprise!", style);
        `,
      }}
    />,
  ]);
};
