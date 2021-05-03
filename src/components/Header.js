import React from "react";

// function areEqual(prevProps, nextProps) {
//    return prevProps === nextProps ? false : true;
//   }

const Header = () => {
        console.log("Header");
return (<header>
        <h1 className='f1'>RoboFriends</h1>
        </header>);
    };

// export default class Header extends Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         return false;
//     }

//     render() {
//         return (<header>
//                     <h1 className='f1'>RoboFriends</h1>
//                 </header>);
//     }
// }

  export default React.memo(Header);