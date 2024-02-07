import { Done } from "@mui/icons-material";

const InfoMessage = () => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="border-4 rounded-full p-6">
        <Done className="text-gray-300" />
      </div>

      <div className="mt-3 text-gray-300">
        <p>Press 'a' or tap the plus button to</p>
        <p className="text-center">create a new to-do</p>
      </div>
    </div>
  );
};

export default InfoMessage;
