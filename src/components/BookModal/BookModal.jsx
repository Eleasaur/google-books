const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#f8f8ef",
          minWidth: "300px",
          width: "65%",
          color: "#2c2c2c",
          margin: "auto",
          padding: "1em",
          borderRadius: "1em",
          border: "3px solid #4285f4",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
