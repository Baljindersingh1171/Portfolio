// src/components/Loading.js
import React from "react";
// import { Oval } from "react-loader-spinner";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    // <div style={styles.loaderContainer}>
    //   <Oval height={50} width={50} color="blue" ariaLabel="loading" />
    // </div>
    <div style={styles.loaderContainer}>
      {/* <BeatLoader color="#7F00FF" size={15} margin={2} /> */}

      <RingLoader color="#7F00FF" loading={true} size={140} />
    </div>
  );
};

// const styles = {
//   loaderContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   },
// };

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
export default Loading;
