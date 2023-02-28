// import { Fragment } from "react";
// import ReactDOM from "react-dom";

// // const Backdrop = () => {
// //   return (
// //     </div>
// //   );
// // };

// const Overlay = (props) => {
//   return (
//     <div
//       className="modal fade hidden fixed top-0 left-0 w-full h-full overflow-y-hidden outline-none overflow-y-auto"
//       id="myModal"
//       tabIndex="-1"
//       aria-labelledby="Modal"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered relative w-auto pointer-events-none">
//         <div
//           className="modal-content border-none shadow-lg relative flex flex-col w-full
//             pointer-events-auto bg-white outline-none text-current rounded-md"
//         >
//           {props.children}
//         </div>
//       </div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("overlay");

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {/* {ReactDOM.createPortal(<Backdrop />, portalElement)} */}
//       {ReactDOM.createPortal(
//         <Overlay>{props.children}</Overlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;
