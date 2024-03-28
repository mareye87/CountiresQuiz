import { PropagateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <PropagateLoader color="#fd1173" size={18} />
    </div>
  );
};

export default Loading;
