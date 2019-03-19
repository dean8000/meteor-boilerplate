import React from 'react';

import PrivateHeader from './PrivateHeader';


export default () => {
  return (
    <div>
      <PrivateHeader title="Boilerplate Template"/>
      <div className="page-contents">
        Dashboard template.
      </div>
    </div>
  );
};


// export default class Link extends React.Component {
//
//   render() {
//     return (
//       <div>
//         <PrivateHeader title="Links"/>
//         <AddLink/>
//         <LinksList/>
//       </div>
//     );
//   }
// }
